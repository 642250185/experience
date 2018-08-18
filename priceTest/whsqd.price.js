const connection = require('./connection');
const {itemQueue, priceQueue, whsAccountQueue, whsCookieQueue} = require('../config').rabbitmq;
const request = require('superagent');
const {getQueueAccounts, updateCookieGenerateDate, updateCookieUseDate} = require('../service/account');

let cookieObj = null;

const getPrice = async (item) => {
    try{
        // cookieObj = {
        //     cookie: 'skey=@PcJXZlwY0;uin=o0244277267'
        // };
        await timeout(1000);
        await getCookie();
        if(!cookieObj) {
            return await getPrice(item);
        }
        const data = {
            mid: item.pid,
            selects: item.options,
            time: new Date().getTime()
        };

        const params = {
            appId: 'wx47031447c8352579',
            UidType: '1',
            vb2ctag: 'PC_sq'
        };
        const result = await request.post('https://chong.qq.com/tws/recycleevaluate/GetEvaluateResult')
            .set('User-Agent', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Mobile Safari/537.36')
            .set('Cookie', cookieObj.cookie)
            .query(params)
            .send(data);
        const response = JSON.parse(result.text);
        const {errcode} = response;
        if(errcode === '0') {
            return (parseFloat(response.data.price)/100).toFixed(2);
        }
        if(errcode === '6' || errcode === '3') {
            console.log(response, item, cookieObj);
            if(errcode === '6') {
                await updateCookieUseDate(cookieObj.qq);
            }
            cookieObj = null;
            return await getPrice(item);
        }
        console.log(response, item);
        return -1;
    }catch(e) {
        console.warn(e);

    }

};

// getPrice({
//     pid: '10006',
//     options: '200101#300403#400301#100502#500101#600101#700101#800101#900202#900204#900206#900208#900210#900212#900214#900216#900218#123'
// });

const getCookie = async () => {
    if(cookieObj) {
        return;
    }
    let result = await $RmqChannel.get(whsCookieQueue);
    if(result) {
        await $RmqChannel.ack(result);
        cookieObj = JSON.parse(result.content.toString());
        console.log('========== get from whs cookie queue', cookieObj);
        await updateCookieGenerateDate(cookieObj.qq);
        return;
    }
    const ch = await $RmqConnection.createChannel();
    result = await ch.get(whsAccountQueue);
    if(result) {
        await ch.close();
        console.log('still have qq account in whsAccount queue', result.content.toString());
        return;
    }else {
        await ch.close();
    }
    const account = await getQueueAccounts();
    if(!account) {
        console.log('no available qq to use.');
        await timeout(1000*60);
        return;
    }
    await $RmqChannel.sendToQueue(whsAccountQueue,
        new Buffer(JSON.stringify(account)));
};

const receive = async () => {
    try {
        await connection.initRabbitMQ();
        $RmqChannel.prefetch(1);
        console.log(' [x] Awaiting RPC requests');

        $RmqChannel.consume(itemQueue, async function reply(msg) {

            let item = JSON.parse(msg.content.toString());
            item.price = await getPrice(item);
            if(item.price) {
                console.log('====',item.price);
                $RmqChannel.sendToQueue(msg.properties.replyTo,
                    new Buffer(JSON.stringify(item)));
                await $RmqChannel.ack(msg);
            }else {
                console.log('what the fuck', item.price);
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