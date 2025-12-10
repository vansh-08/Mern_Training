// User Controller
import * as userService from '../services/userService.js';

// Get all users with query params
export const getAllUsers = async (req, res) => {
  console.log('Query Params:', req.query);
  
  const result = await userService.getAllUsers(req.query);
  
  res.json({
    message: 'Getting all users',
    queryParams: req.query,
    data: result
  });
};

// Get user by ID (path param)
export const getUserById = async (req, res) => {
  console.log('Path Param - ID:', req.params.id);
  
  const result = await userService.getUserById(req.params.id);
  
  res.json({
    message: 'Getting user by ID',
    pathParam: req.params.id,
    data: result
  });
};

// Create new user (body)
export const createUser = async (req, res) => {
  console.log('Request Body:', req.body);
  
  const result = await userService.createUser(req.body);
  
  res.json({
    message: 'User created',
    body: req.body,
    data: result
  });
};

// Update user (path param + body)
export const updateUser = async (req, res) => {
  console.log('Path Param - ID:', req.params.id);
  console.log('Request Body:', req.body);
  
  const result = await userService.updateUser(req.params.id, req.body);
  
  res.json({
    message: 'User updated',
    pathParam: req.params.id,
    body: req.body,
    data: result
  });
};

// Delete user (path param)
export const deleteUser = async (req, res) => {
  console.log('Path Param - ID:', req.params.id);
  
  const result = await userService.deleteUser(req.params.id);
  
  res.json({
    message: 'User deleted',
    pathParam: req.params.id,
    data: result
  });
};
