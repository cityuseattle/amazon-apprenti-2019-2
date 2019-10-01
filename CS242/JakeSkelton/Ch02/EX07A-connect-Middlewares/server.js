const connect = require('./node_modules/connect');
const app = connect();

function helloWorld(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};
app.use(helloWorld);
app.listen(3000);

console.log('Server running at http://localhost:3000/');

// Haviv, Amos Q.. MEAN Web Development - Second Edition . Packt Publishing. Kindle Edition. 