const _ = require('lodash');
const cheerio = require('cheerio');
const request = require('superagent');

const getImages  = async(pageIndex, priList) => {
    try {
        if(_.isEmpty(priList)){
            pageIndex = 1;
            priList = [];
        }
        let path = `http://www.mmjpg.com/`;
        if(pageIndex !== 1){
            path = `${path}home/${pageIndex}`;
        }
        let result = await request.get(path);
        const $ = cheerio.load(result.text, {decodeEntities: false});
        const len = $('.pic').find('li').length;
        console.info(`第 [${pageIndex}] 页图片数量: ${len} 张`);
        const images = [];
        $('.pic').find('li').each(function(){
            const url = $(this).find('img').attr('src');
            console.error('url: ', url);
            images.push(url);
        });
        if(len !== 0){
            pageIndex++;
            priList = priList.concat(images);
            return await getImages(pageIndex, priList);
        } else {
            return priList;
        }
    } catch (e) {
        console.error(e);
        return e;
    }
};

const saveImages = async() => {
    try {
        let pageIndex = 0, priList = "";
        const result = await getImages(pageIndex, priList);
        console.info('size: %d, result: %j', result.length, result);
    } catch (e) {
        console.error(e);
        return [];
    }
};


saveImages();