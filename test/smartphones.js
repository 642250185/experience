const fs = require('fs');
const xlsx = require('node-xlsx').default;
const smartphones = require('../data/smartphones');

const productList2Map = (products) =>
{
    try {
        const map = new Map();
        products.map(product => {
            const {brand} = product;
            const productList = map.get(brand);
            if(productList) {
                productList.push(product);
            }else {
                map.set(brand, [product]);
            }
        });
        return map;
    } catch (e) {
        console.error('error: ', e);
        return null;
    }
};

const generateExportData = async (products) =>
{
    try {
        const map = productList2Map(products);
        const list = [];
        for(let [brand, productList] of map.entries()){
            list.push(generateSheet(brand, productList));
        }
        return list;
    } catch (e) {
        console.error('error: ', e);
        return [];
    }
};

const generateSheet = (brand, productList) =>
{
    try {
        const header = ['品牌','机型','内存','价格/(卢比)'];
        const data = [];
        data.push(header);
        for(let value of productList){
            const row = [];
            row.push(value.brand);
            row.push(value.model);
            row.push(value.memory);
            row.push(value.discount);
            data.push(row);
        }
        return {name: brand, data: data};
    } catch (e) {
        console.error('error: ', e);
        return null;
    }
};

const exportExcel = async (products) =>
{
    try {
        const data = await generateExportData(products);
        fs.writeFileSync('smartphones.xlsx', xlsx.build(data));
        console.info('数据导入完毕');
    } catch (e) {
        console.error('error: ', e);
    }
};

exportExcel(smartphones);