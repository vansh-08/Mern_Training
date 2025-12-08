let users = [];
let nextId = 1;

// Load data from localStorage on page load
function loadData() {
    const savedUsers = localStorage.getItem('userManagementUsers');
    const savedNextId = localStorage.getItem('userManagementNextId');
    
    if (savedUsers) {
        users = JSON.parse(savedUsers);
    }
    
    if (savedNextId) {
        nextId = parseInt(savedNextId, 10);
    }
    
    renderTable();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('userManagementUsers', JSON.stringify(users));
    localStorage.setItem('userManagementNextId', nextId.toString());
}

// Set max date for DOB to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('dob').setAttribute('max', today);

// Load data when page loads
loadData();

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const ageInput = document.getElementById('age').value;
    const age = parseInt(ageInput, 10);
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const hobbies = document.getElementById('hobbies').value.trim();

    // Strict type checking
    if (typeof name !== 'string' || name === '') {
        alert('Name must be a non-empty string.');
        return;
    }
    if (typeof age !== 'number' || isNaN(age) || age < 1) {
        alert('Age must be a non-negative number and non-zero.');
        return;
    }
    if (typeof gender !== 'string' || gender === '') {
        alert('Gender must be selected.');
        return;
    }
    if (typeof dob !== 'string' || dob === '') {
        alert('Date of Birth must be a valid date.');
        return;
    }
    if (typeof hobbies !== 'string' || hobbies === '') {
        alert('Hobbies must be a non-empty string.');
        return;
    }

    const id = nextId++;
    users.push({ id, name, age, gender, dob, hobbies });
    saveData(); // Save to localStorage
    renderTable();
    this.reset();
});

function renderTable() {
    const tbody = document.getElementById('userTable').querySelector('tbody');
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
            <td><span class="delete-icon" onclick="deleteUser(${user.id})">🗑️</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteUser(id) {
    if (typeof id === 'number' && id > 0) {
        if (confirm('Are you sure you want to delete this user?')) {
            users = users.filter(user => user.id !== id);
            saveData(); // Save to localStorage after deletion
            renderTable();
        }
    }
}