import express from "express";

import addressController from "./controllers/address-controller";

import timestamps from "./middlewares/timestamp";
const app = express();

app.use(timestamps);
app.use(express.static("../public"));
app.set("views", "./views");
app.set("view engine", "ejs");
// The Router
app.get("/", (req, res) =>
  res.end("This is my Lab 2 Express webserver Homepage. ")
);

app.get("/address", addressController, (req, res) =>
  res.render("address", {
    name: "Mahansa Poudel",
    phoneNumber: "123445889",
    address: "1123 west seattle drive, seattle WA"
  })
);
app.listen(4000, () =>
  console.log("The server is running on http://localhost:4000")
);
