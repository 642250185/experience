const sleep = require('js-sleep/js-sleep');
const amqp = require('amqplib/callback_api');

const url = `amqp://172.16.242.181`;

const receive = async(queue) => {
    const conn = await amqp.connect(url);
    const ch = await conn.createChannel();

    await ch.assertQueue(queue, {durable: false})

    console.info('[*] Waiting for messages in %s. To exit press CTRL+C', queue);

    const messages = await ch.consume(queue);
    console.info('[X] Received %s', messages.content.toString());




};

