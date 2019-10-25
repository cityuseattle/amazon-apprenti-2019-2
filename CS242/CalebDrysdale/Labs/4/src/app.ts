import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import newProductController from './controllers/new-product-controller';
import findProductController from './controllers/find-product-controller';

dotenv.config();

mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));

app.get('/productForm', (req, res) => res.render('product-form'));

app.post('/product', newProductController)
app.get('/product', findProductController)

app.listen(4000, () => console.log('The server is running on http://localhost:4000'));