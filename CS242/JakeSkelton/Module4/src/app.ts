import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import newUserController from '../src/controllers/new-user-controller';
import findUserController from './controllers/find-user-conrollers';
import orderController from './controllers/order-controller'

dotenv.config();

//Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;




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
app.get('/userForm', (req, res) => res.render('user-form'));

app.post('/user', newUserController);
app.get('/user', findUserController);
