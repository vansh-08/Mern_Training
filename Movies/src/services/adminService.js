import { User } from '../models/User.js';
import fs from 'fs';
import path from 'path';
import { Movie } from '../models/Movie.js';

export const getUsers = async () => {
    return await User.find({}).lean();
}

export const getUserByIdS = async (id) => {
    return await User.findById(id).lean();
}

export const updateAdminS = async (id, newName, newEmail, profileUrl = null) => {
    const updateData = { 
        name: newName, 
        email: newEmail
    };

    // If new profile picture is provided, add it to update data
    if (profileUrl) {
        // Get old user data to delete old profile picture
        const oldUser = await User.findById(id);
        if (oldUser && oldUser.profileUrl) {
            // Delete old profile picture file
            const oldFilePath = path.join('./public', oldUser.profileUrl);
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
            }
        }
        updateData.profileUrl = profileUrl;
    }

    return await User.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true } 
    );
}

export const deleteAdminS = async (id) => {
    const deletedAdmin = await User.findByIdAndUpdate(id,
        { $set: { isActive: false} },
        { new: true, runValidators: true }
    );

    await Movie.updateMany(
        { user_id: id, isActive: true },
        { isActive: false }
    );

    return deletedAdmin;
}
