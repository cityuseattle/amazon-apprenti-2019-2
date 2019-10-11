import { Request, Response } from 'express';

import { addBirthdayCard } from '../models/birthday-card';

const handler = async (req: Request, res: Response) => {
    const { title, material, picture, price, id } = req.body;
    try {
        addBirthdayCard(title, material, picture, price, id);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default handler;