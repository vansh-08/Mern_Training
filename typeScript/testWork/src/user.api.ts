import type { User, CreateUser, UserResponse } from './user.types';

const API_URL = 'http://localhost:3000/users';

export async function getUsers(): Promise<UserResponse> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
}

export async function createUser(user: CreateUser): Promise<User> {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    if (!res.ok) throw new Error('Failed to create user');
    return res.json();
}

export async function deleteUser(id: number): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete');
}