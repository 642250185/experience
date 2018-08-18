const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const cheerio = require('cheerio');
const request = require('superagent');
const xlsx = require('node-xlsx').default;
const brandIdList = require('../config/config');

const LIMIT = 24;

const crawlerBrands = async () =>
{
    try {
        // 请求获取品牌数据
        const result = await request.get(`https://www.svyaznoy.ru/catalog/phone/224`);
        const $ = cheerio.load(result.text, {decodeEntities: false});
        // 拿到品牌信息
        const brandList = [];
        for(let value of brandIdList){
            brandList.push({
                brandId: $(`#${value}`).attr('value'),
                brandName: $(`#${value}`).next().next().find('.checkbox-text-inner').text(),
                brandSum: $(`#${value}`).next().next().find('.checkbox-sum').text()
            });
        }
        fs.writeFileSync('brands.json', JSON.stringify(brandList, null, 4));
        return brandList;
    } catch (e) {
        console.error('error: ', e);
        return null;
    }
};

const crawlerProducts = async (brandList) =>
{
    try {
        const brandsJson = await JSON.parse(fs.readFileSync('brands.json'));
        const brandsArray = brandsJson == null ? brandList : brandsJson;
        console.info('brandsArray.size:%j, brandsArray:%j', brandsArray.length, brandsArray);
        const pnameList = [];
        // 获取所有机型ID
        for(let brands of brandsArray) {
            const pages = Math.ceil(brands.brandSum / LIMIT);
            console.info('品牌:%j, 总页数: %d, 每页: %d', brands.brandName, pages, LIMIT);
            for(let i = 1; i <= pages; i++ ){
                const result = await request.get(`https://www.svyaznoy.ru/catalog/phone/224/page-${i}?FILTER%5Bbrand%5D%5B%5D=${brands.brandId}`);
                const $ = cheerio.load(result.text, {decodeEntities: false});
                // 获取div下的所有子元素
                $('.b-listing__generated-container').children('div').each(function (index) {
                    const ahref = $(this).find('a.b-product-block__main-link').attr('href');
                    if(!_.isEmpty(ahref)){
                        const pnameId = ahref.substring(ahref.lastIndexOf('/')+1, ahref.length);
                        pnameList.push(`${brands.brandName}*${pnameId}`);
                    }
                });
            }
        }
        console.info('所有机型:%j',pnameList);
        console.info('开始爬取各品牌下各个机型的详情数据，爬取过程需要耗费一定的时间，请耐心等待......');
        const productsArray = [];
        // 获取机型详情
        for(let value of pnameList){
            const brandName = value.split("*")[0];
            const pnameId = value.split("*")[1];
            console.info(`品牌:${brandName}, 机型ID:${pnameId} 开始爬取数据。`);
            // 获取基本信息
            const result = await request.get(`https://www.svyaznoy.ru/catalog/phone/224/${parseInt(pnameId)}`);
            const $ = cheerio.load(result.text, {decodeEntities: false});
            // 手机品牌
            const mobileBrand = $('.b-offer-title').html();
            console.info(`机型ID:${pnameId} 机型名称: ${mobileBrand}`);
            // 手机图片
            const mobileImage = $('.s-show-big-offer-popup').attr('src');
            console.info(`机型ID:${pnameId} 手机图片: ${mobileImage}`);
            // 手机价格
            let mobilePrice = $('.b-offer-box__price').text();
            mobilePrice = mobilePrice.substring(0, mobilePrice.indexOf("."));
            console.info(`机型ID:${pnameId} 手机价格: ${mobilePrice}`);
            // 手机内存
            let mobileMemory = [];
            let nowMobileMemory = 0;
            $('.b-tech-offer .b-tech-offer__text').children('li').each(function (index) {
                if(index == 3){
                    nowMobileMemory = $(this).find('span').text();
                }
            });
            // 另一个手机内存
            const otherMobileMemory = $('div.b-offer-box__memory').find('a.b-offer-box__memory-item').html();
            mobileMemory.push(nowMobileMemory);
            if(otherMobileMemory){
                mobileMemory.push(otherMobileMemory);
            }
            console.info(`机型ID:${pnameId} 手机内存: ${mobileMemory.unique()}`);
            // 手机颜色
            const nowMobileColor = $('div.b-offer-box__colors').find('span.b-tooltip-new__text').html();
            // 手机的其他颜色
            const mobileColor = [];
            $('div.b-offer-box__colors').find('a').each(function (index) {
                const colorItem = $(this).find('span.b-tooltip-new__text').html().trim();
                if(!_.isEmpty(colorItem)){
                    mobileColor.push(colorItem);
                }
            });
            if(!_.isEmpty(nowMobileColor)){
                mobileColor.push(nowMobileColor.trim());
            }
            console.info(`机型ID:${pnameId} 手机颜色: ${mobileColor.unique()}`);
            // 操作系统
            const mainContentResult = await request.get(`https://www.svyaznoy.ru/catalog/phone/224/${parseInt(pnameId)}/specs#mainContent`);
            const $main = cheerio.load(mainContentResult.text, {decodeEntities: false});
            let mobileOS = null;
            $main('.b-product-view-box__left-column').children('table').each(function (index) {
                if(index == 6){
                    $main(this).find('tr').children('td').each(function (number) {
                        if(number == 1){
                            mobileOS = $main(this).html();
                        }
                    });
                }
            });

            productsArray.push({
                bname : brandName,
                image : mobileImage,
                price : mobilePrice,
                memory: mobileMemory.unique().map(a => a).join(' '),
                color : mobileColor.unique().map(a => a).join(' '),
                os    : mobileOS,
                pname : mobileBrand
            })
        }
        return productsArray;
    } catch (e) {
        console.error('error: ', e);
        return null;
    }
};

