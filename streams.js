const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
// Sol1
    // fs.readFile('test-file.txt', 'utf8', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });
// Sol2
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', (chunk) => {
    //    res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', (err) => {
    //     console.error(err);
    //     res.statusCode = 500;
    //     res.end("File not found!");
    // });
//Sol3
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    //readableSource.pipe(writeableDest)
});

server.listen(8000,'localhost', (err) => {
    console.log("Listening on port 8080");
});