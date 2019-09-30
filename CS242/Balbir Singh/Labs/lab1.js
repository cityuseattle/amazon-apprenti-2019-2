'use Strict'
const http = require('http');

const port = 4000;
const hostname = 'localhost'

const server = http.createServer((req, res) => {
    let Content;
    if (req.url === 'address') content = '<h2>This is the address page.</h2>';
    else if (req.url === '/') content ='<h1>This is the Home page</h1>'
    else content = '<h2>404 Page is not found.</h2>'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'test/html; charset=utf-8');
    res.end('This is my home Page');
    console.log(req.connection.remoteAddress);
});

server.listen(port, () => console.log(`Server is running at http://${hostname}:${port}`));
