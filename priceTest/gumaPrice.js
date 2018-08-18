const amqp = require('amqplib');
const request = require('superagent');

const host      = '139.199.59.214',
      port      = '5672',
      username  = 'admin',
      password  = 'M%Lirnx*ciVlr8ec',
      itemQueue = 'itemQueue';

const domain = 'https://webapi.igooma.cn';
const priceAgesPath = '/spu/quoted/get';
const pricePath     = 'http://m.igooma.cn/Recycle/Home/Checked?';

const getcheckid = async (pid, options) =>
{
    try {
        let priceAgesResult = await request.post(`${domain}${priceAgesPath}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Referer', 'http://m.igooma.cn')
            .send({
                channelid:1008,
                version     :   '1.0.0.0',
                platform    :   'GUMAWAP',
                checkids    :   options,
                modelid     :   pid,
                childId     :   0
            });
        priceAgesResult = JSON.parse(priceAgesResult.text);
        const {model} = priceAgesResult;
        return model.checkid;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const getPrice = async (item)=>
{
    try {
        const MAX_PRICE_NUMBER = 7; // 目前来看回收的手机最大价格4位数包含小数点后两位xxxx.xx。
        const checkid = await getcheckid(item.pid, item.options);
        let result = await request.get(`${pricePath}checkid=${checkid}&modelid=${item.pid}`);
        result = result.text;
        const index = result.indexOf('&price=');
        if(index > -1){
            let start = index + 7;
            const end = start + MAX_PRICE_NUMBER;
            let price = result.substring(start, end);
            if(price.indexOf('"') > -1){
                price = price.substring(0, price.indexOf('"'));
            }
            return Math.ceil(price);
        } else {
            return -1;
        }
    } catch (e) {
        console.error(e);
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
            vhost    :  '/guma'
        });

        const ch = await conn.createChannel();
        ch.prefetch(1);
        console.log(' [x] Awaiting RPC requests');
        ch.consume(itemQueue, async function reply(msg) {
            const item = JSON.parse(msg.content.toString());
            item.price = await getPrice(item);
            console.info('item >> :%j', item);
            ch.sendToQueue(msg.properties.replyTo, new Buffer(JSON.stringify(item)));
            ch.ack(msg);
        });
    } catch (e) {
        console.error(e);
    }
};

// receive();

const item = {
    pid  : 10530,
    options : "740,6,4,16,45,19,21,114,47,10,43"
};

const item2 = {
    pid  : 10659,
    options : "6,157,720,19,713,114,47,10,77"
};

const item3 = { // 小米 A1
    pid  : 10553,
    options : "3,19,21,114,10,77"
};

const item4 = {
    pid  : 8323,
    options :"10"
};

const item5 = {
    pid  : 10681,
    options :"339,16,19,21,114,47,10,92,109,101,86,79,59,77,119"
};

const item6 = {
    pid  : 10774,
    options :"339,157,19,21,114,47,10,77,59,79,92,109,101,86,119"
};

const item7 = {
    pid  : 10273,
    options :"5,19,21,717,51,10,92,101,86"
};

const item8 = {
    pid  : 10565,
    options :"6,125,16,45,741,10,19,21,43,47,114,59,77,86,89,101,104"
};

const test = async () =>
{
    const result = await getPrice(item8);
    console.info('guma > result: %d', result);
};

test();