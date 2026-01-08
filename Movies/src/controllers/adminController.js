import { getUsers, getUserByIdS, updateAdminS, deleteAdminS } from '../services/adminService.js';

export const getAllUser = async (req, res) => {
    const users = await getUsers();
    res.status(200).json(users);
}

export const getUserById = async (req, res) => {
    const user = await getUserByIdS(req.user.id);
    res.status(200).json(user);
}

export const updateAdmin = async (req, res) => {
    try {
        const { newName, newEmail } = req.body;
        
        // Get profile picture URL if uploaded
        const profileUrl = req.file 
            ? `/uploads/profile/${req.file.filename}` 
            : null;
        
        const updatedAdmin = await updateAdminS(req.user.id, newName, newEmail, profileUrl);
        res.status(202).json(updatedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteAdmin = async (req, res) => {
    const deletedAdmin = await deleteAdminS(req.user.id);
    res.status(202).json(deletedAdmin);
}
