import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './dynamodbconfig';
import { Book } from './models/book';
import mapper, { initTables } from './dynamodbmapper';
import addBookController from './controllers/add-book';
import addBirthdayCardController from './controllers/add-birthday-card';

const app = express();
dotenv.config();
initTables();

app.use(cors({origin: 'http://localhost:4200' }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/book', addBookController)
app.post('/birthdayCard', addBirthdayCardController);

app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`))

