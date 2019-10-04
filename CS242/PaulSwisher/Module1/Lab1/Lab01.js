'use strict'
const http = require('http'); //web server, 1. Writing Node.js code to create a web server

const port = 4000; // changed from 3000, 2.	The server should run on the port 4000
const hostname = 'localhost' //3.	Having a home page router and can be visited by the URL http://localhost:4000

const server = http.createServer((req, res) => {
    let content;
    if (req.url === '/address') content = '<h2>This is the address page.</h2>'; // 5. Having an address page router and can be visited by the URL http://localhost:4000/address, 6.	The address page should show the text “This is my address page”. //7.	Use h2 header tag for the text in the address page.
    else if (req.url === '/') content = '<h1>This is the home page</h1>'; //4.	The home page should show the text “This is my home page”.
    else content = '<h2>404 Page is not found.</h2>' 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8 ');
    res.end(content); 
    console.log(req.connection.remoteAddress);  //8. Log the visitor’s IP address (use console.log())
});

server.listen(port, () => console.log(`Server is running at http://${hostname}:${port}`));





