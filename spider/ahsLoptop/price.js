const _path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require('superagent');
const config = require('../../config');
const {domain, pricePath, spuDataPath, spuMaxPricePath} = config.ahs;

const getSpuMaxPrices = async (spu) =>
{
    try {
        const path = `${domain}${pricePath}${spu.pid}.html`;
        const result = await request.get(path);
        const $ = cheerio.load(result.text, {decodeEntities: false});
        let i =0;
        $('.section-price').find('li').each(function () {
            ++i;
            let number = $(this).text();
            number = number.trim().replace(/[\r\n]/g);
            number = parseInt(number.substring(0, number.indexOf('u')));
            if(i == 2){
                spu.maxPrice = number;
                console.info('pid: %d, panme: %j, maxPrice: %d', spu.pid, spu.pname, spu.maxPrice);
            }
        });
        return spu;
    } catch (e) {
        console.error(e);
        return [];
    }
};


const getAllSpuMaxPrice = async () =>
{
    try {
        let spuMaxPriceList = [];
        const spus = JSON.parse(fs.readFileSync(spuDataPath));
        console.info('spus.size: %d', spus.length);
        console.info('获取最高价格数据......');
        for(let item of spus){
            const spu = await getSpuMaxPrices(item);
            spuMaxPriceList.push(spu);
        }
        console.info('spuMaxPriceList.Size: ', spuMaxPriceList.length);
        await fs.ensureDir(_path.join(spuMaxPricePath, '..'));
        fs.writeFileSync(spuMaxPricePath, JSON.stringify(spus, null, 4));
        return spus;
    } catch (e) {
        console.error(e);
        return [];
    }
};


exports.getAllSpuMaxPrice = getAllSpuMaxPrice;