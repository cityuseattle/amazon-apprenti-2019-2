import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {res.render('address', {
    name: 'Bal Singh',
    phoneNumber: '555-555-5555', 
    address: '111 1st Ave.'
})
};

export default handler;