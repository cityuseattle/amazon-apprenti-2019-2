import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => 
    res.render('address', {
        name: 'Miriam Clark',
        phoneNumber: '610-347-9234',   
        address: '123 Seattle Ave'
});

export default handler;