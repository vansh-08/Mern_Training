const API_URL = 'http://localhost:3000/users';
export async function getUsers() {
    const res = await fetch(API_URL);
    if (!res.ok)
        throw new Error('Failed to fetch users');
    return res.json();
}
export async function createUser(user) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    if (!res.ok)
        throw new Error('Failed to create user');
    return res.json();
}
export async function deleteUser(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok)
        throw new Error('Failed to delete');
}
