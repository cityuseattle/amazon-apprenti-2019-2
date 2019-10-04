import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {
    console.log('The address controller is called.');
    res.render('address', {
        name: 'Enter your name here.',
        phoneNumber: 'Enter your phone number here',
        address: 'Enter your address here'
    });
    console.log('The address controller is finished.');
};

export default handler;