import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const { user, token } = await registerUser(name, email, password);

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: { id: user._id, name: user.name, email: user.email }
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
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};