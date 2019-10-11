import { Request, Response } from "express";

import { createUser } from "../models/user";

const handler = (req: Request, res: Response) => {
  const { username, password, email, age } = req.body;

  try {
    createUser(username, password, email, age);
    res.end(`The user ${username} has been created.`);
  } catch (err) {
    console.error(err);
    res.end(`Soething went wrong. Please check your input data.`);
  }
};

export default handler;