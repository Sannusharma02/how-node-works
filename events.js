const EvenEmitter = require("events");
const http = require("node:http");

class Sales extends EvenEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on("newSale",()=>{
    console.log('There was a new sale!')
});

myEmitter.on("newSale",() =>{
    console.log('Customer name: Sannu')
});

myEmitter.on("newSale",stock =>{
    console.log(`There are now ${stock} left in stock.`);
})

myEmitter.emit("newSale", 9);

////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
    console.log("Request Received 🤔");
    console.log(req.url);
    res.end("Request Received 🤔");
})

server.on("request", (req, res) => {
    console.log("Another Request Received 🫡");
})

server.on("close", () => {
    console.log("Server Closed 😴");
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Server Listening on port 8000");
});