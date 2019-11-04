import express    from 'express';
import dotenv     from 'dotenv';
import bodyParser from 'body-parser';
import mongoose   from 'mongoose';
import cors       from 'cors';

import addBookController   from './controllers/addBookController';
import fetchBooks from './controllers/fetch-books';

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

//The Router
app.post('/book', addBookController);
app.post('/birthdayCard', addBirthdayCardController)
app.get('/books', fetchBooks);

app.listen(process.env.PORT, () => console.log(`The server is running on http://localhost ${process.env.PORT}`));
