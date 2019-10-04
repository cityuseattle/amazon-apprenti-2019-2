import bcrypt from 'bcryptjs';
import { stringify } from 'querystring';


function hashPass(plaintext: string) {
    let saltRounds = 10;

    let hashedPass = bcrypt.hash(plaintext, saltRounds, function(err, hash) {
        if(err) {
            return err;
        }
        else {
            return hash;
        }
    });
    return hashedPass;
}
export default hashPass;
