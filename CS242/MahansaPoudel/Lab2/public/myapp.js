"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var address_controller_1 = __importDefault(require("./controllers/address-controller"));
var timestamp_1 = __importDefault(require("./middlewares/timestamp"));
var app = express_1.default();
app.use(timestamp_1.default);
app.use(express_1.default.static("../public"));
app.set("views", "./views");
app.set("view engine", "ejs");
// The Router
app.get("/", function (req, res) {
    return res.end("This is my Lab 2 Express webserver Homepage. ");
});
app.get("/address", address_controller_1.default, function (req, res) {
    return res.render("address", {
        name: "Mahansa Poudel",
        phoneNumber: "123445889",
        address: "1123 west seattle drive, seattle WA"
    });
});
app.listen(4000, function () {
    return console.log("The server is running on http://localhost:4000");
});
