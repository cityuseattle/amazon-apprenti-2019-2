import { Request, Response } from 'express';
import { createUser } from '../models/user';

const handler = (req: Request, res: Response) => {
    const { username, password, email, age } = req.body;

    try {
        createUser(username, password, email, age);
        res.end(`The user ${username} has been created.`);
    }
    catch (err);
    res.end(`Something went wrong. Please check your input and try again`);
    }
};
export default handler; 