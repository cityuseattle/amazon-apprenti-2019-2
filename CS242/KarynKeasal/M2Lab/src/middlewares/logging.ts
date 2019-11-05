import { Request, Response } from 'express';

const logging = (req: Request, res: Response, next: Function) => {
    console.log('Controller start.');
    console.log(req.headers);
    next();
    console.log('Controller finished.')
};

export default logging;