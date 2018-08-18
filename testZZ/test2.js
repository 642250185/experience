const isJSON = async (str) => {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if(typeof obj == 'object' && obj ){
                return true;
            }else{
                return false;
            }
        } catch(e) {
            console.log('error：'+str+'!!!'+e);
            return false;
        }
    }
    console.log('It is not a string!')
};

const test = async() =>
{
    const re = await isJSON("3333");
    console.info('re: ', re);
};


test();