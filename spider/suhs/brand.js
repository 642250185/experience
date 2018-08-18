const _path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require('superagent');
const config = require('../../config');

const {domain, brandPath, brandDataPath, cid} = config.suhs;

const getBrands = async (path) =>
{
    try {
        console.info('获取品牌数据......');
        const brandList = [];
        const result = await request.get(path);
        const $ = cheerio.load(result.text, {decodeEntities:false});
        $('.brands-content').find('li').each(function () {
            const bid = $(this).attr('data-bid');
            const name = $(this).text();
            if(bid != undefined){
                brandList.push({bid, name});
            }
        });
        console.info('size: %d, brandList: %j',brandList.length, brandList);
        return brandList;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getAllBrands = async () =>
{
    try {
        const phonePath = `${domain}${brandPath}${cid.phone}.html`;
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