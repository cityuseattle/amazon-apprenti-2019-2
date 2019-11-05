import { Request, Response } from 'express';

const logging = (req: Request, res: Response, next: Function) => {
    console.log('This will be logged before the controller running.');
    console.log(req.headers);
    next();
    console.log('this will be logged after the controller is running.');
};

export default logging;