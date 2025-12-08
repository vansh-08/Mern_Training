// main.ts
import type { UserI } from './userInterface';

const API_URL: string = "http://localhost:3000/users";
let users: UserI[] = [];

// DOM helper with proper return type
const get = (id: string): HTMLElement => document.getElementById(id)!;

// API functions with typed responses
async function getUsers(): Promise<UserI[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}

async function createUser(user: UserI): Promise<UserI> {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user), 
    });
    if (!res.ok) throw new Error("Failed to create user");
    return res.json();
}

async function deleteUser(id: string): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete");
}

// Render table
function renderTable(users: UserI[]): void {
    const tbody = document.querySelector("#userTable tbody") as HTMLTableSectionElement;
    tbody.innerHTML = "";

    users.forEach((user, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.gender}</td>
        <td>${user.dob}</td>
        <td>${user.hobbies}</td>
        <td><span class="delete-icon" data-id="${user.id ?? ''}">Delete</span></td>`;
        tbody.appendChild(tr);
    });

    // Use event delegation instead of inline onclick
    tbody.querySelectorAll(".delete-icon").forEach(icon => {
        icon.addEventListener("click", () => {
            const id = (icon as HTMLElement).dataset.id!;
            if (id) deleteUserById(id);
        });
    }); 
}

// Typed delete handler
const deleteUserById = async (id: string): Promise<void> => {
    try {
        await deleteUser(id);
        users = users.filter(u => u.id !== id);
        renderTable(users);
    } catch (err) {
        alert("Delete failed!");
    }
};

// Load users
async function loadUsers(): Promise<void> {
    try {
        users = await getUsers();
        renderTable(users);
    } catch (err) {
        alert("Start json-server:\nnpx json-server db.json --port 3000 --watch");
    }
}

// Form submit with proper typing
get("userForm").addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const userData: UserI = {
        name: (get("name") as HTMLInputElement).value.trim(),
        age: parseInt((get("age") as HTMLInputElement).value, 10),
        gender: (get("gender") as HTMLSelectElement).value,
        dob: (get("dob") as HTMLInputElement).value,
        hobbies: (get("hobbies") as HTMLInputElement).value.trim(),
    };

    if (!userData.name || !userData.gender || !userData.dob || !userData.hobbies || isNaN(userData.age) || userData.age < 1) {
        alert("Please fill all fields correctly!");
        return;
    }

    try {
        const newUser = await createUser(userData);
        users.push(newUser);
        renderTable(users);
        form.reset();
    } catch (err) {
        alert("Failed to save. Is json-server running?");
    }
});

// Initialize
(get("dob") as HTMLInputElement).max = new Date().toISOString().split("T")[0]!;
loadUsers();