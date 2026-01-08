import { verifyToken } from "../utils/jwt.utils.js";
import { User } from "../models/User.js";
import { Movie } from "../models/Movie.js";

const auth = (isAdmin = false) => async (req, res, next) => {
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
        const user = await User.findOne({ _id: decoded.id, isActive: true, isAdmin: isAdmin });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User is not an Admin or User not found or account deactivated'
            });
        }

        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};


export const authAdmin = auth(true);
export const authUser = auth(false);


const authMovieUpdate = async (req, res, next) => {
    try {
        //movie ownership check
        const movie = await Movie.findOne({ _id: req.params.id, user_id: req.user.id, isActive: true });

        if (!movie) {
            return res.status(401).json({
                success: false,
                message: 'Admin is not the Owner of this movie or Movie not found or deactivated'
            });
        }
        
        next();
    } catch (error) {
        res.status(401).json({ message: 'Ownership Authentication failed' });
    }
};

export const authOwner = authMovieUpdate;