const express = require('express');
const timestamp = require('./timestamp');
const routes = require('./routes')
const app = express();
const port = 4000;
const logger = (req, res, next) => {
    console.log(req.params);
    next();
}

app.set('view engine', 'ejs');
app.use(logger);
app.use(timestamp.timestamp);
app.use('/routes',  routes);
app.get('/test', (req, res) => {
    res.send("PONG");
})

app.listen(port)
console.log(`Server listening on ${port}`);



