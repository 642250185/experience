const amqp = require('amqplib');
const request = require('superagent');
const sleep = require('js-sleep/js-sleep');

const host      = '139.199.59.214',
      port      = '5672',
      username  = 'admin',
      password  = 'M%Lirnx*ciVlr8ec',
      itemQueue = 'itemQueue';

const _path = `/api/token/check`;
const apiHost = 'http://139.199.59.214:4000';

const getToken = async() =>
{
    try {
        const result = await request.post(`${apiHost}/api/login`)
            .type('form').send({
                username: 'admin',
                password: 'Danding.3467'
            });
        const {token} = JSON.parse(result.text);
        return token;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const getAuthorization = async() =>
{
    try {
        const token = await getToken();
        let result = await request.get(`${apiHost}${_path}`).set('bj_asid', token);
        result = JSON.parse(result.text);
        const checkResult = result.checkResult;
        const auth = result.authorization;
        return {checkResult, authorization: auth}
    } catch (e) {
        console.error(e);
        return e;
    }
};

const getSid = async (options) =>
{
    let sid = [];
    let sidArray = options.split(",");
    for(let item of sidArray){
        sid.push(parseInt(item));
    }
    return sid;
};

const getLocalTime = async () =>
{
    try {
        const date = new Date();
        const LocaleDate = date.toLocaleDateString();
        const LocaleTime = date.toLocaleTimeString();
        return `${LocaleDate} ${LocaleTime}`;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const getPrice = async (item, authorization) =>
{
    try {
        const ppvs = await getSid(item.options);
        const path = `https://ajh.aihuishou.com/mini/products/${item.pid}/inquiry`;
        let result = await request.post(path)
            .set('Content-Type', 'application/json')
            .set('authorization', authorization)
            .send({
                "ppvs"      : ppvs,
                "uuid"      : "e8ab53db-b26f-47fb-8f7d-7ddde2cbbdbb",
                "vendor_id" : "",
                "scene"     : 1089,
                "self"      : true
            });
        result = JSON.parse(result.text);
        const {code, data} = result;
        let price = 0;
        if(code === 200){
            let priceStr = data.actualPrice;
            console.info('price Interval:',priceStr);
            price = parseInt(priceStr.substring(priceStr.indexOf("~")+2, priceStr.length));
        } else {
            price = -1;
        }
        return price;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const receive = async () =>
{
    try {
        const conn = await amqp.connect({
            protocol :  'amqp',
            hostname :  host,
            port     :  port,
            username :  username,
            password :  password,
            vhost    :  '/ajh'
        });

        const ch = await conn.createChannel();
        ch.prefetch(1);
        console.log(' [x] Awaiting RPC requests');
        ch.consume(itemQueue, async function reply(msg) {
            const item = JSON.parse(msg.content.toString());
            const auth = await getAuthorization();
            const localTime = await getLocalTime();
            if(auth.checkResult){
                item.price = await getPrice(item, auth.authorization);
                console.info(`${localTime}>>item : %j`, item);
                ch.sendToQueue(msg.properties.replyTo, new Buffer(JSON.stringify(item)));
                ch.ack(msg);
            } else {
                console.error(`${localTime}>>授权码失效.....`);
                // 休息3分钟
                // await sleep(1000 * 3);
            }
        });
    } catch (e) {
        console.error(e);
    }
};

// receive();

const test = async () => {

    const item = {
        pid  : 23797,
        options :"2027,2047,2069,2109,3304,2122,2128,2130,2135,3169"
    };
    const auth = await getAuthorization();
    const result = await getPrice(item, auth.authorization);
    console.info('ajh > result: %j', result);
};

test();