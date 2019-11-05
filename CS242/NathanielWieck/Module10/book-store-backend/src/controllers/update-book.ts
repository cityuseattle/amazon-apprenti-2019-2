import { Request, Response } from 'express';
import { fetchBooks, updateBook } from '../models/book';

const handler = async (req: Request, res: Response) => {
    const { title, isbn, author, picture, price, _id } = req.body;
    try {
        updateBook(_id, title, isbn, author, picture, price);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default handler;