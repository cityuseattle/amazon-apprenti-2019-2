import { Request, Response } from 'express';

const timeStamp = (req: Request, res: Response, next: Function) => {
    console.log('This will be stamped before the controller running.');
    console.log(new Date());
    next();
    console.log('this will be stamped after the controller is running.');
};

export default timeStamp;