
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require("request");
const hash = require('object-hash');
const superagent = require('superagent');
const SortUtil = require('../util/sort');
const leSkuJson = require('../config/leSku');

const REQUEST =
{
    GET             : 'GET',
    POST            : 'POST',
    MAIN            : 'http://www.lehuiso.com',
    TEST_PRICE_PATH : '/m/price.php',
    DETAILS_PATH    : '/m/goods.php?id=21528',
    BRAND_PATH      : '/m/category.php?k=&c=',
    SPU_PATH        : '/m/category.php?',
    SPU_DETAILS_PATH: '/m/goods.php?id=',
    PRICE_PATH      : '/addneworder.php'
};

const getBrandList = async () =>
{
    try {
        const brandList = [];
        let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.BRAND_PATH}`);
        const $ = cheerio.load(result.text, {decodeEntities: false});
        $('.main_left').find('li').each(function () {
            const c = $(this).attr('c');
            const k = $(this).attr('k');
            const bName = $(this).find('a').text();
            brandList.push({
                bId     : c,
                bName   : bName,
                k       : k
            });
        });
        return brandList;
    } catch (e) {
        console.error('error: ', e);
        return [];
    }
};

const getSpuList = async () =>
{
    try {
        const brands = await getBrandList();
        const spuList = []; let sum = 0;
        for(let brand of brands){
            let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_PATH}k=${brand.k}&c=${brand.bId}`);
            const $ = cheerio.load(result.text, {decodeEntities:false});
            sum = sum + $('.main_right').find('li').length;
            // console.info('bname: %j, Psize: %d', brand.bName, $('.main_right').find('li').length);
            $('.main_right').find('li').each(function () {
                let pid = $(this).find('a').attr('href');
                pid = pid.substring(pid.indexOf("=") + 1, pid.length);
                const pName = $(this).find('.span2').text();
                spuList.push({
                    pid     : pid,
                    pname   : pName
                });
            });
        }
        // console.info('Bsize: %d, Psize: %d, Sum: %d', brands.length, spuList.length, sum);
        return spuList;
    } catch (e) {
        console.error('error: ', e);
        return [];
    }
};

