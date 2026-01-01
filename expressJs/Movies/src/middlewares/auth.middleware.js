import { verifyToken } from "../utils/jwt.utils.js";
import User from "../models/User.js";

export const authUser = async (req, res, next) => {
    try { //token format from authorization header - "Bearer <token>"
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'no token provided, login first.' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({ message: 'Invalid or expired token, Login again.' });
        }

        //find user status
        const user = await User.findOne({ _id: decoded.id, isActive: true });

        if (!user) {
            return res.status(401).json({
                success: false,
                messge: 'User not found or account deactivated'
            });
        }

        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};



const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Middleware to protect routes - requires valid JWT token
 */
const auth = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.header('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'No token provided, authorization denied'
            });
        }

        const token = authHeader.replace('Bearer ', '');

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user (only active users)
        const user = await User.findOne({ _id: decoded.id, isActive: true });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found or account deactivated'
            });
        }

        // Attach user to request
        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expired'
            });
        }
        res.status(401).json({
            success: false,
            message: 'Authorization failed'
        });
    }
};

module.exports = auth;
