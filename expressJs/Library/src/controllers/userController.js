import * as userService from '../services/userService.js';

export const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers(req.query);
  res.send(result);
};

export const getUserById = async (req, res) => {
  const result = await userService.getUserById(req.params.id);
  res.send(result);
};

export const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  res.send(result);
};

export const updateUser = async (req, res) => {
  const result = await userService.updateUser(req.params.id, req.body);
  res.send(result);
};

export const deleteUser = async (req, res) => {
  const result = await userService.deleteUser(req.params.id);
  res.json(result);
};