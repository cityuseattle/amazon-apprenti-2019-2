    import { Request, Response } from 'express';

    import { fetchBook } from '../models/book';

    const Handler = async (req: Request, res: Response) => {
        try {
            const books = await fetchBook();
            res.json(books);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };

        export default Handler;