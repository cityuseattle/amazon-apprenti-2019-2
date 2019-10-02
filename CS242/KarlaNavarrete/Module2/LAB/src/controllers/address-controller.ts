import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {
    console.log('The address controller is called. ');
    res.render('address', {
        name: 'Insert your name here: ',
        phoneNumber: 'Insert your phone number here: ',
        address: 'Insert your address here: '
    });
    console.log('The address controller is finished.');
};

export default handler;