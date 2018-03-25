var http = require('http');
var server = http.createServer(function (req, res) {
    if(req.url == "/") {
        var fs = require("fs");
            fs.readFile("www/index.html", function(err, text){
              res.setHeader("Content-Type", "text/html");
              res.end(text);
            });
            return;
        
          }
          else if (req.url == "/server"){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  return;
          }
          else{
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`You have requested a page ${req.url} that does not exist`); 
          }
}).listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');
