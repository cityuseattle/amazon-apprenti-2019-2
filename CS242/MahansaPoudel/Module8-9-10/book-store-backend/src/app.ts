
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import addBookController from './controllers/add-book';
import addCardController from './controllers/add-card';
import fetchBooks from './controllers/fetch-books';
import fetchBirthdayCards from './controllers/fetch-birthdaycards';
import fetchBook from './controllers/fetch-book';
import updateBookController from './controllers/update-book';
import deleteBookController from './controllers/delete-book';
import fetchBirthdayCard from './controllers/fetch-birthdaycard';
import updateBirthdayCardController from './controllers/update-birthdaycard';
import deleteBirthdayCardController from './controllers/delete-birthdaycard';

dotenv.config();

// Initialize MongoDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

const app = express();
// Set the Access-Control-Allow-Origin to http://localhost:4200 to allow our Angular app call the API
app.use(cors({ origin: 'http://localhost:4200' }));

//support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//The router
app.post('/book', addBookController)
app.post('/card', addCardController)
app.get('/books', fetchBooks)
app.get('/birthdayCards', fetchBirthdayCards)
app.get('/book/:id', fetchBook);
app.put('/book', updateBookController);
app.delete('/book/:id', deleteBookController);
app.get('/birthdayCard/:id', fetchBirthdayCard);
app.put('/birthdayCard', updateBirthdayCardController);
app.delete('/birthdayCard/:id', deleteBirthdayCardController);
app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));