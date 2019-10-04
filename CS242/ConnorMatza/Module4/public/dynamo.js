"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ debug: true });
aws_sdk_1.default.config = new aws_sdk_1.default.Config({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, region: "us-east-2" });
var db = new aws_sdk_1.default.DynamoDB();
exports.default = db;
