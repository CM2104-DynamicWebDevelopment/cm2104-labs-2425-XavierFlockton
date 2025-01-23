
var http = require('http');
var knockknock = require('knock-knock-jokes');


http.createServer(function (req, res) {

 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The date and time are currently: " + currrentdate.myDateTime());
 res.end('Hello World!');
 res.end(randomJoke);
 
}).listen(8080);