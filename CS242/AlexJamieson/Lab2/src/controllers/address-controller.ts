import { Request, Response } from 'express';

const addressController = (req: Request, res: Response) => res.render('address', {
    name: 'Alex',
    phoneNumber: '1-800-888-USPS',
    address: '642 12th Ave Kirkland, WA 98033'
});

export default addressController;