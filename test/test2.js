var casper = require('casper').create();
casper.start('http://casperjs.org/');

casper.then(function() {
    console.info('First Page: ' + this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    console.info('Second Page: ' + this.getTitle());
});

casper.run();