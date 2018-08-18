const amqp = require('amqplib');
const request = require('superagent');
const sleep = require('js-sleep/js-sleep');

const host      = '139.199.59.214',
      port      = '5672',
      username  = 'admin',
      password  = 'M%Lirnx*ciVlr8ec',
      itemQueue = 'itemQueue';

const apiHost = 'http://localhost:4000';

let authorization = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYWpoLmFpaHVpc2hvdS5jb20vbWluaSIsImlhdCI6MTUzMTIxMTM5OCwiZXhwIjoxNTMxMjE4NTk4LCJuYmYiOjE1MzEyMTEzOTgsImp0aSI6InZRSGVwc0RCRjNHSFBrc1EiLCJzdWIiOiJvNHY0STBlM2VQUFAySGhLOTB1Q2dTa0k1TVJBIiwiaWQiOjM5MDgwMiwibmFtZSI6bnVsbCwibW9iaWxlIjoiMTg3MjEzNzA4MTYiLCJvcGVuX2lkIjoibzR2NEkwZTNlUFBQMkhoSzkwdUNnU2tJNU1SQSIsInVuaW9uX2lkIjpudWxsLCJwYXNzd29yZCI6bnVsbCwiYXZhdGFyIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxOC0wNy0wMyAxNzoxOToyOSIsInVwZGF0ZWRfYXQiOiIyMDE4LTA3LTAzIDE3OjE5OjI5IiwiZGVsZXRlZF9hdCI6bnVsbH0.0N8LzaV5b74hgXxWpRCwO1ZH7oEgEMK85zl6jSI4OAw'

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
        const path = `/api/token/check`;
        let result = await request.get(`${apiHost}${path}`)
            .set('bj_asid', token);
        result = JSON.parse(result.text);
        const {code, checkResult} = result;
        return {code, checkResult};
    } catch (e) {
        console.error(e);
        return e;
    }
};

const getPrcie = async () =>
{
    try {
        const auth = await getAuthorization();
        console.info('code: %d, authorization: %j', auth.code, auth.checkResult);
        const pid = 23797;
        const path = `https://ajh.aihuishou.com/mini/products/${pid}/inquiry`;
        let result = await request.post(path)
            .set('Content-Type', 'application/json')
            .set('authorization', authorization)
            .send({
                "ppvs"      : [2027,2047,2069,2109,3304,2122,2128,2130,2135,3169],
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
            console.info('item >>> : %j', item);
            item.price = await getPrice(item);
            ch.sendToQueue(msg.properties.replyTo, new Buffer(JSON.stringify(item)));
            ch.ack(msg);
        });
    } catch (e) {
        console.error(e);
    }
};



const test = async () => {
    const sss = await getPrcie();
    console.info(typeof sss, sss);
};

test();