import { Request, Response } from 'express';

const addressController = (req: Request, res: Response) => res.render('addresses', {
    name: 'Marvin',
    phoneNumber: '2222222222',
    address: '42 Big Walk wWay'
});

export default addressController;