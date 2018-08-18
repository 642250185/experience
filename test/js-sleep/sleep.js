const sleep = require('js-sleep/js-sleep');

const t_sleep = async () =>
{
    console.time('time');
    await sleep(3000);
    console.timeEnd('time');
};

const test = async ()=>
{
    await t_sleep();
};

test();











