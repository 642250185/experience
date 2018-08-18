const request = require("request");

const REQUEST = {
    GET: 'GET',
    POST: 'POST',
    // 速回收
    SU_PRICE_PATH: 'http://m.suhuishou.cc/flow/evaluate.html',
    SU_DETAILS_PATH: 'http://m.suhuishou.cc/goods/index/id/323.html',
};

// 尝试方法1
// const getCookie = async () => {
//     try {
//         const options = {
//             method  : REQUEST.GET,
//             url     : REQUEST.SU_DETAILS_PATH
//         };
//         await request(options, async(err, response, body) => {
//             let cookie = response.headers['set-cookie'][0].toString();
//             cookie = cookie.substring(0, cookie.indexOf(";"));
//             console.error(cookie);
//             const optionsPrice = {
//                 method  : REQUEST.GET,
//                 url     : REQUEST.SU_PRICE_PATH,
//                 headers : {cookie: cookie}
//             };
//             request(optionsPrice, (error, response, body) =>{
//                 if (error) throw new Error(error);
//                 console.log('body: ', body);
//             });
//         });
//     } catch (e) {
//         console.error('error: ', e);
//         return null;
//     }
// };

// 尝试方法2
// const getPrice = async () =>
// {
//     try {
//         const cookie = await getCookie();
//         console.info('cookie: ', cookie);
//         const options = {
//             method: REQUEST.GET,
//             url: REQUEST.SU_PRICE_PATH,
//             headers: {cookie: cookie}
//         };
//         await request(options, function (error, response, body) {
//             if (error) throw new Error(error);
//             console.log('body: ', body);
//         });
//     } catch (e) {
//         console.error('error: ', e);
//         return e;
//     }
// };

// 尝试方法3
var options1 = {
    method: 'GET',
    url: 'http://m.suhuishou.cc/goods/index/id/11916.html'
};

var options2 = {
    method: 'GET',
    url: 'http://m.suhuishou.cc/flow/evaluate.html',
    headers: {
        cookie: 'touch_id=49191641896734410dc94f862749148c692a98d3'
    }
};

request(options1, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(response);
});

request(options2, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
});

// 尝试方法4
// const getCookie = () => {
//     try {
//         var options1 = {
//             method: 'GET',
//             url: 'http://m.suhuishou.cc/goods/index/id/11916.html'
//         };
//         request(options1, function (error, response, body) {
//             if (error) throw new Error(error);
//             let cookie = response.headers['set-cookie'][0].toString();
//             cookie = cookie.substring(0, cookie.indexOf(";"));
//             console.error(cookie);
//             var options2 = {
//                 method: 'GET',
//                 url: 'http://m.suhuishou.cc/flow/evaluate.html',
//                 headers: {
//                     cookie: cookie
//                 }
//             };
//             request(options2, function (error, response, body) {
//                 if (error) throw new Error(error);
//                 console.log('body: ', body);
//             });
//         });
//     } catch (e) {
//         console.error(e);
//     }
// };


