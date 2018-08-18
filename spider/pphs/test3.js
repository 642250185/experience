var request = require("request");

var options = { method: 'GET',
    url: 'https://coop.aihuishou.com/jd/Product/GetProductDetail',
    qs:
        { pid: '153936',
            wid: '17726',
            vid: '200101',
            p: '2',
            callback: '_jsonp1' },
    headers:
        { 'Postman-Token': 'fb599b31-b9ea-4da1-b04f-a6f8f1b120b6',
            'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let result = eval(_jsonp1(body));
    // console.error('result: ', JSON.stringify(result));
    let {code, data} = result;
    console.info('code: %d, data: %j', code, data);
});

const _jsonp1 = (data) => {
    return data;
};