const config = require('../config');
const amqp = require('amqplib/callback_api');

const {host} = config.rabbitMQ;


const receive = async(queue) => {
    amqp.connect(`amqp://${host}`, (err, conn) =>{
        if(err){
            throw err;
        }
        conn.createChannel((error, ch) => {
            if(error){
                throw error;
            }

            ch.assertQueue(queue, {durable: false});
            console.info('[*] Waiting for messages in %s. To exit press CTRL+C', queue);

            ch.consume(queue, (messages) => {
                console.info('[X] Received %s', messages.content.toString());
            }, {noAck: true});
        });
    });
};


receive('hello');
