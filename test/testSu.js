var http = require("http");

var options = {
    "method": "GET",
    "hostname": "m.suhuishou.cc",
    "path": "/goods/index/id/11916.html",
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (response) {
        chunks.push(response);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();