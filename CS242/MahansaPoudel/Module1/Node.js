'use strict'
const http = require('http');

const port = 4000;
const hostname = 'localhost'

const server = http.createServer((req, res) => {
    let content;
    if (req.url === '/address') content = '<h3>This is my address page.</h3>';
    else if (req.url === '/') content = '<h2>This is my home page</h2>'
    else content = '<h1>404 Page is not found. </h1>'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(content);

});

server.listen(port, () => console.log(`Server is running at http://${hostname}:${port}`));