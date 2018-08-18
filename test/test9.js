// const arr = ['64g', '128g', '64g'];
// console.log(arr.map(a => a).join(' '));


const products = [
    {name:'nihao', age: 12},
    {name:'hello', age: 20}
];

products.map(product => {
    const map = new Map();
    const {name} = product;
    const productList = map.get(name);
    if(productList){
        productList.push(product);
    } else {
        map.set(name, [product]);
    }

    for(let [name, productList] of map.entries()){
        console.info('name:%', name);
        console.info('productList:%', productList);
    }

});

















