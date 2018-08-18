var request = require("request");

var options = { method: 'GET',
    url: 'https://coop.aihuishou.com/jd/Product/GetProductDetail',
    qs: { pid: '153943', wid: '17895', vid: '200101' }};


const downloadSingleFile = () =>
{
    try {
        return new Promise(function (resolve, reject) {
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                // console.info('body: ', body);
                // console.info('typeof: ',typeof body);
                // console.info('body.length: ',body.length);

                const strA = body.substring(1, body.length);
                const strB = strA.substring(0, strA.lastIndexOf(")"));
                // console.error('strA >>> : ', strA);
                // console.error('strB >>> : ', strB);
                // console.info('typeof strB: ',typeof strB);
                const strC = JSON.parse(JSON.stringify(strB));
                console.error('strC >>> : ', strC);
                // const {code, data} = strC;
                // console.error('code :%d, data: %j', code, data);
                resolve(strC);
            });
        });

    } catch (e) {

    }
};

const test = async () => {
    const result = await downloadSingleFile();
    // console.info('result: %j', result);
};

test();

