import type { User } from './user.types';

export function renderTable(users: User[]): void {
    const tbody = document.querySelector('#userTable tbody') as HTMLTableSectionElement;
    tbody.innerHTML = '';

    users.forEach((user, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.dob}</td>
            <td>${user.hobbies}</td>
            <td><span class="delete-icon" onclick="window.deleteUser(${user.id})">Delete</span></td>
        `;
        tbody.appendChild(tr);
    });
}