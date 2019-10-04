import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {res.render('address', {
    name: 'Joram Howard',
    phoneNumber: '111-222-3333',
    address: '123 Denny Ave'
})
};

export default handler;