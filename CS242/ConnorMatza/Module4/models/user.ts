import aws from 'aws-sdk';
import db from '../src/dynamo';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { 
    attribute,
    hashKey,
    rangeKey,
    table,
    autoGeneratedHashKey,
} from '@aws/dynamodb-data-mapper-annotations'

@table('users')
class User {
    @autoGeneratedHashKey()
    userName: String;
    password: String;
    email: String;
    age: number;
    constructor(userName: string, password: string, email: string, age: number) {
        this.userName = userName;


    }
}