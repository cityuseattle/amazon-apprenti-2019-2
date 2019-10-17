import { Request, Response } from 'express';

import { fetchBirthdayCard } from '../models/card';

const Handler = async (req: Request, res: Response) => {
    try {
        const birthdayCards = await fetchBirthdayCard(req.params.id);
        res.json(birthdayCards);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

    export default Handler;