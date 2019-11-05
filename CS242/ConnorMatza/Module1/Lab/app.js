const http = require('http');
const port = 4000;
const server = http.createServer((req, res) => {
    let content;
    if(req.url == '/') {
        content = "This is my home page"
    }
    else if (req.url == '/address') {
        content = '<h2>This is my address page</h2>'
    }
    else {
        content = "You entered an invalid page, please try again"
    }
    console.log(req.connection.remoteAddress + " this is the request ip");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content);

})

server.listen(port, () => console.log(`Server listening on ${port}`))