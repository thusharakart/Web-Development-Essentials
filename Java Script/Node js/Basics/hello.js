// This will print "hello world" on the web browser.

var http = require('http');

http.createServer(
    function(req, res) {
        res.write("Hello world!");
        res.end();
    }
).listen(8080);