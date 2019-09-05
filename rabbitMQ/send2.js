
const sleep = require('js-sleep/js-sleep');
const amqp = require('amqplib/callback_api');

const url = `amqp://172.16.242.181`;

const send = async(queue, msg) => {
    const conn = await amqp.connect(url);
    console.info('conn: ', conn);

    const ch = await conn.createChannel();
    console.info('conn: ', conn);

    await ch.assertQueue(queue, {durable: false});
    await ch.sendToQueue(queue, new Buffer.from(msg));

    console.info('[X] sent hello world');

    await sleep(1000 * 3);

    conn.close();
    process.exit(0);

};

const queue = "ts1";
const msg = "我爱你❤️中国";

send(queue, msg);


















