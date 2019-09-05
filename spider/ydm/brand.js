const _ = require('lodash');
const _path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require('superagent');
const config = require('../../config');

const {domain, brandPath, brandDataPath} = config.ydm;

const getBrands = async (path) => {
    try {
        console.info('获取品牌数据......');
        const brandList = [];
        const result = await request.get(path);
        const $ = cheerio.load(result.text, {decodeEntities:false});
        $('.brandItems').find('li').each(function () {
            const bid = $(this).attr('data-val');
            const name = $(this).text();
            if(!_.isEmpty(bid)){
                console.info('bid: %j, name: %j', bid, name);
                brandList.push({bid, name});
            }
        });
        return brandList;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getAllBrands = async () => {
    try {
        const path = `${domain}${brandPath}`;
        return await getBrands(path);
    } catch (e) {
        console.error(e);
        return [];
    }
};

const crawlerBrands = async () => {
    try {
        const bids = await getAllBrands();
        console.info('bids: ', bids);

        // await fs.ensureDir(_path.join(brandDataPath, '..'));
        // fs.writeFileSync(brandDataPath, JSON.stringify(bids, null, 4));
        //
        return bids;
    } catch (e) {
        console.error(e);
        return [];
    }
};

crawlerBrands();