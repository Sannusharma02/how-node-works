const EvenEmitter = require("events");

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
