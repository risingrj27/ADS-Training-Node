const http = require('http');
const server = http.createServer();



// Event Emitter Function
server.on('request',(req,res)=>{
    console.log("request Recevied");
    res.end('request Recevied');
})