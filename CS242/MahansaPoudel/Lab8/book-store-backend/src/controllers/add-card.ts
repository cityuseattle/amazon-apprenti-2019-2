import { Request, Response } from 'express';

import { addCard } from '../models/card';

const handler = (req: Request, res: Response) => {
    const { title, material, picture, price } = req.body;
    try {
        addCard(title, material, picture, price);
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default handler;