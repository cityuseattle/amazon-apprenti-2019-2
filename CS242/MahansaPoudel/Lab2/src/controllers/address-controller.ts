import { Request, Response } from "express";
const addressController = (req: Request, res: Response) =>
  res.render("address", {
    name: "Mahansa Poudel",
    phoneNumber: "123456789",
    address: "1123 west seattle drive, seattle WA"
  });

export default addressController;
