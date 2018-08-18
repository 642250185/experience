const _path = require('path');
const fs = require('fs-extra');
const request = require('superagent');
const config = require('../../config');
const {domain, brandDataPath, productListPath, spuDataPath} = config.ydm;

const getPListByBrandId = async (pcode, start, plist) =>
{
    try {
        const pageSize = 20;
        if(!start) {
            start = 1;
            plist = [];
        }
        const path = `${domain}${productListPath}`;
        let result = await request.post(path).type('form')
            .send({
                "merType" : "L",
                "pcode"   : pcode,
                "pageNo"  : start
            });
        const spuList = JSON.parse(result.text);
        const filterList = [];
        for(let spu of spuList){
            filterList.push({
                pid     : spu.MERID,
                bname   : spu.PNAME,
                pname   : spu.MERNAME
            });
        }
        plist = plist.concat(filterList);
        if(spuList.length < pageSize){
            return plist;
        } else {
            start++;
            return await getPListByBrandId(pcode, start, plist);
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
        console.info(`品牌数量: ${brands.length}, 获取机型数据......`);
        for(let {bid, name} of brands){
            const plist = await getPListByBrandId(bid);
            console.info('品牌ID: %j, 品牌名称: %j, 机型总量: %d, 机型数据: %j',bid, name, plist.length, plist);
            resultList = resultList.concat(plist);
        }
        console.info('机型总数量: %d', resultList.length);
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
    } catch (e) {
        console.error(e);
        return [];
    }
};


crawlerProducts();