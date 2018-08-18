const _ = require('lodash');

// const fs = require('fs');
// const gm = require('gm');
//
// mg('./index.png').resize(240,240).noProfile().write('index2.png', function (err) {
//     if(err){
//         console.error('e: ',err);
//     } else {
//         console.info('done');
//     }
// });


// const CHANNEL_MAP = new Map([
//     ['ahs', 0],
//     ['hsb', 1],
//     ['whsht', 2],
//     ['whsqd', 3]
// ]);
//
// console.info(CHANNEL_MAP.get('hsb'));

// const filename = "635645354202559276.json";
// console.info(filename.substring(0, filename.indexOf(".")));
//
// const levelcode = "repair_l0";
// console.info(levelcode.substring(0, levelcode.indexOf("_")));

const funcs = [ { name: '', pid: '', vid: '' },
    { name: '有进水', pid: 75, vid: 77 },
    { name: '账户无法注销', pid: 143, vid: 144 },
    { name: '无法通话', pid: 53, vid: 59 },
    { name: '指纹锁故障', pid: 108, vid: 109 } ];

// const test = (array) => {
//     for(let value of array){
//         if(_.isEmpty(value.name)){
//
//         }
//     }
// };

// console.info('>>',funcs.shift());
// console.info('<<',funcs);


const aaa = [
    "购买渠道",
    "存储容量",
    "剩余保修期",
    "机身颜色",
    "型号",
    "网络制式",
    "内存",
    "储存容量"
];

const i = aaa.includes("储存容量");
console.info(i);























