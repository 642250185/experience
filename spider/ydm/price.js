const _path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const request = require('superagent');
const config = require('../../config');
const xlsx = require('node-xlsx').default;
const obj  = xlsx.parse('../../file/ydmPrice.xlsx');
const {formatDate} = require('../../util/dateUtil');
const {exportPath, downloadPath, spuDataPath} = config.ydm;

// =============================================
const domain = 'http://m.youdemai.com';
const priceArgsPath = '/product/inquiry/inquiry';
const pricePath = '/product/inquiry/getprices';
const priceArgsList = [];

Object.keys(obj).forEach(function(key)
{
    obj[key].data.forEach(function(item){
        priceArgsList.push({
            spid    : item[0],
            pname   : item[1],
            radioIds: item[2],
            multiIds: item[3],
            remark  : item[4]
        });
    });
});

priceArgsList.shift();

const getPriceArgs = async (spu) =>
{
    try {
        // 请求
        const result = await request.post(`${domain}${priceArgsPath}`).type('form')
            .send({
                "spid"      : spu.spid,
                "typeId"    : "",
                "radioIds"  : spu.radioIds,     // 单选项
                "multiIds"  : spu.multiIds      // 多选选
            });
        const {redirects} = result;
        const args = redirects[0];
        const inquiryId = args.substring(args.indexOf("inquiryId=") + 10, args.indexOf("&salt"));
        const salt = args.substring(args.indexOf("salt=") + 5, args.length);
        return {inquiryId, salt};
    } catch (e) {
        console.error(e);
        return e;
    }
};

const getPrice = async(spu) =>
{
    try {
        const {inquiryId, salt} = await getPriceArgs(spu);
        let price_path = `${domain}${pricePath}?spid=${spu.spid}&inquiryId=${inquiryId}&salt=${salt}`;
        let result = await request.get(price_path);
        const $ = cheerio.load(result.text, {decodeEntities: false});
        let price = $('.get_merprice').find('span');
        price = price[0].next.data;
        spu.price = price;
        console.info(`机型名称:  ${spu.pname}   机型选项询价:  ${spu.price}   选项描述:  ${spu.remark}`);
        return spu;
    } catch (e) {
        console.error(e);
        return e;
    }
};

const getExportData = async () =>
{
    try {
        const final = [];
        for(let spu of priceArgsList){
            const spuItem = await getPrice(spu);
            final.push(spuItem);
        }
        return final;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const exportExcel = async () =>
{
    try {
        const result = await getExportData();
        console.info(`${result.length} 条价格数据`);
        const ydmExcel = [['机型ID', '机型名称', '价格','选项描述']];
        for(let item of result){
            const row = [];
            row.push(item.spid);
            row.push(item.pname);
            row.push(item.price);
            row.push(item.remark);
            ydmExcel.push(row);
        }
        const currentTime = formatDate(new Date(), 'YYYY-MM-DD-HH');
        const filename = `${exportPath}/price-${currentTime}.xlsx`;
        fs.writeFileSync(filename, xlsx.build([
            {name: '有得卖笔记本询价', data: ydmExcel},
        ]));
        console.log(`爬取结束, 成功导出文件: ${filename}`);
    } catch (e) {

    }
};

exportExcel();