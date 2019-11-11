import express from 'express';
import dotenv from 'dotenv'; //5.4K (gzipped: 2.3K)
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; //5.2K (gzipped: 2.1K)
import fetchBooks from './controllers/fetch-books';
import addBookController from './controllers/add-book';
import addBirthdayCardController from './controllers/add-book';

dotenv.config();

//Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();
// Set the Access-Control-Allow-Origin to http://localhost:4200 to allow our Angular app call the API
app.use(cors({ origin: 'http://localhost:4200'}));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true}));

// The router
app.post('/book', addBookController)
app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));
app.post('/birthdayCard', addBirthdayCardController)
app.get('/books', fetchBooks)
