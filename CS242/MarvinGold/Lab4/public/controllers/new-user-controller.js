"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../models/users");
var handler = function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password, email = _a.email, age = _a.age;
    /* The above line actually can be written as follows:
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const age = req.body.age;
    */
    try {
        users_1.createUser(username, password, email, age);
        res.end("The user " + username + " has been created.");
    }
    catch (err) {
        console.log(err);
        res.end("Something went wrong. Please check your input data.");
    }
};
exports.default = handler;
