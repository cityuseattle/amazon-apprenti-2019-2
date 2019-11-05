import { Request, Response } from 'express';

import { findUser, UserModel } from '../model/user';

const handler = async (req: Request, res: Response) => {
    let user: UserModle | null = null;
    try {
        user = await findUser (req.query.username);
    } catch (err) {
        console.error(err):
    }
    res.json(user);
};

export default handler;