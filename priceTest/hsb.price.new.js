const amqp = require('amqplib');
const host = '139.199.59.214',
    port = '5672',
    username = 'hsb',
    password = 'hsb123456',
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
    sign.push('key=HSB-sdfaaa_sdJHUGsdiJl');
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
        let selects = item.options;
        if(selects && selects.indexOf('-') >= 0) {
            selects = selects.replace(/\-/g,'#');
        }

        const data    = {
            itemid: item.pid,
            pid: "1377",
            selects: selects,
            time: parseInt(new Date().getTime()/1000) + ''
        };

        _getSign(data);
        console.log(data);
        const result = await request.post('http://openapi.huishoubao.com/api/evaluate_v2')
                    .type('form')
                    .send({data: JSON.stringify(data)});
        console.log(result.text);
	const response = JSON.parse(result.text);
        if(response.errcode != 0) {
            console.log(response.errcode);
            return '-1';
        }
        // const price = parseFloat(response.data.quotation) / 100;
        // return price.toFixed(2);
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
            vhost: '/hsb'
        });
        const ch = await conn.createChannel();
        ch.prefetch(1);
        console.log(' [x] Awaiting RPC requests');

        ch.consume(itemQueue, async function reply(msg) {
            let item = JSON.parse(msg.content.toString());
            item.price = await getPrice(item);

            ch.sendToQueue(msg.properties.replyTo,
                new Buffer(JSON.stringify(item)));
	     await timeout(1000);	
            ch.ack(msg);
        });

    } catch (e) {
        console.warn(e);
    }

};

const test = async () =>
{
    getPrice({
        pid: '30834',
        options: '34-12-44-18-63-71-73-78-83-10-21-23-27-30-53-55-59-65'
    });
};

test();





// receive();
// console.log('pid=1000&type=4&time=1423623250&expire=600&key= TY-h234kk776SGSQQ990KKJ189DH'.charCodeAt());

// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
