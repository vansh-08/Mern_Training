import { getUsers, createUser, deleteUser } from './user.api';
import { renderTable } from './table.ui';
import { get, getInput, getSelect, getForm } from './dom.utils';
import type { CreateUser } from './user.types';

let users: any[] = [];

// Global delete function
(window as any).deleteUser = async (id: number) => {
    try {
        await deleteUser(id);
        users = users.filter(u => u.id !== id);
        renderTable(users);
    } catch (err) {
        alert("Delete failed!");
    }
};

// Load users
async function loadUsers() {
    try {
        users = await getUsers();
        renderTable(users);
    } catch (err) {
        alert('Start json-server:\n\nnpx json-server db.json --port 3000 --watch');
    }
}

// Form submit
getForm('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const userData: CreateUser = {
        name: getInput('name').value.trim(),
        age: parseInt(getInput('age').value, 10),
        gender: getSelect('gender').value as "Male" | "Female" | "Other",
        dob: getInput('dob').value,
        hobbies: getInput('hobbies').value.trim()
    };

    if (!userData.name || !userData.gender || !userData.dob || !userData.hobbies || isNaN(userData.age) || userData.age < 1) {
        alert('Please fill all fields correctly!');
        return;
    }

    try {
        const newUser = await createUser(userData);
        users.push(newUser);
        renderTable(users);
        getForm('userForm').reset();
    } catch (err) {
        alert('Failed to save. Is json-server running?');
    }
});

// Initialize
get('dob').setAttribute('max', new Date().toISOString().split('T')[0]);
loadUsers();