import express    from 'express';
import dotenv     from 'dotenv';
import bodyParser from 'body-parser';
import mongoose   from 'mongoose';
import cors       from 'cors';

import addBookController   from './controllers/addBookController';
import fetchBooksController from './controllers/fetchBooksController';

dotenv.config();

// Initialize MongDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();
app.use(cors({origin: 'http://localhost:4200' }));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/book', addBookController);
app.get('/books', fetchBooksController);

app.listen(process.env.PORT, () => console.log(`The server is running on http://localhsot ${process.env.PORT}`));
