import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => {
    console.log('the order controller is called.');
    res.end('This is the order page');
    console.log('The order controller is finished.');
};

export default handler;