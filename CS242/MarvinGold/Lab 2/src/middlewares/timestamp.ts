import { Request, Response } from 'express';

const timeStamp = (req: Request, res: Response, next: Function) => {
    console.log('This will be logged before the controller is running.');
    console.log(new Date());
    next();
    console.log('This will be logged after the controller is running');
};

export default timeStamp;
