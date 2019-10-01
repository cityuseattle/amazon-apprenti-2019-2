import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {
    console.log('The address controller is called.');
    res.end('This is the address page');
    console.log('The address controller is finished');
};

export default handler;