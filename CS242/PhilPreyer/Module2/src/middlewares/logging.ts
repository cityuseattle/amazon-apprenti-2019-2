import { Request, Response } from 'express';

const logging = (req: Request, res: Response, next: Function) => {
    console.log('This is be logged before the controller is running');
    console.log(req.headers);
    next();
    console.log('This will be logged after the controller has run. ')
};

export default logging;