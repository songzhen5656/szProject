var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

    var root = path.resolve(process.argv[2] || '.');
    console.log('Static root dir:' + root);

    var server = http.createServer(function(request, response){
        var pathName = url.parse(request.url).pathname;
        var filePath = path.join(root,pathName);
        fs.stat(filePath,function(err,data){
            if(!err && data.isFile()){
                console.log('200' + request.url);
                response.writeHead(200);
                fs.createReadStream(filePath).pipe(response);
            }else{
                console.log('404' + request.url);
                response.writeHead(404);
                response.end('404 Not Found')
            }
        })
    })

    server.listen(8080);