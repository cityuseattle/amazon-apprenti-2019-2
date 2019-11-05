import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import aws from 'aws-sdk';
import mapper from './mapper';
import slash from 'slash';
import db from './dynamo';
import orderController from './controllers/order-controller';
import logger from './middlewares/logging';
import newUserController from './controllers/new-user-controller';
import findUserController from './controllers/find-user-controller';
import { initTables } from './mapper';
import { User } from './models/user';
import path from 'path';
import { Product } from './models/product';
import newProductController from './controllers/new-product-controller';
import findProductController from './controllers/find-product-controller';


const dotenvdir = path.resolve(__dirname, ".env")

dotenv.config({path: dotenvdir});
initTables();
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// The router
app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));
app.get('/order', orderController);
app.get('/userForm', (req, res) => {
  res.render('user-form');
})

app.get('/productForm' , (req, res) => {
  res.render('product-form');
})
app.post('/product', newProductController);
app.post('/user', newUserController);
app.get('/user', findUserController);
app.get('/product', findProductController);
app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
