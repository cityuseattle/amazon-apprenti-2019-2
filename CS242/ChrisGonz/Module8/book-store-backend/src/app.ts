import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import addBookController from './controller/add-book';

dotenv.config();

//Initialize NongoDB

mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
const db = mongoose.connection;

const app = express();
//Set the Access-Control-Origin to http://localhost:4200 to allow our Angular app call the API
app.use(cors({ origin: 'http://localhost:4200' }));


//support parsing of application/json type post data
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/book', addBookController)

app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));

