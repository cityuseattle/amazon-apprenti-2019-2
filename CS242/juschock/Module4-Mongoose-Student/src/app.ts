import express from 'express';

// a zero-dependency module that loads environment variables from a .env file into process.env.
//  Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
import dotenv from 'dotenv';

// extract the entire body portion of an incoming request stream and 
// exposes it on req.body.
import bodyParser from 'body-parser';

import mongoose from 'mongoose'

import orderController from './controllers/order-controller';
import newUserController from './controllers/new-user-controller';
import findUserController from './controllers/find-user-controller';

dotenv.config();

// Initialize MongDB
// The process.env global variable is injected by the Node at runtime 
// for our application to use.
// it represents the state of the system environment your application is in when it starts.
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();

// static data place
app.use(express.static('../public'));

// Set up views  and view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// The router
app.get('/', (req, res) => res.render('index', {
  title: 'The index page title',
  content: 'This is the content for the index page.'
}));
app.get('/order', orderController);
app.get('/userForm', (req, res) => res.render('user-form'));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user', newUserController);
app.get('/user', findUserController);

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));
