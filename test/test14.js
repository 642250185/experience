let pid = 21528;
let a = 'desc35314:80936,' +
    'desc35313:80934,' +
    'desc35315:80937,' +
    'desc35306:80903,' +
    'desc35307:80905,' +
    'desc35308:80908,' +
    'desc35309:80911,' +
    'desc35310:80916,' +
    'desc35311:80920,' +
    'desc35312[]:80930,' +
    'desc35312[]:80927,' +
    'desc35312[]:82171,' +
    'desc35312[]:80933,' +
    'desc35312[]:80929';

console.error('a: %j', a);

const params = {};
let tag = 0;
params['productid'] = pid;
const options = a.split(",");
for(let args of options){
    const key = args.split(":")[0];
    const value = args.split(":")[1];
    if(key.indexOf("[") > 0){
        ++tag;
        params[`${key}${tag}`] = Number(value);
    } else {
        params[key] = Number(value);
    }
}
console.info('params: %j', params);

/**
 * {"productid":21528,"desc35314":80936,"desc35313":80934,"desc35315":80937,"desc35306":80903,"desc35307":80905,"desc35308":80908,"desc35309":80911,"desc35310":80916,"desc35311":80920,"desc35312[]1":80930,"desc35312[]2":80927,"desc35312[]3":82171,"desc35312[]4":80933,"desc35312[]5":80929}
 */

/**
 * {"productid":21528,"desc35314":80936,"desc35313":80934,"desc35315":80937,"desc35306":80903,"desc35307":80905,"desc35308":80908,"desc35309":80911,"desc35310":80916,"desc35311":80920,"desc35312[]1":80930,"desc35312[]2":80927,"desc35312[]3":82171,"desc35312[]4":80933,"desc35312[]5":80929}
 */














