'use strict'
const http = require('http');

const port = 3000;
const hostname = 'localhost'

const server = http.createServer((req, res) => {
   
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('This is your first web server.');
});

server.listen(port, () => console.log(`Server is running at http://${hostname}:${port}`));
