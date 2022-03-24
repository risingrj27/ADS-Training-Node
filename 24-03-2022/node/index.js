const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview");
  } else if (pathName === "/product") {
    res.end("this is product");
  } else if (pathName === "/api") {
    const data1 = fs.readFile(`./data.json`, (err,data)=>{
        res.writeHead(200, {'Content-type':'application/json'})
        const data1 = JSON.parse(data);
        res.end(data);
    });
    
    
    // console.log(JSON.stringify(data1))
    // res.end(data1);
  } else {
    res.end("wrong request");
  }
});

server.listen(7000, "127.0.0.1", () => {});
