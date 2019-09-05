const amqp = require('amqplib');
const config = require('../config');
const sleep = require('js-sleep/js-sleep');

const {host, port, vhost, queue, username, password} = config.rabbitMQ;

class RabbitMQ {

    constructor(){
        this.connection_params = {
            protocol: 'amqp',
            hostname: host,
            port: port,
            username: username,
            password: password,
            vhost: vhost
        };
    }

    send(queue, message){
        amqp.connect(this.connection_params, async (err, conn) => {
            if(err){
                console.error('err: ', err);
                throw err;
            }
            conn.createChannel((error, ch) =>{
                if(error){
                    console.error('error: ', err);
                    throw error;
                }

                ch.assertQueue(queue, {durable: false});
                ch.sendToQueue(queue, new Buffer.from(message));

                console.info(`[X] Sent ${message}`);

            });

            await sleep(1000 * 0.5);

            conn.close();
            process.exit(0);
        })
    }

    receive(queue){
        amqp.connect(this.connection_params, (err, conn) =>{
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
    }

}


let mq = new RabbitMQ();

let obj = {username: "nihao642250185@163.com", cookie: "sjdjojqefnkojsdnakjdsfjapso"};

mq.send(queue, JSON.stringify(obj));

mq.receive(queue, (msg) => {
    console.info('msg1: ',typeof msg, msg);
    msg = JSON.parse(msg);

    console.info('msg2: ',typeof msg, msg);
    console.info('username: ', msg.username);
    console.info('cookie: ', msg.cookie);

});

