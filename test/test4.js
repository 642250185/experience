// const cheerio = require('cheerio');

const casper = require('casper').create();
//
// casper.start('https://www.duozhuayu.com/search/小说');

// casper.then(function() {
//     console.log(11);
//     if(this.exists('div.SearchBookItem')){
//         console.info('OK');
//     } else {
//         console.error('NO');
//     }
//
//     this.open('https://static.duozhuayu.com/static/manifest.3d90c25d977f8f3b86f6.js',{
//         method: 'get',
//         headers: {
//             'Accept' : 'application/javaScript'
//         }
//     });
//
//     this.echo(this.getHTML());
//
// });
//
// casper.run(function () {
//     console.log(22);
//     // console.log(this.getPageContent());
//     this.exit();
// });




// casper.start();
//
// casper.open('https://www.duozhuayu.com/search/小说', {
//     method: 'get'
// }, function (err, doc) {
//     console.error('err: ', err);
//     console.info('doc: ', doc);
// });
//
// casper.then(function () {
//     this.echo('POSTED it.');
// });


// casper.start();
//
// casper.open('https://www.duozhuayu.com/api/search?q=%E5%B0%8F%E8%AF%B4&type=normal').then(function (doc) {
//     console.info('doc: %j', JSON.stringify(doc));
//     this.echo('GOT it.');
// });
//
// casper.run();



// casper.start('https://www.duozhuayu.com/search/小说', function () {
//     this.open('https://static.duozhuayu.com/static/manifest.3d90c25d977f8f3b86f6.js',{
//         method: 'get',
//         headers: {
//             'Accept' : 'application/javaScript'
//         }
//     });
//     this.echo(this.getHTML());
// });
//
// casper.run();

casper.start();

casper.open("https://www.duozhuayu.com/api/search?q=小说&type=normal");

casper.then(function () {
    // logic here
    this.echo(this.getHTML());
});

casper.run();

const links = this.evaluate(function () {
    // let results = [];
    let elts = document.getElementsByClassName("SearchBookItem");
    console.info('elts: %j', elts);
});

links();