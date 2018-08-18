const path = require('path');
const config = {
    shanhs: {
        domain: 'https://m.shanhs.com',
        brandPath: '/sapi/gateway/online-sapi/v1/brand/prd/getCtgInfoList?',
        productListPath: '/sapi/gateway/online-sapi/v1/brand/prd/getPrdInfoList?',
        productDetailPath: '/sapi/phone/id/',
        fromTag: {
            phone: '1',
            tablet: '2'
        },
        brandDataPath: path.join(__dirname, '..', 'data/shanhs/brand.json'),
        spuDataPath: path.join(__dirname, '..', 'data/shanhs/spu.json'),
    },
    suhs: {
        domain: 'http://m.suhuishou.cc',
        brandPath: '/category/index/id/',
        cid: {
            phone: '1',
            tablet: '2'
        },
        productListPath: '/api?',
        productDetailPath: '/goods/index/id/',
        brandDataPath: path.join(__dirname, '..', 'data/suhs/brand.json'),
        spuDataPath: path.join(__dirname, '..', 'data/suhs/spu.json'),
    },
    ahs: {
        domain: 'https://www.aihuishou.com',
        brandPath: '/laptop',
        productListPath: '/laptop/',
        pricePath: '/product/',
        brandDataPath: path.join(__dirname, '..', 'data/ahs/brand.json'),
        spuDataPath: path.join(__dirname, '..', 'data/ahs/spu.json'),
        pageInfoPath: path.join(__dirname, '..', 'data/ahs/ahsLoptop_pageInfo.json'),
        spuMaxPricePath: path.join(__dirname, '..', 'data/ahs/spuMaxPrice.json'),
        downloadPath: path.join(__dirname, '..','download/images'),
    },
    ydm: {
        domain: 'http://m.youdemai.com',
        brandPath: '/product/product/brandlist?mertype=L',
        productListPath: '/product/product/jsonmerslist',
        productDetailPath: '/product/inquiry/detail?spid=',
        brandDataPath: path.join(__dirname, '..', 'data/ydm/brand.json'),
        spuDataPath: path.join(__dirname, '..', 'data/ydm/spu.json'),
        downloadPath: path.join(__dirname, '..', 'download/cache/ydm'),
        exportPath: path.join(__dirname, '..', 'download/excel'),
    },
    dzy: {
        domain: 'https://www.duozhuayu.com',
        category_path: '/api/categories',
        booksDataPath: path.join(__dirname, '..', 'data/dzy/books.json'),
        categoryDataPath: path.join(__dirname, '..', 'data/dzy/category.json'),
        exportPath: path.join(__dirname, '..', 'download/excel'),
    },
    zz: {
        PPU: 'TT=47c6fb10300b86636675d57b3106ccedadf5ea1c&UID=58317480120192256&SF=ZHUANZHUAN&SCT=1531974203093&V=1&ET=1534562603093',
        domain: 'https://zhuan.58.com',
        openRoute: '/zzopen/book',
        addCartPath: '/getBook',
        bookCartListPath: '/getBookCartList?activityId=10003',
        delRecyclePath: '/delRecycleBookCart',
        bookDataPath : path.join(__dirname, '..', 'data/zz/booksPrice.json'),
        exportPath: path.join(__dirname, '..', 'download/excel'),
    },
    category: {
        phone: 1,
        tablet: 2
    },
    /**
     * 返回或设置当前环镜
     */
    env: function () {
        global.$config = this;

        return global.$config;
    }
};

module.exports = config.env();