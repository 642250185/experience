const sleep = require('js-sleep/js-sleep');

const {crawlerProducts} = require('./product');
const {getAllSpuMaxPrice} = require('./price');
const {exportExcel} = require('./exportPrice');
const {saveAllImages} = require('./downloadImages');

const execute = async () =>
{
    try {
        await crawlerProducts();
        await sleep(15000);
        await getAllSpuMaxPrice();
        await sleep(15000);
        await exportExcel();
        await sleep(15000);
        await saveAllImages();
    } catch (e) {
        console.error(e);
        return e;
    }
};

execute();



