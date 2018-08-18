const _path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require('superagent');
const config = require('../../config');
const {category} = config;
const {domain, productListPath, brandDataPath, productDetailPath, spuDataPath, cid} = config.suhs;

const getPListByBrandId = async (brandId, categoryId, start, plist) =>
{
    try {
        const pageSize = 20;
        if(!start) {
            start = 1;
            plist = [];
        }
        let result = await request.get(`${domain}${productListPath}cid=${cid.phone}&keywords=&start=${start}&brand=${brandId}`);
        const spuList = JSON.parse(result.text).Data;
        const filterList = [];
        for(let spu of spuList){
            filterList.push({
                pid     : spu.Id,
                pname   : spu.Name,
                categoryId
            });
        }
        plist = plist.concat(filterList);
        if(spuList.length == pageSize){
            start++;
            return await getPListByBrandId(brandId, categoryId, start, plist);
        } else {
            return plist;
        }
    } catch (e) {
        console.error('error: ', e);
        return e;
    }
};

const getAllProducts = async () =>
{
    try {
        let resultList = [];
        const brands = JSON.parse(fs.readFileSync(brandDataPath));
        console.info('获取机型数据......');
        let sum = 0;
        for(let {bid, name} of brands){
            const plist = await getPListByBrandId(bid, category.phone);
            console.info('name: %j, size: %d', name, plist.length);
            sum = sum + plist.length;
            resultList = resultList.concat(plist);
        }
        console.info('Bsize: %d, Psize: %d, sum: %d',brands.length, resultList.length, sum);
        const pmap = new Map();
        resultList.forEach(re => {
            pmap.set(''+re.pid, re);
        });
        const plist = [];
        for (let [_, value] of pmap) {
            plist.push(value);
        }
        return plist;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getProductByPid = async (pid) =>
{
    try {
        let result = await request.get(`${domain}${productDetailPath}${pid}.html`);
        const $ = cheerio.load(result.text, {decodeEntities:false});
        const pname = $('.ect-color').text();
        return [{pid, pname: pname}]
    } catch (e) {
        console.error(e);
        return [];
    }
};

const crawlerProducts = async (pid) =>
{
    try {
        let spus = [];
        if(pid){
            spus = await getProductByPid(pid);
        } else {
            spus = await getAllProducts();
        }
        await fs.ensureDir(_path.join(spuDataPath, '..'));
        fs.writeFileSync(spuDataPath, JSON.stringify(spus, null, 4));
        return spus;
    } catch (e) {
        console.error(e);
        return [];
    }
};


crawlerProducts();