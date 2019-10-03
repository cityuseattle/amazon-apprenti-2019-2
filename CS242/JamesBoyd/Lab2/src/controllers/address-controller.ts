import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {
    res.render('address', {
        name: 'Joker',
        phoneNumber: '888-111-8888',
        address: '123 Gotham St'
    })
};

export default handler;
