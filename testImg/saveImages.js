const fs = require('fs-extra');
const config = require('../config');
const request = require('superagent');
const sleep = require('js-sleep/js-sleep');
const {downloadPath, spuMaxPricePath} = config.ahs;

let i = 0;
const downloadImages = async (item) =>
{
    try {
        ++i;
        const url = item.img;
        let filename = item.pname;
        if(filename.indexOf('/') > -1){
            filename = filename.replace("/", "#");
        }
        const path  = `${downloadPath}/${filename}.jpeg`;
        await request(url).pipe(fs.createWriteStream(path))
            .on('close', () =>{
            console.info(`[${i}] >> ${item.pid} ${filename}.jpeg Download Success!`);
        });
        await sleep(500);  // 延时1秒
    } catch (e) {
        console.error(e);
        return e;
    }
};

const saveAllImages = async () =>
{
    try {
        const spuMaxPrice = JSON.parse(fs.readFileSync(spuMaxPricePath));
        console.info('spuMaxPrice.size: %d', spuMaxPrice.length);
        let count = 0;
        for(let item of spuMaxPrice){
            await downloadImages(item);
        }
    } catch (e) {
        console.error(e);
        return e;
    }
};

saveAllImages();

