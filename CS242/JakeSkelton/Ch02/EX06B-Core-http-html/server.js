const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<h1>Hello World</h1>');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

// Haviv, Amos Q.. MEAN Web Development - Second Edition . Packt Publishing. Kindle Edition. 