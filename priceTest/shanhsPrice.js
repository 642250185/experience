const amqp = require('amqplib');
const request = require('superagent');

const host      = '139.199.59.214',
      port      = '5672',
      username  = 'admin',
      password  = 'M%Lirnx*ciVlr8ec',
      itemQueue = 'itemQueue';

const DOMAIN = 'https://m.shanhs.com';
const PRICE_PATH = '/sapi/options/cal';

// TODO 异常和正常的返回结果如下
// {"msg":"存储容量,未选","status":"101"}
// {"data":{"price":5484,"versionid":2379},"status":"200"}

const getPrice = async (item)=>
{
    try {
        const params = {};
        params.phoneId = item.pid;
        let sidItem = item.options.split(",");
        const sids = [];
        for(let sid of sidItem){
            let str = sid.split("#");
            sids.push(str[0]);
        }
        params.options = sids.map(sid => sid).join(',');
        console.info(params);
        let result = await request.post(`${DOMAIN}${PRICE_PATH}`)
            .set('Content-Type', 'application/json').send(params);
        result = JSON.parse(result.text);
        if(result.status == 200){
            console.info('price: %d', result.data.price);
            return result.data.price;
        } else if(result.status == 101){
            console.error('msg: %j', result.msg);
            return -1
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
            vhost    :  '/shanhs'
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

const item1 = {
    options: "1520,1140#lked0934,1260#ioer9834,1810#od0934,2108,3108,3210,4310,4510",
    pid: "3201"
};

const item2 = {
    options: "11,1120#jkopqw39034,1210#kjoqe0234jsd,1810#we983434,2108#9034jhsd,3108,3210,4310,4510#as98232sd",
    pid: "2558",
};

const item3 = {
    options :'5110,11#lkjpsd,1140#lked0934,1220#i34834,1810#od0934,2108,3108,3210,4310,4510',
    pid: '3159'
};


const test = async () =>
{
    const result = await getPrice(item3);
    console.info('shanhs > result: %d', result);
};

test();