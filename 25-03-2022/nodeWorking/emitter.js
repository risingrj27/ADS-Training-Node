const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("New Sale is on");
});

myEmitter.on("newSale", () => {
  console.log("Sales Price");
});

myEmitter.on("newSale", (stock) => {
  console.log(`price for this ${stock} product`);
});

myEmitter.emit("newSale", 9);

/////////////////////////////////////

const server = http.createServer;

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("request received");
});

server.on("request", (req, res) => {
  console.log("Another request");
  res.end("request received");
});

server.close('close',()=>{
    console.log("server closed")
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request");
});
