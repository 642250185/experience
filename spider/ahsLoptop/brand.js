const _path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require('superagent');
const config = require('../../config');
const {domain, brandDataPath, brandPath, pageInfoPath} = config.ahs;

const getBrands = async () =>
{
    try {
        console.info('获取品牌数据......');
        const brandList = [];
        const path = `${domain}${brandPath}`;
        const result = await request.get(path);
        const $ = cheerio.load(result.text, {decodeEntities: false});
        $('.main-right').find('li').each(function () {
            const brandId = $(this).find('a').attr('href');
            const bid = parseInt(brandId.substring(brandId.indexOf('b')+1, brandId.length));
            const name = $(this).find('p').text();
            console.info('bid: %d, name: %j',bid, name);
            brandList.push({bid, name});
        });
        return brandList;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const crawlerBrands = async () =>
{
    try {
        const bids = await getBrands();
        const pageInfo = JSON.parse(fs.readFileSync(pageInfoPath));
        const brands = [];
        for(let item of bids){
            for(let page of pageInfo){
                if(item.bid == page.bid){
                    brands.push({
                        bid: item.bid,
                        name: item.name,
                        allPage: page.allPage
                    });
                }
            }
        }
        console.info('size: %d, brands: ',brands.length, brands);
        await fs.ensureDir(_path.join(brandDataPath, '..'));
        fs.writeFileSync(brandDataPath, JSON.stringify(brands, null, 4));
    } catch (e) {
        console.error(e);
        return [];
    }
};


exports.crawlerBrands = crawlerBrands;