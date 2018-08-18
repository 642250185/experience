const casper = require('casper').create();

// casper.start().then(function() {
//     this.open('https://www.duozhuayu.com/search/%E5%B0%8F%E8%AF%B4', {
//         method: 'get',
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
// });
//
// casper.run(function() {
//     require('utils').dump(JSON.parse(this.getPageContent()));
//     this.exit();
// });



// casper.start();
//
// casper.open('https://www.duozhuayu.com/search/%E5%B0%8F%E8%AF%B4').then(function (doc) {
//     this.echo('GOT it.');
//     console.info('doc: %j', JSON.stringify(doc));
// });



// casper.start('https://www.duozhuayu.com/api/search?q=%E5%B0%8F%E8%AF%B4&type=normal', function(response) {
//     // this.echo(request.headers.get('x-request-token'));
//     this.echo(response.headers.get('server'));
// });
//
// casper.run();

// ===================================================================
casper.start('https://www.duozhuayu.com/search/%E5%B0%8F%E8%AF%B4');

casper.waitForSelectorTextChange('.selector', function () {
    this.echo('the text on .selector has been changed.');
});

casper.run();
















