
const request = require('superagent');
const jsonp = require('superagent-jsonp');

const path = 'https://coop.aihuishou.com/jd/Product/GetProductDetail?pid=153275&wid=1683&vid=200101&p=2&callback=_jsonp1';

const getData = async () =>
{
    // request.get(path).use(jsonp).end((err, res) => {
    //     console.error(err);
    //     console.info(res);
    // });

    const data = request.get(path).set('dataType','jsonp');
    console.info('data: ', data);
};

const test = async () =>
{
    await getData();
};

test();