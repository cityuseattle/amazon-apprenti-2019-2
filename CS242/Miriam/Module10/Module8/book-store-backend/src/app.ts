import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import addBookController from './controllers/add-book';
/*import addBirthdayCardController from './controllers/add-birthday-card';*/
import fetchBooks from './controllers/fetch-books';
/*import fetchBirthdayCards from './controllers/fetch-birthday-cards';*/
import fetchBook from './controllers/fetch-books';
import updateBookController from './controllers/update-book';
import deleteBookController from './controllers/delete-book';

dotenv.config();

mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.post('/book', addBookController);
/*app.post('/birthdayCard', addBirthdayCardController);*/
app.get('/books', fetchBooks);
/*app.get('/birthdayCards', fetchBirthdayCards);*/
app.get('/book/:id', fetchBook);
app.put('/book', updateBookController);
app.delete('/book/:id', deleteBookController);

app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));