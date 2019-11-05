import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Controllers
import orderController from './controller/order-controller';
import newUserController from './controllers/new-user-Controller';
import findUserController from './controllers/find-user-Controller';

// Load environment variables
dotenv.config();

console.log(process.env.DB_URI);

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, { useNewUrlParser: true });
const db = mongoose.connection;

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// Routers
app.get('/', (req, res) => res.end('This is the Home page.'));

app.get('/productForm', (req, res) => res.render('product-form'));

app.post('/submitProduct', productFormController);

app.get('/findProduct', findProductController);

app.listen(3000, () => console.log('The server is running on http://localhost:3000'));