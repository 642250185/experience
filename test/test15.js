const result = 'window.location.href = "/Recycle/Activity/Redbags?cid=" + cid + "&price=3564.00";';

let start = result.indexOf("&price=") + 7;
const end = start + 7;
let price = result.substring(start, end);
if(price.indexOf('"') > -1){
    price = price.substring(0, price.indexOf('"'));
}

console.info(Math.ceil(price));



