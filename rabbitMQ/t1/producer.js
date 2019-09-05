const amqp = require('amqplib');
const config = require('../../config');

const {host, port, vhost, queue, username, password} = config.rabbitMQ;

class RabbitMQ {

    constructor(){

        this.open = amqp.connect({
            protocol: 'amqp',
            hostname: host,
            port: port,
            username: username,
            password: password,
            vhost: vhost
        });

    }

    sendQueueMsg(queueName, msg, errCallBack){
        let self  = this;

        self.open.then((conn) => {
            return conn.createChannel();
        }).then((channel) => {
            return channel.assertQueue(queueName).then((ok) => {
                return channel.sendToQueue(queueName, new Buffer(msg), {
                    persistent: true
                });
            }).then((data) => {
                if(data){
                    errCallBack && errCallBack("success");
                    channel.close();
                }
            }).catch(() => {
                setTimeout(() => {
                    if(channel){
                        channel.close();
                    }
                }, 500);
            });
        }).catch(() => {
            let num = self.index++;
            if(num < self.length - 1){
                self.open = amqp.connect(self.hosts[num]);
            } else {
                self.index = 0;
            }
        });





    }


    receiveQueueMsg(queueName, receiveCallBack, errCallBack){
        let self = this;

        self.open.then((conn) => {
            return conn.createChannel();
        }).then((channel) => {
            return channel.assertQueue(queueName).then((ok) => {
                return channel.consume(queueName, (msg) => {
                    if(msg !== null){
                        let data = msg.content.toString();
                        channel.ack(msg);
                        receiveCallBack && receiveCallBack(data);
                    }
                }).finally(() => {
                    setTimeout(() => {
                        if(channel){
                            channel.close();
                        }
                    }, 500);
                });
            })
        }).catch(() => {
            let num = self.index++;
            if(num <= self.length - 1){
                self.open = amqp.connect(self.hosts[num]);
            } else {
                self.open = amqp.connect(self.hosts[0]);
            }
        });

    }

}


let mq = new RabbitMQ();

let obj = {username: "nihao642250185@163.com", cookie: "sjdjojqefnkojsdnakjdsfjapso"};

mq.sendQueueMsg(queue, JSON.stringify(obj), (error) => {
    console.info(error);
});


mq.receiveQueueMsg(queue, (msg) => {
    console.info('msg1: ',typeof msg, msg);
    msg = JSON.parse(msg);

    console.info('msg2: ',typeof msg, msg);
    console.info('username: ', msg.username);
    console.info('cookie: ', msg.cookie);

});



















