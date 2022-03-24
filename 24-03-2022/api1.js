const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName=== '/'){
        res.end("this is home");
    }else if(pathName === '/api'){
        fs.readFile('./data.json','utf-8',(err,data)=>{
            const productData = JSON.parse(data);
            res.writeHead(200, {'Content-type':'application/json'})
            res.end(data);
        });
        // res.end("api");
    }else if(pathName=== 'overview'){
        res.end("this is overview");
    }else{
        res.end("this is wrong request url")
    }
});

server.listen(7000,'127.0.0.1',()=>{

});