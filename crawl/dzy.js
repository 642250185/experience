const casper = require('casper').create();
const cheerio = require('cheerio');


// 浏览器返回
// casper.start('http//foo.bar/1');
// casper.thenOpen('http://foo.bar/2');
// casper.thenOpen('http://foo.bar/3');
// casper.back();
// casper.run(function(){
// 	console.info(this.getCurrentUrl());
// });





// let base64logo = null
// casper.start('http://www.google.fr/', function(){
// 	base64logo = this.base64encode('http://www.google.fr/images/srpr/logo3w.png');
// });

// casper.run(){
// 	this.echo(base64logo).exit();
// }




// -------- 截取图片
// casper.start('http://www.baidu.com/', function(){
// 	this.capture('baidu.png', {
// 		top: 100,
// 		left: 100,
// 		width: 500,
// 		height: 400
// 	});
// });

// casper.run();





// casper.start('http://www.google.fr/', function(){
// 	var url = 'http://www.google.fr/intl/fr/about/corporate/company/';
//     this.download(url, 'google_company.html');
// });

// casper.run(function(){
// 	this.echo('Done').exit();
// });





// var casper = require('casper').create();
// var urls = ['http://baidu.com/', 'http://sina.com.cn/'];

// casper.start().eachThen(urls, function(response) {
// 	console.info('data: %j', JSON.pase(response);
//   this.thenOpen(response.data, function(response) {
//     console.log('Opened', response.url);
//   });
// });

// casper.run();




// casper.start('http://www.baidu.com/', function() {
//     this.echo(this.getHTML('div.qrcode-text'))
//     ; // => 'Plop'
// });

// casper.run();




// casper.start().then(function(){
// 	this.open('https://www.duozhuayu.com/api/search?q=%E5%B0%8F%E8%AF%B4&type=normal',{
// 		method : 'get',
// 		headers: {
// 			'Accept' : 'application/javaScript'
// 		}
// 	});
// });

// casper.run(function(){
// 	require('utils').dump(JSON.parse(this.getPageContent()));
// 	this.exit();
// });




// casper.start('http://www.baidu.com/', function() {
//     this.echo(encodeURIComponent(this.getTitle()));
// });

// casper.run();




// casper.start();
// casper.open('http://www.baidu.com').then(function(){
// 	console.info('GOT it.');
// });

// casper.run();





// casper.start();
// casper.open('https://www.duozhuayu.com/search/%E5%B0%8F%E8%AF%B4', {
//     method: 'post',
//     data:   {
//         'title': 'Plop',
//         'body':  'Wow.'
//     }
// });




// casper.open('https://www.duozhuayu.com/search/%E5%B0%8F%E8%AF%B4', {
//     method: 'post',
//     data:   {
//         'title': 'Plop',
//         'body':  'Wow.'
//     },
//     headers: {
//         'Accept-Language': 'fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3'
//     }
// });


// casper.then(function() {
//     this.echo('POSTED it.');
// });

// casper.run();




// casper.start('https://www.duozhuayu.com/search/%E5%B0%8F%E8%AF%B4');

// casper.then(function(){
// 	this.echo('loaded');
// 	this.reload(function(){
// 		this.echo('loaded again');
// 		console.info(this.getHTML());
// 	});
// });

// casper.run();





// casper.start();

// casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');

// casper.thenOpen('https://www.duozhuayu.com/api/search?q=%E5%B0%8F%E8%AF%B4&type=normal', function(){
// 	this.echo(this.status(true));
// });

// casper.run();





// casper.start('https://www.duozhuayu.com/search/%E5%B0%8F%E8%AF%B4', function(response){
// 	require('utils').dump(response);
// });

// casper.run();





// casper.start('https://www.duozhuayu.com/search/%E5%B0%8F%E8%AF%B4').then(function(){
// 	this.echo("I'm in your google.");
// });

// casper.thenOpen('https://www.duozhuayu.com/api/search?q=%E5%B0%8F%E8%AF%B4&type=normal', function(data){
// 	// console.info('data: %j', data);
// 	const $ = cheerio.load(data);
// 	console.info($('.Search').html());

// 	// this.echo("Now I'm in your yahoo.");
// });

// casper.run();






var links;
casper.start('https://www.duozhuayu.com/api/search?q=%E5%B0%8F%E8%AF%B4&type=normal', function(){
	links = this.evaluate(function(){
		var elements = __utils__.findAll('a.SearchBookItem');
		return elements.map(function(e){
			return e.getAttribute('href');
		});
	});
});

casper.run(function(){
	this.echo(JSON.stringify(links)).exit();
});










































