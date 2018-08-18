const _path = require('path');
const fs = require('fs-extra');
const request = require('superagent');
const config = require('../../config');
const {category} = config;
const {domain, productListPath, brandDataPath, productDetailPath, spuDataPath} = config.shanhs;

const getPListByBrandId = async (brandId, fromTag, categoryId) =>
{
    try {
        const spuList = [];
        let result = await request.post(`${domain}${productListPath}fromTag=${fromTag}&ctgId=${brandId}`);
        const {prdInfoList} = JSON.parse(result.text).data;
        for(let spu of prdInfoList){
            spuList.push({
                bid     : brandId,
                pid     : spu.prdId,
                pname   : spu.prdName,
                categoryId
            });
        }
        return spuList;
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
        for(let {bid, fromTag} of brands){
            const plist = await getPListByBrandId(bid, fromTag, category.phone);
            resultList = resultList.concat(plist);
        }

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
        let product = await request.post(`${domain}${productDetailPath}${pid}`);
        let {phone} = JSON.parse(product.text).data;
        return [{pname: phone.prdName, pid}]
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
        console.info(spus.length, spus);
        await fs.ensureDir(_path.join(spuDataPath, '..'));
        fs.writeFileSync(spuDataPath, JSON.stringify(spus, null, 4));
        return spus;
    } catch (e) {
        console.error(e);
        return [];
    }
};

exports.crawlerProducts = crawlerProducts;