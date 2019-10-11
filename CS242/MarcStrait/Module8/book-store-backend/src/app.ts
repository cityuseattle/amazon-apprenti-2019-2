import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import addBookController from './controllers/add-book';
import addBirthdayCard from './controllers/add-birthday-card';
import fetchBooks from './controllers/fetch-books';
import fetchBirthdaycards from './controllers/fetch-birthdaycards';

dotenv.config();

// Initialize MongDB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();
// Set the Access-Control-Allow-Origin to http://localhost:4200 to allow our Angular app call the API
app.use(cors({origin: 'http://localhost:4200' }));

// support parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// The router
app.post('/book', addBookController);
app.post('/birthdayCard', addBirthdayCard);
app.get('/books', fetchBooks);
app.get('/birthdaycards', fetchBirthdaycards)

app.listen(process.env.PORT, () => console.log(`The server is running on http://localhost:${process.env.PORT}`));
