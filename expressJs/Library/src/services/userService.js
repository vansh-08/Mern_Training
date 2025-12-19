import { readJSONFile, writeJSONFile, USERS_FILE } from '../utils/fileHelper.js';

export const getAllUsers = async (queryParams) => {
  const users = await readJSONFile(USERS_FILE);
  return users;
};

export const getUserById = async (id) => {
  const users = await readJSONFile(USERS_FILE);
  const user = users.find(u => u.id === id);
  
  return user ?? { error: `user with id: ${id} is not found` };
  // return user;
};

export const getUserByEmail = async (email) => {
  const users = await readJSONFile(USERS_FILE);
  const user = users.find(u => u.email === email);

  return user || null;
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
  
  if (userIndex < 1) {
    return { error: `User with id: ${id} not found` };
  }
  
  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);
  await writeJSONFile(USERS_FILE, users);
  
  return {
    message: 'User deleted successfully',
    deletedUser: deletedUser
  };
};
