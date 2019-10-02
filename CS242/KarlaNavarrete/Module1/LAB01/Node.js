'use strict'
const http = require('http');

const port = 4000;
const hostname = 'localhost'

const server = http.createServer((req, res) => {
    let content;
    if (req.url === '/') content = 'This is my home page';
    else if (req.url === '/address') content = '<h2>This is my address page.</h2>';
    else content = '<h2> 404 Page is not found.</h2>';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(content);
    console.log(req.connection.remoteAddress)
});

server.listen(port, () => console.log(`Server is running at http://${hostname}:${port}`));