import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './dynamodbconfig';
import { Book } from './models/book';
import { BirthdayCard } from './models/birthday-card';
import mapper, { initTables } from './dynamodbmapper';
import addBookController from './controllers/add-book';
import addBirthdayCardController from './controllers/add-birthday-card';
import fetchBooks from './controllers/fetch-books';
import fetchBirthdayCards from './controllers/fetch-birthday-cards';
import fetchBook from './controllers/fetch-book';
import updateBookController from './controllers/update-book';
import deleteBookController from './controllers/delete-book';
import fetchBirthdayCard from './controllers/fetch-birthday-card';
import updateBirthdayCardController from './controllers/update-birthday-card';
import deleteBirthdayCardController from './controllers/delete-birthday-card';


const app = express();
dotenv.config();
initTables();

app.use(cors({origin: 'http://localhost:4200' }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.put('/birthdayCard', updateBirthdayCardController);
app.delete('/birthdayCard/:id', deleteBirthdayCardController);
app.get('/books', fetchBooks);
app.get('/book/:id', fetchBook);
app.post('/book', addBookController)
app.put('/book', updateBookController);
app.post('/birthdayCard', addBirthdayCardController);
app.get('/birthdayCards', fetchBirthdayCards);
app.delete('/book/:id', deleteBookController);

app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`))
