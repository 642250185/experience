const _ = require('lodash');
const request = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const moment = require('moment');
const xlsx = require('node-xlsx').default;
const brandJson = require('../file/brandJson');

const DOWNLOAD_PATH = '../config';

const LIMIT = 24;

const getBrandDetailsIDList = async () =>
{
    try {
        const brandTypeIdList = [];
        // for(let i = 0; i < brandJson.length; i++){
            const brand = brandJson[0];
            const pages = Math.ceil(brand.brandSum / LIMIT);
            console.info('品牌:%j, 总页数: %d', brand.brandName, pages);
            for(let j = 1; j <= pages; j++){
                const result = await request.get(`https://www.svyaznoy.ru/catalog/phone/224/page-${j}?FILTER%5Bbrand%5D%5B%5D=${brand.brandId}`);
                const $ = cheerio.load(result.text, {decodeEntities: false});
                $('.b-listing__generated-container').children('div').each(function (index) {
                    const ahref = $(this).find('a.b-product-block__main-link').attr('href');
                    if(!_.isEmpty(ahref)){
                        const brandDetailsId = ahref.substring(ahref.lastIndexOf('/')+1, ahref.length);
                        brandTypeIdList.push(`${brand.brandName}-${brandDetailsId}`);
                    }
                });
            }
        // }
        console.info('brandTypeIdList:%j', brandTypeIdList);
        return brandTypeIdList;
    } catch (e) {
        console.error('error: %j', e);
        return null
    }
};

const productList2Map = (products) => {
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
};

const getProducts = async () => {
    const brands = await crawlerBrands();
    const products = await crawlerProducts(brands);
    return products;
};

const generateExportData = async () => {
    const products = await getProducts();
    const pmap = productList2Map(products);
    const list = [];
    for(let [bname, productList] of pmap.entries()) {
        list.push(generateSheet(bname, productList));
    }
    return list;
};

const exportExcel = async () => {
    try {
        const data = await generateExportData();
        fs.writeFileSync('text.xlsx', xlsx.build(data));

    } catch (e) {
        console.log(e);
    }
};

const generateSheet = (bname, productList) => {
    try {
        const header = ['手机品牌', '手机图片', ' 手机价格', '手机颜色', ' 手机内存', '操作系统', '机型名称', '上市时间'];
        const rows = [];
        rows.push(header);
        for(let value of productList){
            const row = [];
            row.push(brandName);
            row.push(mobileImage);
            row.push(mobilePrice);

            row.push(mobileMemory);
            row.push(mobileColor.unique());
            row.push(mobileOS);

            row.push(mobileBrand);
            rows.push(row);
        }
        console.info(rows);
        return {name: bname, data: rows};
    } catch (e) {
        console.error('error: %j', e);
        return null
    }
};

getBrandDetails();

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

const _generateFileName = () => {
    return `item-${moment().format('YYYY-MM-DD-HH-mm-ss')}.xlsx`;
};





