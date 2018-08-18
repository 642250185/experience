const lodash = require('lodash');
const cheerio = require('cheerio');
const request = require("request");
const superagent = require('superagent');

const REQUEST = {
    GET: 'GET',
    POST: 'POST',
    MAIN: 'http://m.suhuishou.cc',
    BRAND_PATH: '/category/index/id/1.html',
    PRICE_PATH: '/flow/evaluate.html',
    DETAILS_PATH: '/goods/index/id/323.html',
    TEST_PATH: '/index.php?m=default&c=flow&a=add_to_cart',
    SPU_PATH: '/api?',
    SPU_DETAILS_PATH: '/goods/index/id/'
};

// 解析页面获取数据
const getBrandList = async () =>
{
    try {
        let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.BRAND_PATH}`);
        const $ = cheerio.load(result.text, {decodeEntities:false});
        const brandList = [];
        $('.brands-content').find('li').each(function () {
            const id = $(this).attr('data-bid');
            const name = $(this).text();
            if(id != undefined){
                brandList.push({id, name});
            }
        });
        return brandList;
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};

// API接口获取数据
const getSpuByBrandId = async (brandId, start, plist) =>
{
    try {
        const pageSize = 20;
        if(!start) {
            start = 1;
            plist = [];
        }
        let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_PATH}cid=1&keywords=&start=${start}&brand=${brandId}`);
        const spuList = JSON.parse(result.text).Data;
        const filterList = [];
        for(let spu of spuList){
            filterList.push({
                pid     : spu.Id,
                pname   : spu.Name
            });
        }
        plist = plist.concat(filterList);
        if(spuList.length == pageSize){
            start++;
            return await getSpuByBrandId(brandId, start, plist);
        } else {
            return plist;
        }
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};


const getSpuList = async () =>
{
    try {
        let resultList = [];
        const brands = await getBrandList();
        for(let brand of brands){
            const plist = await getSpuByBrandId(brand.id);
            resultList = resultList.concat(plist);
        }
        return resultList;
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};

const getQuestionItemByPid = async (pid) =>
{
    try {
        const questionArray = [];
        let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}${pid}.html`);
        const $ = cheerio.load(result.text, {decodeEntities:false});
        $('.goods-optionc').find('li').each(function () {
            let question = $(this).find('span').text();
            question = question.substring(question.indexOf(".") + 1, question.length);
            console.info('question: %j', question);
            questionArray.push(question);
        });
        console.info('size: %d, questionArray: %j', questionArray.length, questionArray);
        return questionArray;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getAllQuestionItem = async () =>
{
    try {
        const questionArray = [];
        const spus = await getSpuList();
        for(let spu of spus){
            let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}${spu.pid}.html`);
            const $ = cheerio.load(result.text, {decodeEntities:false});
            $('.goods-optionc').find('li').each(function () {
                let question = $(this).find('span').text();
                question = question.substring(question.indexOf(".") + 1, question.length);
                console.info('pid: %d, pname: %j, question: %j',spu.pid, spu.pname, question);
                questionArray.push(question);
            });
        }
        console.info('size: %d', questionArray.length);
        const qmap = new Map();
        for(let item of questionArray){
            const question = qmap.get(item);
            if(!question){
                qmap.set(item, item);
            }
        }
        console.info('size: %d, qmap: ', qmap.size, qmap);
        let final = [];
        for(let [key, value] of qmap.entries()){
            final.push(key);
        }
        console.info('size: %d, final: %j', final.length, final);
        return final;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getSpuDetails = async () =>
{
    try {
        // const spus = await getSpuList();
        // const spu = spus[0];
        let pid = 11914;
        let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}${pid}.html`);
        const $ = cheerio.load(result.text, {decodeEntities:false});
        $('.goods-optionc').find('li').each(function () {
            let question = $(this).find('span').text();
            question = question.substring(question.indexOf(".") + 1, question.length);
            console.info('question: ', question);
            $(this).find('.goods-option-conr').children().each(function () {
                let sid = $(this).val();
                let name = $(this).text();
                if(!lodash.isEmpty(sid) && sid.length > 1){
                    console.info('sid  :', sid);
                }
                if(!lodash.isEmpty(name)){
                    console.info('name :', name);
                }

            });
        });
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};

const getPrice = async () =>
{
    try {
        const result = await superagent(REQUEST.POST, `${REQUEST.MAIN}${REQUEST.TEST_PATH}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                goods: {
                    quick   :   1,      // 必填[否]
                    spec    :   ["407351","407354","407356","407363","407366","407370","407374","407378","407379","407384"],    // 必填[是]
                    goods_id:   11916,  // 必填[是]
                    number  :   "1",    // 必填[是]
                    parent  :   0       // 必填[否]
                }
            });
        console.info('result: ', result.text);
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};

const test = async () =>
{
    try {
        await getAllQuestionItem();
        // await getQuestionItemByPid(16069);


    } catch (e) {
        console.error(e);
    }
};

test();



