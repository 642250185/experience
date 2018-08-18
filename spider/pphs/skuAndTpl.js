var http = require("https");

var options = {
    "method": "GET",
    "hostname": [
        "coop",
        "aihuishou",
        "com"
    ],
    "path": [
        "jd",
        "Product",
        "GetProductDetail"
    ],
    "headers": {
        "Cache-Control": "no-cache",
        "Postman-Token": "c6ff59f4-2a37-4b84-b47c-ee29bc1f9383"
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();