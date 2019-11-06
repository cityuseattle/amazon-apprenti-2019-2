import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import addBookController from './controllers/add-book';
import fetchBooks from './controllers/fetch-books';

dotenv.config();

mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.post('/book', addBookController)
app.get('/books', fetchBooks)

app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));