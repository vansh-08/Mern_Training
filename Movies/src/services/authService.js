import { generateToken } from "../utils/jwt.utils.js";
import { User } from "../models/User.js";

export const registerUser = async (name, email, password, isAdmin = false, profileUrl = null) => {
  // Business logic here
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const user = await User.create({ 
    name, 
    email, 
    password, 
    isAdmin,
    profileUrl
  });
  const token = generateToken(user._id);

  return { user, token };
}

export const loginUser = async (email, password) => {
  // Business logic here
  const user = await User.findOne({ email, isActive: true }).select('+password');
  if (!user) {
    throw new Error('Invalid credentials or inactive admin');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken(user._id);
  return { user, token };
}
