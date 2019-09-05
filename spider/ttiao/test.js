const _ = require('lodash');
const _path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require('superagent');


const test = async() => {
    try {
        const path = `https://mp.toutiao.com/xigua/api/video/getarticlesv2?params={%22MediaId%22:1585904344096782,%22SearchWord%22:%22%22,%22Status%22:%22all%22,%22Source%22:%22all%22,%22Offset%22:0,%22Size%22:20,%22StartTime%22:0,%22EndTime%22:0,%22Feature%22:1,%22PageIdentyInstance%22:0}`;
        let result = await request.get(path);
        console.info('result: ', result);
    } catch (e) {
        console.error(e);
        return e;
    }
};


test();