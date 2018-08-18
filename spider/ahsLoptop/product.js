const _path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require('superagent');
const config = require('../../config');
const sleep = require('js-sleep/js-sleep');
const {domain, brandDataPath, productListPath, spuDataPath} = config.ahs;

const getPListByBrandId = async (bid, bname, allPage, pageNo, plist) =>
{
    try {
        const spuList = [];
        let path = `${domain}${productListPath}`;
        if(allPage > 1){
            if(!pageNo) {
                pageNo = 1;
                plist = [];
            }
            if(pageNo == 1){
                path = `${path}b${bid}?all=False`;
            } else if(pageNo >=10 && pageNo < 20) {
                const product = '/product/';
                path = `${domain}${product}c5-b${bid}-p${pageNo}?all=False`;
            } else {
                path = `${path}b${bid}-p${pageNo}?all=False`;
            }
        } else {
            path = `${path}b${bid}?all=False`;
        }
        console.info('path: ', path);
        const result = await request.get(path);
        // await sleep(500);   // 延时0.5秒
        const $ = cheerio.load(result.text, {decodeEntities: false});
        $('.product-list-wrapper').find('li').each(function () {
            let pid = $(this).find('a').attr('href');
            pid = parseInt(pid.substring(pid.lastIndexOf('/') + 1, pid.indexOf('.')));
            const img = $(this).find('img').attr('src');
            let pname = $(this).find('p').text();
            // 机型名称存在特殊符号"/",使用#替代,方便后面写入excel表格
            if(pname.indexOf('/') > -1){
                pname = pname.replace("/", "#");
            }
            let recycleCount = $(this).find('span').text();
            recycleCount = parseInt(recycleCount.substring(recycleCount.indexOf('有') + 1, recycleCount.indexOf('人')));
            console.info('bid: %d, bname: %j, pid: %d, pname: %j, recycleCount: %j, img: %j', bid, bname, pid, pname, recycleCount, img);
            spuList.push({
                bid: bid,
                bname: bname,
                pid: pid,
                pname: pname,
                recycleCount: recycleCount,
                img: img
            });
        });
        if(allPage === 1){  // 只有一页时直接返回
            return spuList;
        }
        if(pageNo <= allPage){
            plist = plist.concat(spuList);
        }
        if(Number(pageNo) === Number(allPage)){
            return plist;
        }
        pageNo++;
        return await getPListByBrandId(bid, bname, allPage, pageNo, plist);
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getAllProducts = async () =>
{
    try {
        let resultList = [];
        const brands = JSON.parse(fs.readFileSync(brandDataPath));
        console.info('获取机型数据......');
        for(let {bid, name, allPage} of brands){
            const spuList = await getPListByBrandId(bid, name, allPage);
            console.info('size: %d, spuList:',spuList.length, spuList);
            resultList = resultList.concat(spuList);
        }
        console.info('size: %d, resultList: %j', resultList.length, resultList);
        return resultList;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const crawlerProducts = async () =>
{
    try {
        const spus = await getAllProducts();
        await fs.ensureDir(_path.join(spuDataPath, '..'));
        fs.writeFileSync(spuDataPath, JSON.stringify(spus, null, 4));
        return spus;
    } catch (e) {
        console.error(e);
        return [];
    }
};


exports.crawlerProducts = crawlerProducts;