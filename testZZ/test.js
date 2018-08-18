const request = require('superagent');

let cookie = "PPU='TT=47c6fb10300b86636675d57b3106ccedadf5ea1c&UID=58317480120192256&SF=ZHUANZHUAN&SCT=1531974203093&V=1&ET=1534562603093'"

function isJSON (str)
{
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if(typeof obj == 'object' && obj ){
                return true;
            } else {
                return false;
            }
        } catch(e) {
            return false;
        }
    }
};

//机型检测数据
const getOptions = async (id, qcId) => {
    try {
        const result = await request.get(`https://youpin.58.com/v/helpsale/report?id=${qcId}`)
            .set('Cookie', cookie);
        const {data} = JSON.parse(result.text);
        const {basicCheck, basicInfo, displayCheck, basicCheckList, functionCheck} = data;

        const list = [];
        list.push(id);
        // ① 基础检查
        if(basicCheck) {
            for(let i in basicCheck) {
                list.push(basicCheck[i].value);
            }
        }

        // ② 功能检查
        if(functionCheck) {
            functionCheck.list.forEach(item => {
                const isJson = isJSON(item);
                if(isJson){
                    let obj = JSON.parse(item);
                    list.push(obj.desc);
                } else {
                    list.push(item);
                }
            });
        }

        // ③ 基础信息（SKU）
        if(basicInfo) {
            const skus = basicInfo.split('|');
            for(let sku of skus) {
                list.push(sku.trim());
            }
        }

        // ④ 展示检查
        if(displayCheck) {
            displayCheck.list.forEach(item => {
                const isJson = isJSON(item);
                if(isJson){
                    let obj = JSON.parse(item);
                    list.push(obj.desc);
                } else {
                    list.push(item);
                }
            });
        }

        // ⑤ 基础检查集合
        if(basicCheckList && basicCheckList.length > 0) {
            for(let item of basicCheckList){
                const {key, itemList} = item;
                let itemChild = {};
                for(let child of itemList){
                    itemChild[child.key] = child.value;
                }
                list.push(`${key}:${JSON.stringify(itemChild)}`);
            }
        }
        return list;
    }catch (e) {
        throw new Error(e);
    }
};

const test = async () =>
{
    // let activityId = "27182317900298";
    // let qcId = "166405425278746630";

    let activityId = "24742742985987";
    let qcId = "24658829774339";

    // let activityId = "27182317900298";
    // let qcId = "166405425278746630";

    // let activityId = "27182317900298";
    // let qcId = "166405425278746630";

    let result = await getOptions(activityId, qcId);
    console.error('size: %d, result: ',result.length, result);
};

test();

