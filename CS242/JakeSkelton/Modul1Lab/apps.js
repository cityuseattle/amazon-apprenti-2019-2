'use strict'
const http = require('http');

const port = 4000;
const hostname = 'ec2-35-153-207-16.compute-1.amazonaws.com'

const server = http.createServer((req, res) => {
    let content;
    if (req.url === '/address') content = '<h2>This is the address page.</h2>';
    else if (req.url === '/') content = '<h1>This is the home page.</h1>'
    req.connection.remoteAddress
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(content)
});

server.listen(port, () => console.log(`Server is running at http://${hostname}:${port}`));