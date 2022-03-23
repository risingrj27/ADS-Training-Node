const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
    const pathName = req.url;
    
    if(pathName === '/' || pathName === '/home'){
        res.end("home")
    }else if(pathName === '/overview'){
        res.end("overview")
    }else{
        res.writeHead(404 ,{
            'Content-type': 'text/HTML'
        })
        res.end("<h1>This page cannot be found</h1>")
    }
});

server.listen(8000,'127.0.0.1',()=>{
    // console.log("This is my server");
})