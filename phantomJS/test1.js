const phantom = require('phantom');
const sleep = require('js-sleep/js-sleep');

let cookie = '';
const getCookie = async() => {
    try {
        cookie = '';
        const instance = await phantom.create();
        const page = await instance.createPage();
        await page.on('onLoadFinished', async function(status, a){
            console.info('登录状态: ', status);
            if(status === 'success'){
                await page.evaluateJavaScript(function(){
                    const u = document.getElementById('username');
                    const p = document.getElementById('password');
                    const btn = document.getElementById('btn-submit');
                    if(u){
                        u.value = '18721370816';
                        p.value = 'nihao163';
                        btn.click();
                    }
                }).then(async function(html){
                    const cookies = await page.cookies();

                    let final = [];
                    for(const item of cookies){
                        let {name, value} = item;
                        if(name == "_m_h5_tk"){
                            name = " _m_h5_tk";
                        }
                        const joint = `${name}=${value}`;
                        final.push(joint);
                    }
                    cookie = final.join(";");
                });
            }
        });
        /* 请求登录地址 */
        await page.open('https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Recycle/RecycleParamsSet?wh_weex=true&catInfo=%5B%7B%22title%22%3A%22%E6%89%8B%E6%9C%BA%E9%AB%98%E4%BB%B7%E5%9B%9E%E6%94%B6%22%2C%22p%22%3A%22catId4%3A126862528%22%2C%22deep%22%3A2%7D%5D&sceneType=3C&supplierId=24633099&channel=idle&spuId=5&spuid=5&spm=a2170.recyclecatpick.1.1');
        await sleep(10 * 1000);
        return cookie;
    } catch(e) {
        console.error(e);
        return e;
    }
};


const test = async() => {
    const cookie = await getCookie();
    console.info(cookie);
};

test();


