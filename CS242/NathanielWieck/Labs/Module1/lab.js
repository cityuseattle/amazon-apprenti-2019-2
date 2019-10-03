'use strict'
const http = require('http');

const port = 4000;
const hostname = 'localhost'

const server = http.createServer((req, res) => {
    let content;
    var userIp = req.connection.remoteAddress;
    if (req.url === '/') content = '<h1>This is my home page</h1>';
    else if (req.url === '/address') content = '<h2>This is my address page.</h2>'
    console.log(userIp);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(content);
});

server.listen(port, () => console.log(`Server is running at http://${hostname}:${port}`));