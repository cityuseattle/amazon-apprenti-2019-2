import { Request, Response } from 'express';

import { fetchBook } from '../models/book';

const handler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const book = await fetchBook();
        res.json(book);
    }   catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default handler;
