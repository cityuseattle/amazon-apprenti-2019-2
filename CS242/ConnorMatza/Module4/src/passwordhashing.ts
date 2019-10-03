import bcrypt from 'bcryptjs';
import { stringify } from 'querystring';


async function hashPass(plaintext: string) {
    let saltRounds = 10;

    let hashedPass = await bcrypt.hash(plaintext, saltRounds, function(err, hash) {
        if(err) {
            return err;
        }
        else {
            return hash;
        }
    });
    return hashedPass;
}