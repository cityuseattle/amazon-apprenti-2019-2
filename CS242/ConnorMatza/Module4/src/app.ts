import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import orderController from './controllers/order-controller';

dotenv.config();
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');
// The router
app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));
app.get('/order', orderController);

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
