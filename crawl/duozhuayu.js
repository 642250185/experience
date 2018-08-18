const request = require('superagent');
const cheerio = require('cheerio');

const test = async(params)=>{
    const result = await request.get(`https://www.duozhuayu.com/search/${params}`);
    const $ = cheerio.load(result.text);
    console.log($('body').html());
    // console.info('html: %j', $('.Search').html());
    // console.info($('.Search').find('form').html());

    // console.info($('.Search div:nth-child(2)').find('SearchBookItem'));

    // console.info($('.Search').nextUntil('div .SearchBookItem').html());

    // console.info($('a').html());
    // $('a').each(() =>{
    //     const href = $(this).attr('href');
    //     console.info('href: %j', href);
    // });

    // $('.Search').find('div').each(() =>{
    //     console.info('this: %j', $(this).html());
    // });

    // console.info($('.Search .Search-header').next().find('a').attr('href'));

    // console.info($('.Search-section').each(()=>{
    //     console.info($(this).html());
    // }));

    // console.info($('.Search > div:nth-child(2) > div:nth-child(2)').html());
    //
    // console.info($('.Search').find());

    // console.info($('.Search').find('a[class="Flex SearchBookItem"]').val());

    // console.info($('.SearchBookItem').attr('href'));

    // console.info($('.Search').html());

};

// test('%E5%B0%8F%E8%AF%B4');

test(encodeURIComponent('小说'));












