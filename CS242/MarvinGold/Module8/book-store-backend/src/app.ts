import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import addCardController from './controllers/addCardController'
import addBookController from './controllers/addBookController'
import fetchBooks from './controllers/fetchBooks';
import fetchCards from './controllers/fetchCards';
import fetchBook from './controllers/updateBook';
import updateBookController from './controllers/updateBook';
import deleteBookController from './controllers/deleteBook';
import fetchCard from './controllers/fetchCard';
import updateCardController from './controllers/updateCard';
import deleteCardController from './controllers/deleteCard';

dotenv.config();

//Intialize DB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

const app = express();
//Set Access Controll Allow Origin to localhost 4200 to allow angular app to call api
app.use(cors({origin: 'http://localhost:4200' }));

//support parsing of application/json type post data
app.use(bodyParser.json());

//suport parsing of application x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//Router
app.post('/book', addBookController);
app.post('/birthdayCard', addCardController);
app.get('/books', fetchBooks);
app.get('/birthdayCards', fetchCards);
app.get('/book/:id', fetchBook);
app.get('/birthdayCard/:id', fetchCard);
app.put('/book', updateBookController);
app.put('/birthdayCard', updateCardController);
app.delete('/book/:id', deleteBookController)
app.delete('/birthdayCard/:id', deleteCardController);



app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));

//Find a book based on the title

