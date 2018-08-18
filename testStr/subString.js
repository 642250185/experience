
const _ = require('lodash');
// let str = "已有88人回收";
// str = parseInt(str.substring(str.indexOf('有') + 1, str.indexOf('人')));
// console.info('str: ',typeof str, str);

// let number = 3860;
//
// let i = (number  / 100).toFixed(2);
//
// console.info(i);

// const author = ['石墨一雄'];
//
// console.info(author.join(' '));


// let count = 0;
// for(let i = 0; i < 10000; i++){
//     ++count;
//     if(_.isInteger(count / 10)){
//         console.info(`${count} 被10整除的数:`, (count / 10));
//     }
// }


let array = [44,10,55,205,403,154,54,78,135,97,33,70,112,11,89,66,86,118,146,1306,600,86,93];

console.info('>> ', _.sum(array));




