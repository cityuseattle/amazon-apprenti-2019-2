import { Request, Response } from 'express';

const addressController = (req: Request, res: Response) => res.render('address', {
    name: 'Ezequiel',
    phoneNumber: '1-800-888-FREE',
    address: '5012 Marvin Rd Lacey, WA 98033'
});

export default addressController;