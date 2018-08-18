const fs = require('fs-extra');
const config = require('../../config');
const xlsx = require('node-xlsx').default;
const {downloadPath, spuMaxPricePath} = config.ahs;
const {formatDate} = require('../../util/dateUtil');

const exportExcel = async () =>
{
    try {
        let count = 0;
        // 表头
        console.info('导出最高价格数据......');
        const maxPriceInfo = [['品牌ID','品牌名称','机型ID','机型名称','已回收人数','最高回收价格','机型图片地址','图片名称']];
        const spuMaxPrice = JSON.parse(fs.readFileSync(spuMaxPricePath));
        console.info('spuMaxPrice.size: %d', spuMaxPrice.length);
        for(let item of spuMaxPrice){
            ++count;
            console.info('count: %d, item: %j',count, item);
            const row = [];
            row.push(item.bid);
            row.push(item.bname);
            row.push(item.pid);
            row.push(item.pname);
            row.push(item.recycleCount);
            row.push(item.maxPrice);
            row.push(item.img);
            row.push(`computer${count}`);
            maxPriceInfo.push(row);
        }
        console.info('maxPriceInfo: %j', maxPriceInfo);
        const currentTime = formatDate(new Date(), 'YYYY-MM-DD-HH');
        const filename = `${downloadPath}/${currentTime}.xlsx`;
        fs.writeFileSync(filename, xlsx.build([
            {name: '爱回收笔记本最高价', data: maxPriceInfo},
        ]));
        console.log(`爬取结束, 成功导出文件: ${filename}`);
    } catch (e) {
        console.error(e);
        return e;
    }
};

exportExcel();
exports.exportExcel = exportExcel;