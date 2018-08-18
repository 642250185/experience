const _ = require('lodash');
const cheerio = require('cheerio');
const request = require("request");
const superagent = require('superagent');
const testJson = require('../data/priceTest');

const REQUEST = {
    GET: 'GET',
    POST: 'POST',
    MAIN: 'https://m.shanhs.com',
    PRICE_PATH: '/sapi/options/cal',
    BRAND_PATH: '/sapi/gateway/online-sapi/v1/brand/prd/getCtgInfoList?fromTag=1',
    SPU_PATH: '/sapi/gateway/online-sapi/v1/brand/prd/getPrdInfoList?fromTag=1&ctgId=',
    SPU_DETAILS_PATH: '/sapi/options/'
};

const getBrandList = async () =>
{
    try {
        let result = await superagent(REQUEST.POST, `${REQUEST.MAIN}${REQUEST.BRAND_PATH}`);
        const {ctgInfoList} = JSON.parse(result.text).data;
        return ctgInfoList;
    } catch (e) {
        console.info('error: ', e);
        return e;
    }
};

const getSpuList = async () =>
{
    try {
        const brands = await getBrandList();
        let resultList = [];
        for(let brand of brands){
            const supPath = `${REQUEST.MAIN}${REQUEST.SPU_PATH}${brand.ctgId}`;
            const result = await superagent(REQUEST.POST, supPath);
            const {prdInfoList} = JSON.parse(result.text).data;
            // console.info('bname: %j, Psize: %d', brand.ctgName, prdInfoList.length);
            resultList = resultList.concat(prdInfoList);
        }
        // console.info('Bsize: %d, Psize: %d', brands.length, resultList.length);
        return resultList;
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};

const getskuGroups = async (singleOptionNodeList) =>
{
    try {
        const skuGroups = [];
        for(let singOptionNode of singleOptionNodeList){
            if(singOptionNode.checktype === 0){
                skuGroups.push({
                    group       : singOptionNode.detailname,
                    detailid    : singOptionNode.detailid
                });
            }
        }
        return skuGroups;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getSkuAnswers = async(singleOptionList) =>
{
    try {
        const skuAnswers = [];
        for(let singOption of singleOptionList){
            if(singOption.checktype === 0){
                skuAnswers.push({
                    name        : singOption.detailname,
                    sid         : singOption.detailid,
                    pdetailid   : singOption.pdetailid
                });
            }
        }
        return skuAnswers;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const formatSkus = async (skuList) =>
{
    try {
        const skuMap = new Map();
        skuList.forEach(s => {
            const skustr = s.sku;
            const pids = skuMap.get(skustr);
            if(pids && pids.length > 0) {
                pids.push(s.pid);
            } else {
                skuMap.set(s.sku, [s.pid]);
            }

        });
        const final = [];
        for (let [key, value] of skuMap.entries()) {

            key = JSON.parse(key);
            key.pids = value;
            final.push(key);
        }
        return final;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getSkus = async () =>
{
    try {
        const skuOptions = [];
        const spus = await getSpuList();
        // const spu = spus[1];    // iPhone X
        for(let spu of spus){
            const result = await superagent(REQUEST.POST, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}${spu.priceId}/${spu.prdId}`);
            const {singleOptionList, singleOptionNodeList} = JSON.parse(result.text).data;
            const skuGroups = await getskuGroups(singleOptionNodeList);
            const skuAnswers = await getSkuAnswers(singleOptionList);
            for(let answer of skuAnswers){
                for(let group of skuGroups){
                    if(group.detailid === answer.pdetailid){
                        skuOptions.push({
                            sku: JSON.stringify({
                                sid     : answer.sid,
                                name    : answer.name,
                                group   : group.group
                            }),
                            pid: spu.prdId
                        });
                        console.info('pid: %d, pname: %j, group: %j, name: %j, sid: %j',spu.prdId, spu.prdName, group.group, answer.name, answer.sid);
                    }
                }
            }
            if(skuOptions.length === 0) {
                skuOptions.push({
                    sku: JSON.stringify({
                        sid: '-1'
                    }),
                    pid: spu.prdId
                });
            }
        }
        return skuOptions;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const test = async() =>
{
    const skus = await getSkus();
    console.info('skus.size: %d, skus: %j', skus.length, skus);
    const result = await formatSkus(skus);
    console.error('size: %d, result: %j', result.length, result);
};

const getSpuDetails = async () =>
{
    try {
        const spus = await getSpuList();
        const spu = spus[0];    // iPhone X
        const result = await superagent(REQUEST.POST, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}${spu.priceId}/${spu.prdId}`);
        const {multiOptionList, multiOptionNodeList, singleOptionList, singleOptionNodeList} = JSON.parse(result.text).data;
        const skuGroups = await getskuGroups(singleOptionNodeList);
        const skuAnswers = await getSkuAnswers(singleOptionList);
        const skuOptions = [];
        for(let answer of skuAnswers){
            for(let group of skuGroups){
                if(group.detailid === answer.pdetailid){
                    skuOptions.push({
                        sku: {
                            sid     : answer.sid,
                            name    : answer.name,
                            group   : group.group
                        }
                    });
                    console.info(' group: %j, name: %j, sid: %j', group.group, answer.name, answer.sid);
                }
            }
        }
        if(skuOptions.length === 0) {
            skuOptions.push({
                sku: {
                    sid: '-1'
                }
            });
        }

        console.info('skuOptions: %j', skuOptions);

    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};

const getPrice = async () =>
{
    try {
        // iPhone7
        const iphone7 = {
            channelId:"2",          // 必填（否）
            options:"11,1130,1210,1810,1910,2108,3108,3210,4310,4510",  // 必填（是）
            originTag:"shahs",      // 必填（否）
            phoneId:"2681",         // 必填（是）
            salesId:"",             // 必填（否）
            signature:"ea4aec954314b5d5f4f058ff0fdd091e", // 必填（否）
            time:1526542044514      // 必填（否）
        };
        // iPhoneSE
        const iphoneSE = {
            options: "11,1120,1210,1810,2108,3108,3210,4310,4510",
            phoneId: "2558",
        };
        // iphoneX
        const iphoneX = {
            options: "1140,1260,1810,2108,3108,3210,4310,4510",
            phoneId: "3201",
        };

        let result = await superagent(REQUEST.POST, `${REQUEST.MAIN}${REQUEST.PRICE_PATH}`)
            .set('Content-Type', 'application/json')
            .send(iphoneX);
        result = JSON.parse(result.text);
        console.info('result: %j, price :%d ', result, result.data.price);
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};


const testMap = async () =>
{
    try {
        const sidMap = new Map();
        testJson.forEach(ss => {
            const item = sidMap.get(ss.sid);
            if(item){
                for(let i = 0; i < ss.pids.length; i++){
                    const pid = ss.pids[i];
                    if(!item.pids.includes(pid)){
                        item.pids.push(pid);
                    }
                }
            } else {
                sidMap.set(ss.sid, ss);
            }
        });
        const final = [];
        for(let [key, value] of sidMap.entries()){
            final.push(value);
        }
        return final
    } catch (e) {
        console.error(e);
        return e;
    }
};



testMap();

// 5110,11,1140,1220,1810,2108,3108,3210,4310,4510