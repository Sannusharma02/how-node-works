const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.readFile('test-file.txt', 'utf8', (err, data) => {
        if (err) console.log(err);
        res.end(data);
    });
});

server.listen(8000,'localhost', (err) => {
    console.log("Listening on port 8080");
});