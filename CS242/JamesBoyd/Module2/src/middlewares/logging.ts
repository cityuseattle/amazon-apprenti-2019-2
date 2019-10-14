import { Request, Response } from 'express';

const logging = (req: Request, res: Response, next: Function)=> {
    console.log('this will be logged before the controller running');
    console.log(req.headers);
    next();
    console.log('this is after the controller');

};
export default logging; 