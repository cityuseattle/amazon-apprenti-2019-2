"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = __importDefault(require("bcryptjs"));
function hashPass(plaintext) {
    var saltRounds = 10;
    var hashedPass = bcryptjs_1.default.hash(plaintext, saltRounds, function (err, hash) {
        if (err) {
            return err;
        }
        else {
            return hash;
        }
    });
    return hashedPass;
}
exports.default = hashPass;
