'use strict'
const http = require('http');

const port = 4000;
const hostname = 'localhost'

const server = http.createServer((req, res) => {
    let content;
    if (req.url === '/home') content = '<h2>This is the home page.</h2>';
    else if (req.url === '/address') content = '<h2>This is my address page</h2>'
    else content = '<h2>404 Page is not found.</h2>'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('This is my address page.');
});



server.listen(port, () => console.log(`Server is running at http://${hostname}:${port}`));
