var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('input.txt',function(err,data){
        res.writeHead(200,{'Context-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(3000);