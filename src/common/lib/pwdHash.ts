import * as bcrypt from "bcrypt";

export function hashPassword(plaintextPassword: string): Promise<string> {
    return bcrypt.hash(plaintextPassword, 10)
        .then(hash => {
            return hash;
        })
        .catch(err => {
            console.log(err);
            return "Error";
        });
}

export function comparePassword(plaintextPassword: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plaintextPassword, hash)
        .then(result => {
            return result;
        })
        .catch(err => {
            console.log(err);
            return false;
        });
}