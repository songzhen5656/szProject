var fs = require('fs');

//readFile 异步读取文件  //readFilesync 同步读取文件


//异步获取文件
fs.readFile('testDoc.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

//同步获取文件
var data = fs.readFileSync('testDoc.txt','utf-8');
console.log(data);

// //同步错误处理

try{
    var data = fs.readFileSync('testDoc.txt','utf-8');
    console.log(data);
} catch(err) {
    // .......
}



// //writeFile 异步写文件  writeFileSync 同步写文件

//异步写文件
var data = 'Hello,Node1'
fs.writeFile('testDoc.txt',data,function(err){
    if(err){
        // console.log(err);....
    }else{
        console.log('OK');
    }
})

// //同步写文件

var message = fs.writeFileSync('testDoc.txt',data)
console.log(message);


// //stat 异步查询  statSync 同步查询  用于获取文件大小，创建时间等信息

fs.stat('testDoc.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        // 是否是文件:
        console.log('isFile: ' + data.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + data.isDirectory());
        if (data.isFile()) {
            // 文件大小:
            console.log('size: ' + data.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + data.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + data.mtime);
        }
    }
})

// //同步查询
try{
    var data = fs.statSync('testDoc.txt');
    console.log('isFile:' + data.isFile());
    console.log('isDirectory:' + data.isDirectory());
    if (data.isFile()) {
        console.log('size:' + data.size);
        console.log('birthtime:' + data.birthtime);
        console.log('modifiedtime:' + data.mtime);
    }
} catch(err){
    console.log(err)
}
