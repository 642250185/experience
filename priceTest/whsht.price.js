const amqp = require('amqplib');
const host = '139.199.59.214',
    port = '5672',
    username = 'whsht',
    password = 'whsht123456',
    itemQueue = 'itemQueue';
const request = require('superagent');
const md5 = require('md5');

const _getSign = (data) => {
    const {pid, itemid, selects, time} = data;
    let sign = [];
    sign.push(`pid=${pid}`);
    sign.push(`itemid=${itemid}`);
    sign.push(`selects=${selects}`);
    sign.push(`time=${time}`);
    sign.push('expire=600');
    sign.push('key=1f3870be274f6c49b3e31a0c6728957f');
    sign = sign.join('&');
    let sum = 0;
    Array.from(sign, char => {
        sum += char.charCodeAt(0);
    });
    console.log(sum);
    const md5Count = sum%3 + 3;
    console.log(sign);
    data.sign  = encrypt(sign, md5Count);
};

const encrypt = (sign, count, encryptedCount) => {
    if(!encryptedCount) {
        encryptedCount = 0;
    }
    if(encryptedCount == count) {
        return sign;
    }
    sign = md5(sign).toUpperCase();
    return encrypt(sign, count, ++encryptedCount);
};

const getPrice = async item => {
    try{
        const data = {
            pid: "1114",
            itemid: item.pid,
            selects: item.options,
            time: parseInt(new Date().getTime()/1000) + ''
        };

        _getSign(data);
        const result = await request.post('http://openapi.huishoubao.com/api/evaluate_v2')
            .type('form')
            .send({data: JSON.stringify(data)});
        const response = JSON.parse(result.text);
        if(response.errcode != 0) {
            console.log(response.errcode);
            return '-1';
        }
        return response.data.quotation;
    }catch(e) {
        console.warn(e);
        process.exit();

    }

};

const receive = async () => {
    try {
        const conn = await amqp.connect({
            protocol: 'amqp',
            hostname: host,
            port: port,
            username: username,
            password: password,
            vhost: '/whsht'
        });
        const ch = await conn.createChannel();
        ch.prefetch(1);
        console.log(' [x] Awaiting RPC requests');

        ch.consume(itemQueue, async function reply(msg) {
            let item = JSON.parse(msg.content.toString());
            item.price = await getPrice(item);

            if(item.price) {
                ch.sendToQueue(msg.properties.replyTo, new Buffer(JSON.stringify(item)));
		        await timeout(1000);
                ch.ack(msg);
            }
        });

    } catch (e) {
        console.warn(e);
    }

};

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


receive();