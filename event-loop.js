const fs = require('fs');
process.env.UV_THREADPOOL_SIZE = "1";
const crypto = require('crypto');
const start = Date.now();

setTimeout(() => console.log("Timer 1 finished"),0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", 'utf8', (err, data) => {
    console.log("I/O Finished");
    console.log("----------------");

    setTimeout(() => console.log("Timer 2 finished"),0);
    setTimeout(() => console.log("Timer 3 finished"),0);
    setImmediate(() => console.log("Immediate 2 finished"));

    process.nextTick(() => console.log("process.nextTick"));

    //SYNC
    // crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    // console.log(Date.now() - start ,"Password SYNC encrypted");

    //ASYNC
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512',()=>{
        console.log(Date.now() - start ,"Password encrypted");
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512',()=>{
        console.log(Date.now() - start ,"Password encrypted");
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512',()=>{
        console.log(Date.now() - start ,"Password encrypted");
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512',()=>{
        console.log(Date.now() - start ,"Password encrypted");
    })
});

console.log("Hello from the top level code");