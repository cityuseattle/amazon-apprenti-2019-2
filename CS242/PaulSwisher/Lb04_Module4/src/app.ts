import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import orderController from './controllers/order-controller';
import newProductController from './controllers/new-product-controller';
import findProductContoller from './controllers/find-product-controller';
import logger from './middlewares/logging'

dotenv.config();

// initalize mongoose
//mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));
app.set('view engine', 'ejs');
app.set('views', 'public/views');

// app.engine('ejs', require('ejs').renderFile);

// The router
app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));
app.get('/order', orderController);
app.get('/productForm', (req, res) => res.render('product-form'));
app.post('/product', newProductController)
app.get('/product', findProductContoller)
app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
