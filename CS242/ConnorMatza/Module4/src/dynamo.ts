import aws from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

aws.config = new aws.Config({accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, region: "us-east-2"})
const db = new aws.DynamoDB();


export default db;

