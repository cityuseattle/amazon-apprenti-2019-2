import { Request, Response } from 'express';
import { addBirthdayCard } from '../models/birthday-card';

const handler = (req: Request, res: Response) => {
    const { productTitle, material, picture, price } = req.body;
    try {
        addBirthdayCard(productTitle, material, picture, price);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default handler;