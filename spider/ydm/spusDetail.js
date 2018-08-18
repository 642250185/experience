const _ = require('lodash');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const config = require('../../config');
const xlsx = require('node-xlsx').default;
const {formatDate} = require('../../util/dateUtil');
const {exportPath, downloadPath, spuDataPath} = config.ydm;

const getCurrentSpu = async (pid, spus) =>
{
    try {
        let reuslt = {};
        for(let spu of spus){
            if(spu.pid === pid){
                reuslt = spu;
            }
        }
        return reuslt;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const getSpuDetail = async (pid, html) =>
{
    try {
        const map = new Map();
        const $ = cheerio.load(html, {decodeEntities:false});
        $('.stepItems').find('.stepItem').each(function () {
            let group = $(this).find('.text').attr('title');
            if(_.isEmpty(group)){
                group = "状态异常(可多选";
            }
            let answerStr = [];
            $(this).find('li').each(function () {
                const sid = $(this).attr('id');
                const answer = $(this).find('div').text();
                answerStr.push(`${answer}#${sid}`);
            });
            const str = answerStr.join(', ');
            console.info(`${pid} >> ${group} : ${str}`);
            map.set(group, str);
        });
        return {pid, map};
    } catch (e) {
        console.error(e);
        return e;
    }
};

const crawlerAllSpuDetail = async () =>
{
    try {
        let resultList = [];
        const spus = JSON.parse(fs.readFileSync(spuDataPath));
        const products = await fs.readdir(downloadPath);
        let count = 0;
        for(let filename of products){
            const pcode = filename.substring(0, filename.indexOf("."));
            const html = await fs.readFile(`${downloadPath}/${filename}`, {encoding: 'utf-8'});
            const {pid, map} = await getSpuDetail(pcode, html);
            const spu = await getCurrentSpu(pid, spus);
            const final = [];
            for(let [key, value] of map.entries()){
                final.push({
                    bname: spu.bname,
                    pid  : spu.pid,
                    pname: spu.pname,
                    key, value
                })
            }
            resultList = resultList.concat(final);
            console.info(' >>>> count: ', ++count);
        }
        return resultList;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const exportExcel = async () =>
{
    try {
        const result = await crawlerAllSpuDetail();
        console.info(`${result.length} 条详情信息`);
        const ydmExcel = [['品牌名称','机型ID','机型名称','问题项','答案项']];
        for(let item of result){
            const row = [];
            row.push(item.bname);
            row.push(item.pid);
            row.push(item.pname);
            row.push(item.key);
            row.push(item.value);
            ydmExcel.push(row);
        }
        const currentTime = formatDate(new Date(), 'YYYY-MM-DD-HH');
        const filename = `${exportPath}/${currentTime}.xlsx`;
        console.info('filename: ', filename);
        fs.writeFileSync(filename, xlsx.build([
            {name: '有得卖笔记本选项', data: ydmExcel},
        ]));
        console.log(`爬取结束, 成功导出文件: ${filename}`);
    } catch (e) {
        console.error(`爬取失败`);
        console.error(e);
        return e;
    }
};


exportExcel();