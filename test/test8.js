const fs = require('fs');
const moment = require('moment');
const xlsx = require('node-xlsx').default;

const DOWNLOAD_PATH = '../config';

const test = async () => {
    const fileName = _generateFileName();
    const data = [];
    const header = ['手机品牌', '手机图片', ' 手机价格', '手机颜色', ' 手机内存', '操作系统', '机型名称', '上市时间'];
    const obj = [
        'Смартфон Sony Xperia XZ2 Compact (белое серебро)',
        'https://static.svyaznoy.ru/upload/iblock/ebc/81xlarfjxvl._sl1500_.jpg/resize/483x483/hq/',
        '49 990 руб',
        '[64]',
        '[черный,дымчатый зеленый]',
        'Android 8.0 Oreo',
        'Смартфон Sony Xperia XZ2 Compact (белое серебро)',
        'null'
    ];
    const obj2 = [
        'Смартфон Sony Xperia XZ2 Compact (белое серебро)',
        'https://static.svyaznoy.ru/upload/iblock/ebc/81xlarfjxvl._sl1500_.jpg/resize/483x483/hq/',
        '49 990 руб',
        '[64]',
        '[черный,дымчатый зеленый]',
        'Android 8.0 Oreo',
        'Смартфон Sony Xperia XZ2 Compact (белое серебро)',
        'null'
    ];
    data.push(header);
    data.push(obj);
    data.push(obj2);

    console.info('data: %j',data);
    fs.writeFileSync(`${DOWNLOAD_PATH}/${fileName}`, xlsx.build([{name: "Huawei", data}]));
};

const _generateFileName = () => {
    return `item-${moment().format('YYYY-MM-DD-HH-mm-ss')}.xlsx`;
};

test();




