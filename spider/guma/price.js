const request = require('superagent');

const getPrcie = async () =>
{
    try {
        const path = 'http://m.igooma.cn/Recycle/Home/Checked?checkid=39183692&modelid=10530';
        let result = await request.get(path);
        result = result.text;
        let start = result.indexOf("&price=") + 7;
        const end = start + 7;
        let price = result.substring(start, end);
        if(price.indexOf('"') > -1){
            price = price.substring(0, price.indexOf('"'));
        }
        console.info('>>>>prcie : ', Math.ceil(price));
    } catch (e) {
        console.error(e);
        return e;
    }
};


getPrcie();




