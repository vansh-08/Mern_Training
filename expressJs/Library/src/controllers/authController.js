import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.utils.js';
import * as userService from '../services/userService.js';

//new user registration
export const register = async (req, res) => {
    try {
        const {name, email, password } = req.body;

        const existingUser = await userService.getUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const hashedPasswd = await bcrypt.hash(password, 10);

        const newUser = await userService.createUser({ name, email, password: hashedPasswd });

        const token = generateToken(newUser.id, newUser.email);

        res.status(201).json({ 
            message: 'User registered successfully',
            data: {
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                },
                token
            }
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Registration failed'
        });
    }
};

//user login
export const login = async (req, res) => {
    try {
        const{ email, password } = req.body;
        const user = await userService.getUserByEmail(email);

        if(!user) {
            return res.status(401).json({ message: 'Invalid email'});
        }
        const isPasswdValid = await bcrypt.compare(password,user.password);
        if (!isPasswdValid) {
            return res.status(401).json( { message: 'Invalid password'});
        }
        const token = generateToken(user.id, user.email);
        res.status(200).json({ message: 'Login successful',
            data: {
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                },
                token
            }
        });
    } catch (error) {
        res.status(500).json({
            message:'login failed'
        });
    }
};