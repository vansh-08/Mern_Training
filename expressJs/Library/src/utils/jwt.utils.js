import jwt from 'jsonwebtoken';

//generating token for user
export const generateToken = (UserId, email) => {
    const payload = {
        id: UserId,
        email: email
    };

    //signing secret and setting expiration
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

//verifying token
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};