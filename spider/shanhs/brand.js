const _path = require('path');
const fs = require('fs-extra');
const request = require('superagent');
const config = require('../../config');

const {domain, brandPath, brandDataPath, fromTag} = config.shanhs;

const getBrands = async (path) =>
{
    try {
        console.info('获取品牌数据......');
        const brandList = [];
        const result = await request.post(path);
        const {ctgInfoList} = JSON.parse(result.text).data;
        for(let brand of ctgInfoList){
            brandList.push({
                bid     : brand.ctgId,
                name    : brand.ctgName,
                orderId : brand.orderId,
                fromTag : brand.fromTag
            });
            console.info('bid: %d, name: %j, orderId: %d, categoryId: %d', brand.ctgId, brand.ctgName, brand.orderId, brand.fromTag);
        }
        return brandList;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getAllBrands = async () =>
{
    try {
        const phonePath = `${domain}${brandPath}fromTag=${fromTag.phone}`;
        return await getBrands(phonePath);
    } catch (e) {
        console.error(e);
        return [];
    }
};

const crawlerBrands = async () =>
{
    try {
        const bids = await getAllBrands();
        await fs.ensureDir(_path.join(brandDataPath, '..'));
        fs.writeFileSync(brandDataPath, JSON.stringify(bids, null, 4));
        return bids;
    } catch (e) {
        console.error(e);
        return [];
    }
};

crawlerBrands();

