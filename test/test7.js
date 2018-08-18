const fs = require('fs');
const detailsTypePath = '../file/detailsTypeJson.json';

let result = 11 / 24;
const a = Math.ceil(result);
console.info(a);

//============================

const test = async () => {
    try {
        const detailsType = await JSON.parse(fs.readFileSync(detailsTypePath));
        for(let value of detailsType){
            const brandName = value.split("-")[0];
            const brandTypeId = value.split("-")[1];
            console.info('brandName: %j, brandTypeId: %j', brandName, brandTypeId);
        }
    } catch(e) {
        console.error('error: %j', e);
        return null
    }
};

test();