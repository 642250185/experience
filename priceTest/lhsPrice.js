const amqp = require('amqplib');
const request = require('superagent');

const host      = '139.199.59.214',
      port      = '5672',
      username  = 'admin',
      password  = 'M%Lirnx*ciVlr8ec',
      itemQueue = 'itemQueue';

const getPrice = async (item)=>
{
    try {
        const params = {};
        params['productid'] = item.pid;
        let tag = 0;
        let options = item.options;
        console.info('options: ', options);
        console.info('typeof: ', typeof options);
        options = options.split(",");
        for(let args of options){
            const key = args.split(":")[0];
            const value = args.split(":")[1];
            if(key.indexOf("[") > 0){
                ++tag;
                params[`${key}${tag}`] = Number(value);
            } else {
                params[key] = Number(value);
            }
        }
        console.info('params: %j', params);
        const result = await request.post('http://www.lehuiso.com/addneworder.php')
            .set('Content-Type', 'application/x-www-form-urlencoded').send(params);
        const price = result.text;
        if(isNaN(Number(price))){
            console.error('price:', price);
            return -1;
        } else {
            console.info('price: ', price);
            return price;
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
            vhost    :  '/lhs'
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

const args = {
    pid    : 21528,
    options: "'desc35314:80936','desc35313:80934','desc35315:80937','desc35306:80903','desc35307:80905','desc35308:80908','desc35309:80911','desc35310:80916','desc35311:80920','desc35312[]:80930','desc35312[]:80927','desc35312[]:82171','desc35312[]:80933','desc35312[]:80929'"
};

const test = async () =>
{
    const result = await getPrice(args);
    console.info('lhs > result: %d', result);
};

test();


