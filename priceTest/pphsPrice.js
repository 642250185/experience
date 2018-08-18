const amqp = require('amqplib');
const request = require('superagent');

const host      = '139.199.59.214',
      port      = '5672',
      username  = 'admin',
      password  = 'M%Lirnx*ciVlr8ec',
      itemQueue = 'itemQueue';

const _detail     = 'https://hsapi.jd.com/detail?pid=';
const _price_path = 'https://hsp.3.cn/inquiry/compute?p=2';

const getPrice = async (item)=>
{
    try {
        let detailResult = await request.get(`${_detail}${item.pid}`);
        detailResult = JSON.parse(detailResult.text);
        const {venders, detail} = detailResult;
        let wid = 0, vid = 0;
        if(venders.length > 0){
            wid = venders[0].skuId;
            vid = venders[0].vid;
        }
        let priceResult = await request.post(_price_path)
            .set('Content-Type','application/x-www-form-urlencoded')
            .send({
                attr : item.options,
                pid  : item.pid,
                vid  : vid,
                wid  : wid
            });
        priceResult = JSON.parse(priceResult.text);
        const {code, data} = priceResult;
        let price = 0;
        if(code === 200){
            const {initPrice} = data;
            for(let item of initPrice){
                price = item.price;
            }
        } else {
            price = -1;
        }
        console.info('price:: %d, [ pname: %j, pid: %d, wid: %d, vid: %d ]', price, detail.pname, item.pid, wid, vid);
        return price;
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
            vhost    :  '/pphs'
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

const item = {
    pid  : 158925,
    options : "314-2014-1,456-2453-1,612-3339-1,352-2125-2,351-2118-2,350-2114-2,332-2067-2,346-2106-4,355-2134-4,580-3169-4,347-2108-4,316-2026-4,325-2045-4,344-2102-4,345-2104-4,353-2129-4,495-2701-4"
};

const test = async () =>
{
    const result = await getPrice(item);
    console.info('pphs > result: %d', result);
};

test();