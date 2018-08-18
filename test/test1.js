
// async function testAsync() {
//     return;
// }

// const result = testAsync();
// console.info('result: %j', result);

// testAsync().then(value => {
//     console.info(value);
// });


//======================================================

/*function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v0 = await 125;
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.info(v0, v1, v2);
}

test();*/

//======================================================


// function takeLongTime() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("long_time_value"), 1000);
//     });
// }

// takeLongTime().then(value => {
//     console.info('got', value);
// });

//-----------------------------------

// async function test() {
//     const v = await takeLongTime();
//     console.info('v: %j', v);
// }
//
// test();

//======================================================
// function takeLongTime(n) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(n + 200), n);
//     });
// }

// function step1(n) {
//     console.info(`step1 with ${n}`);
//     return takeLongTime(n);
// }
//
// function step2(n) {
//     console.info(`step2 with ${n}`);
//     return takeLongTime(n);
// }
//
// function step3(n) {
//     console.info(`step3 with ${n}`);
//     return takeLongTime(n);
// }

// function doIt() {
//     console.info('doIt');
//     const time1 = 300;
//     step1(time1).then(time2 => step2(time2)).then(time3 => step3(time3)).then(result =>{
//         console.info(`result is ${result}`);
//         console.timeEnd("doIt");
//     });
// }
//
// doIt();

// async function doIt() {
//     console.info('doIt');
//     const time1 = 300;
//     const time2 = await step1(time1);
//     const time3 = await step2(time2);
//     const result = await step3(time3);
//     console.info(`result is ${result}`);
//     console.timeEnd("doIt");
// }
//
// doIt();

/**
 * 现在把业务要求改一下，仍然是三个步骤，但每一个步骤都需要之前每个步骤的结果
 * @param n
 */
/*function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(m, n) {
    console.log(`step2 with ${m} and ${n}`);
    return takeLongTime(m + n);
}

function step3(k, m, n) {
    console.log(`step3 with ${k}, ${m} and ${n}`);
    return takeLongTime(k + m + n);
}

async function doIt() {
    console.time("doIt");
    const time1 = 300;

    const time2 = await step1(time1);
    const time3 = await step2(time1, time2);
    const result = await step3(time1, time2, time3);
    console.info(`result is ${result}`);
    console.timeEnd("doIt");
}

doIt();*/

// function f(n) {
//     return new Promise(resolve => {
//         setTimeout(function (resolve(n + 200)) {
//
//         }, n);
//     });
// }
//
// async function f2() {
//
// }
//
// function f1() {
//     return new Promise();
// }
//
// f1().then(value => {
//     console.info('value : %j', value);
// }).catch((err) => {
//     console.error('error : %j', err);
// });

global['$running'] = {
    ahs:0,
    hsb:1
};

$running['hsb'] = 3;

console.info($running);





















