// User Service - Business Logic with JSON File Storage
import { readJSONFile, writeJSONFile, USERS_FILE } from '../utils/fileHelper.js';

export const getAllUsers = async (queryParams) => {
  const users = await readJSONFile(USERS_FILE);
  
  // Filter based on query params
  let filteredUsers = users;
  
  if (queryParams.age) {
    filteredUsers = filteredUsers.filter(u => u.age == queryParams.age);
  }
  
  return {
    count: filteredUsers.length,
    users: filteredUsers,
    filters: queryParams
  };
};

export const getUserById = async (id) => {
  const users = await readJSONFile(USERS_FILE);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return { error: 'User not found' };
  }
  
  return user;
};

export const createUser = async (userData) => {
  const users = await readJSONFile(USERS_FILE);
  
  const newUser = {
    id: String(users.length + 1),
    ...userData,
    createdAt: new Date()
  };
  
  users.push(newUser);
  await writeJSONFile(USERS_FILE, users);
  
  return newUser;
};

export const updateUser = async (id, userData) => {
  const users = await readJSONFile(USERS_FILE);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return { error: 'User not found' };
  }
  
  users[userIndex] = {
    ...users[userIndex],
    ...userData,
    updatedAt: new Date()
  };
  
  await writeJSONFile(USERS_FILE, users);
  
  return users[userIndex];
};

export const deleteUser = async (id) => {
  const users = await readJSONFile(USERS_FILE);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return { error: 'User not found' };
  }
  
  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);
  
  await writeJSONFile(USERS_FILE, users);
  
  return {
    message: 'User deleted successfully',
    deletedUser: deletedUser
  };
};