const getProducts = async () =>
{
    try {
        const brands = await crawlerBrands();
        const products = await crawlerProducts(brands);
        return products;
    } catch (e) {
        console.error('error: ', e);
        return null;
    }
};

const productList2Map = (products) =>
{
    try {
        const map = new Map();
        products.map(product => {
            const {bname} = product;
            const productList = map.get(bname);
            if(productList) {
                productList.push(product);
            }else {
                map.set(bname, [product]);
            }
        });
        return map;
    } catch (e) {
        console.error('error: ', e);
        return null;
    }
};

const generateExportData = async () =>
{
    const products = await getProducts();
    const pmap = productList2Map(products);
    const list = [];
    for(let [bname, productList] of pmap.entries()) {
        list.push(generateSheet(bname, productList));
    }
    return list;
};

const exportExcel = async () =>
{
    try {
        const data = await generateExportData();
        const fileName = _generateFileName();
        fs.writeFileSync(fileName, xlsx.build(data));
        console.info('数据爬取完毕');
    } catch (e) {
        console.log(e);
    }
};

const generateSheet = (bname, productList) =>
{
    try {
        const header = ['手机品牌', '手机图片', ' 手机价格', '手机颜色', ' 手机内存', '操作系统', '机型名称'];
        const data = [];
        data.push(header);
        for(let value of productList){
            const row = [];
            row.push(value.bname);
            row.push(value.image);
            row.push(value.price);
            row.push(value.color);
            row.push(value.memory);
            row.push(value.os);
            row.push(value.pname);
            data.push(row);
        }
        const result = {name: bname, data: data};
        return result;
    } catch (e) {
        console.error('error: ', e);
        return null
    }
};

exportExcel();

Array.prototype.unique = function()
{
    let res = [this[0]];
    for(let i = 1; i < this.length; i++){
        let repeat = false;
        for(let j = 0; j < res.length; j++){
            if(this[i] == res[j]){
                repeat = true;
                break;
            }
        }
        if(!repeat){
            res.push(this[i]);
        }
    }
    return res;
};

const _generateFileName = () =>
{
    return `item-${moment().format('YYYY-MM-DD-HH-mm-ss')}.xlsx`;
};