const formatSkus = skuList =>
{
    try {
        const skuMap = new Map();
        skuList.forEach(s => {
            const skustr = s.sku;
            const pids = skuMap.get(skustr);
            if(pids && pids.length > 0) {
                pids.push(s.pid);
            }else {
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

const getSku = async () =>
{
    try {
        let skuOptions = [];
        const spus = await getSpuList();
        console.info('spus: %d', spus.length);

        for(let spu of spus){
            let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}${spu.pid}`);
            const $ = cheerio.load(result.text);
            $('.basic-property').children().each(function () {
                // 获取问题选项 (单选)
                let group = $(this).find('.evaluate-title').text();
                group = group.substring(group.indexOf(".") + 1, group.length);
                // 获取答案项 (单选)
                $(this).find('.input-wrap').each(function () {
                    let name = $(this).find('span').text();
                    const key = $(this).find('input').attr('name');
                    const value = $(this).find('input').attr('value');
                    const sid = `${key}:${value}`;
                    const isSku = leSkuJson.includes(group);
                    if(!isSku){
                        console.info(group);
                        skuOptions.push({
                            sku: JSON.stringify({
                                sid     : sid,
                                name    : name,
                                group   : group
                            }),
                            pid: spu.pid
                        });
                        console.info('pid: %d, pname: %j, group: %j, name: %j, sid: %j', spu.pid, spu.pname, group, name, sid);
                    }
                });
            });
            if(skuOptions.length === 0) {
                skuOptions.push({
                    pid: spu.pid,
                    sku: JSON.stringify({
                        sid: '-1'
                    })
                });
            }
        }
        console.info('skuOptions.size: %d', skuOptions.length);
        const final = formatSkus(skuOptions);
        console.info('final.size: %d', final.length);
        return skuOptions;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getQuestonItem = async () =>
{
    try {
        const domain = 'http://localhost:4000';
        let loginInfo = await superagent.post(`${domain}/api/login`)
            .type('form').send({username: 'admin', password: 'Danding.3467'});

        // console.info(loginInfo);
        const {token} = JSON.parse(loginInfo.text);
        // console.info(token);

        // let result = await superagent.get(`${domain}/api/questionItem/sku`)
        //     .set('bj_asid', token).query({channel: 'lhs'});
        // result = JSON.parse(result.text);

        console.info(token);

        let questionItems = await superagent.get(`${domain}/api/questionItem`)
            .set('bj_asid', token).query({channel: 4, question: ''});

        // console.info('questionItems: ', questionItems.text);

        // questionItems = JSON.parse(questionItems.text);

        // console.info('questionItems: ', questionItems);

    } catch (e) {
        console.info(e);
    }
};

const getQuestion = async () =>
{
    try {
        const spus = await getSpuList();
        console.info('spus: %d', spus.length);
        const qmap = new Map();
        for(let spu of spus){
            let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}${spu.pid}`);
            const $ = cheerio.load(result.text);
            $('.basic-property').children().each(function () {
                // 获取问题选项 (单选)
                let group = $(this).find('.evaluate-title').text();
                group = group.substring(group.indexOf(".") + 1, group.length);
                console.info(group);
                const question = qmap.get(group);
                if(!question){
                    qmap.set(group, group);
                }
            });
        }
        console.info('qmap.size:', qmap.size);
        const final = [];
        for(let [key, value] of qmap){
            final.push(value);
        }
        console.info('final.length: %d', final.length);
        console.info('final: %j', final);
    } catch (e) {
        console.error(e);
        return [];
    }
};

const parseUsages = async () =>
{
    try {
        let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}16686`);
        const $ = cheerio.load(result.text);
        let usages = [];
        // TODO 单选项
        $('.basic-property').children().each(function () {
            // 获取问题选项 (单选)
            let group = $(this).find('.evaluate-title').text();
            group = group.substring(group.indexOf(".") + 1, group.length);
            // 获取答案项 (单选)
            let usage = [];
            $(this).find('.input-wrap').each(function () {
                let name = $(this).find('span').text();
                const key = $(this).find('input').attr('name');
                const value = $(this).find('input').attr('value');
                const sid = `${key}:${value}`;
                const isSku = leSkuJson.includes(group);
                    if(!isSku){
                    usage.push({
                        sid : sid,
                        name: name
                    });
                }
            });
            if(usage.length > 0){
                usage = SortUtil.sortByProperty(usage, 'sid');
                let row = {};
                row[group] = usage;
                usages.push(row);
            }
        });
        console.info('usages: %j', usages);
        return usages;
    } catch (e) {
        console.error('error: ', e);
        return [];
    }
};

const parseFuncs = async () =>
{
    try {
        let result = await superagent(REQUEST.GET, `${REQUEST.MAIN}${REQUEST.SPU_DETAILS_PATH}21528`);
        const $ = cheerio.load(result.text);
        let funcs = [];
        $('.function-property').find('.input-wrap').each(function () {
            const name = $(this).find('span').text();
            const pid = $(this).find('input').attr('name');
            const vid = $(this).find('input').attr('value');
            funcs.push({
                name    : name,
                pid     : pid,
                vid     : vid
            });
        });
        console.info('funcs: %j', funcs);
        return funcs;
    } catch (e) {
        console.error('error: ', e);
        return []
    }
};

const getPrice = async () =>
{
    try {
        let result = await superagent(REQUEST.POST, `${REQUEST.MAIN}${REQUEST.PRICE_PATH}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                productid:21528,
                desc35314:80936,
                desc35313:80934,
                desc35315:80937,
                desc35306:80903,
                desc35307:80905,
                desc35308:80908,
                desc35309:80911,
                desc35310:80916,
                desc35311:80920,
            });
        const price = result.text;
        console.info('price: ', price);
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};

const getTestPrice = async () =>
{
    try {
        let result = await superagent(REQUEST.POST, `${REQUEST.MAIN}${REQUEST.PRICE_PATH}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                productid:21528,
                desc35314:80936,
                desc35313:80934,
                desc35315:80937,
                desc35306:80903,
                desc35307:80905,
                desc35308:80908,
                desc35309:80911,
                desc35310:80916,
                desc35311:80920,
            });
        const price = result.text;
        console.info('price: ', price);
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};


getQuestonItem();