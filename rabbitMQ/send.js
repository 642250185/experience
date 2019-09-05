const config = require('../config');
const sleep = require('js-sleep/js-sleep');
const amqp = require('amqplib/callback_api');

const {host} = config.rabbitMQ;


const send = async(queue, message) => {
    amqp.connect(`amqp://${host}`, async (err, conn) => {
        if(err){
            throw err;
        }
        conn.createChannel((error, ch) =>{
            if(error){
                throw error;
            }

            ch.assertQueue(queue, {durable: false});
            ch.sendToQueue(queue, new Buffer(message));

            console.info(`[X] Sent ${message}`);

        });

        await sleep(1000 * 0.5);

        conn.close();
        process.exit(0);
    })
};


send('hello', 'hello world');