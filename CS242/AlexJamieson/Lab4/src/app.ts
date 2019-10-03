import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import newProductController from './controllers/new-product-controller';
import findProductController from './controllers/find-product-controller';

dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
// The router
app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));

app.get('/productForm', (req, res) => res.render('product-form'));

app.post('/product', newProductController)
app.get('/product', findProductController)

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
