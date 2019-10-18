import {Request, Response } from 'express';

const handler = (req: Request, res: Response) => res.render('address', {
    name: 'John Smith',
    phoneNumber: 'Phone Number: (123) 456 - 7890',
    address: 'Address, City, State, ZIP'
});
export default handler;