


// const schedule = require('node-schedule');

// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// schedule.scheduleJob('*/3 * * * * *', async () =>{
//     await runManuallySchedule();
// });
//
// const runManuallySchedule = async(schId) =>
// {
//     if(!schId){
//         console.error('schId is null ....');
//     }
// };


// console.info(11111111);

const compressing = require('compressing');

const main = async() =>{
    try {
        await compressing.gzip.compress
    } catch (e) {
        console.error(e);
        return e;
    }
};







