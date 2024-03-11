import jwt from 'jsonwebtoken';

const secretKey = "jwt@sneaker-deals";

export const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, secretKey, {expiresIn: '3h'});
}

export const verifyToken = (token: string): {userId: number } | null => {
    try{
        const decoded = jwt.verify(token, secretKey) as {userId: number};
        return decoded;
    } catch(err) {
        console.error("Error verifying token", err);
        return null
    }
}