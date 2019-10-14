import { Request, Response } from 'express';

import { updateBirthdayCard } from '../models/card';

const handler = (req: Request, res: Response) => {
    const { title, material, picture, price, _id } = req.body;
    try {
        updateBirthdayCard(_id, title, material, price, picture);
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default handler;