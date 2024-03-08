import * as bcrypt from "bcrypt";

export function hashPassword(plaintextPassword: string) {
    bcrypt.hash(plaintextPassword, 10)
        .then(hash => {
            return hash
        })
        .catch(err => {
            console.log(err)
        })
}


export function comparePassword(plaintextPassword: string, hash: string) {
    bcrypt.compare(plaintextPassword, hash)
        .then(result => {
            return result
        })
        .catch(err => {
            console.log(err)
        })
 }
 