// export const authUser = (req, res, next) => {
//     const {email} = req.body;

//     if(email === "vansh@tx.com") {
//         res.send("user Authenticated successfully");
//         next();
//     }
//     console.error('User not authenticated'); 
//     res.status(401).send('Authentication failed'); 
// }

import { verifyToken } from "../utils/jwt.utils.js";

export const authUser = (req, res, next) => {
    try { //token format from authorization header - "Bearer <token>"
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message:'no token provided, login first.' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({ message: 'Invalid or expired token, Login again.' });
        }

        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};