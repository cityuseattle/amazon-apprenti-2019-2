import { Request, Response } from 'express';
import { fetchBooks }        from '../models/book';

/*
  Asynchronous functions are prefixed with the async keyword; 
  await suspends the execution until an asynchronous function return promise is fulfilled
*/
const handler = async (req: Request, res: Response) => {
    try {
        const books = await fetchBooks();
        res.json(books);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default handler;