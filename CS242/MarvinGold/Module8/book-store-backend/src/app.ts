import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import addBookController from './controllers/addBookController'

dotenv.config();

//Intialize DB
mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
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

app.listen(process.env.port, () => console.log(`The server is running on http://localhost:${process.env.port}`));
