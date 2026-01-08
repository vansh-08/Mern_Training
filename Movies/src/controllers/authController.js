import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
    try {
        const { name, email, password, isAdmin = false } = req.body;
        
        // Get profile picture URL if uploaded
        const profileUrl = req.file 
            ? `/uploads/profile/${req.file.filename}` 
            : null;

        const { user, token } = await registerUser(name, email, password, isAdmin, profileUrl);

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email, 
                isAdmin: user.isAdmin,
                profileUrl: user.profileUrl
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginUser(email, password);

        res.json({
            message: 'Login successful',
            token,
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email,
                profileUrl: user.profileUrl
            }
        });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
