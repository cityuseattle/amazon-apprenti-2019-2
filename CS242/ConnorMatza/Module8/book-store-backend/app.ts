import express from 'express';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import cors from 'cors';
import db from './dynamodbconfig';

const app = express();
app