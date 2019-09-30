'use strict'
const http = require('http');
const port = 4000;
const hostname = 'localhost'
const server = http.createServer((req, res) => {
let content;
if(req.url === '/about') content ='<h3>this is the ABOUT page.</h3>'
else if (req.url === '/') content = '<h1> this is the HOME page.</h1>'
else if (req.url ==='/address') content ='<h2> this is the my address.</h2>'
else content ='<h2>404 page is not found.</h2>'
res.statusCode =200;
res.setHeader('Content-Type', 'text/html; charset=utf-8');
res.end (content);

console.log(req.connection.remoteAddress)
});
server.listen(port, ()=> console.log(`server is running at http://${hostname}:${port}`));


