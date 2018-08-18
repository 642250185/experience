const fs = require('fs-extra');
const request = require('superagent');
const config = require('../../config');
const {domain, spuDataPath, downloadPath, productDetailPath} = config.ydm;

let count = 0;
const downloadSingleFile = async (u) =>
{
    try {
        const path = `${downloadPath}/${u.filename}`;
        const existed = await fs.pathExists(path);
        if(existed){
            return {err: null};
        }
        const result = await request.get(u.url).timeout({
            response: 1000,
            deadline: 5000
        });
        if(result.text.indexOf('502 Bad Gateway') >=0){
            console.error('======502');
        }
        await fs.writeFile(path, result.text);
        console.info(`${path} 下载完成`, ++count);
        return {err: null};
    } catch (e) {
        console.error('error: ', e);
        console.error('超时, 重新下载');
        return await downloadSingleFile(u);
    }
};


const downloadProducts = async () =>
{
    try {
        if(count === 0){
            await fs.removeSync(downloadPath);
            await fs.mkdir(downloadPath);
        }

        const products = JSON.parse(fs.readFileSync(spuDataPath));
        for(let product of products){
            await downloadSingleFile({
                url: `${domain}${productDetailPath}${product.pid}`,
                filename: `${product.pid}.html`
            });
        }
        count = 0;
    } catch (e) {
        console.error('error: ', e)
    }
};


downloadProducts();