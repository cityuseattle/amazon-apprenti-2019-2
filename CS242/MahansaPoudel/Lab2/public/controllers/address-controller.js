"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addressController = function (req, res) {
    return res.render("address", {
        name: "Mahansa Poudel",
        phoneNumber: "123456789",
        address: "1123 west seattle drive, seattle WA"
    });
};
exports.default = addressController;
