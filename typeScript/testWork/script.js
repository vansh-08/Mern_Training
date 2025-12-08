// main .js
const API_URL = "http://localhost:3000/users";
let users = [];

// DOM helper
const get = (id) => document.getElementById(id);
  
// API functions
async function getUsers() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();  
}

//JSON.stringify(user) converts the JavaScript `user` object into a JSON string for sending in the HTTP request body, as servers expect text data.  
//The `"Content-Type": "application/json"` header informs the server that the payload is JSON-formatted text.
// `res.json()` parses the server's JSON response string back into a JavaScript object for easy use in code.  
//Together, they enable seamless data exchange between client JavaScript and JSON-based APIs.  
async function createUser(user) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}

async function deleteUser(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE"});
  if (!res.ok) throw new Error("Failed to delete");
}

// render table
function renderTable(users) {
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  users.forEach( (user, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.gender}</td>
    <td>${user.dob}</td>
    <td>${user.hobbies}</td>
    <td><span class = "delete-icon" onclick="window.deleteUserById('${user.id}')">Delete</span></td>`;
    tbody.appendChild(tr);
  });
}

// Global delete function
window.deleteUserById = async (id) => {
  try {
    await deleteUser(id);
    users = users.filter( (u) => u.id !== id);
    renderTable(users);
  } catch (err) {
    alert("Delete failed!");
  }
};

// Load users
async function loadUsers() {
  try {
    users = await getUsers();
    console.log(users);
    renderTable(users);
  } catch (err) {
    alert("Start json-server:\nnpxjson-server db.json --port 3000 --watch");
  }
}

//Form submit
get("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const userData = {
    name: get("name").value.trim(),
    age: parseInt(get("age").value, 10),
    gender: get("gender").value,
    dob: get("dob").value,
    hobbies: get("hobbies").value.trim(),
  };

  if (
    !userData.name ||
    !userData.gender ||
    !userData.dob ||
    !userData.hobbies ||
    isNaN(userData.age) ||
    userData.age < 1
  ) {
    alert("Please fill all fields correctly!");
    return;
  }

  try {
    const newUser = await createUser(userData);
    console.log(newUser);
    users.push(newUser);
    renderTable(users);
    get("userForm").reset();
  } catch (err) {
    alert("Failed to save. Is json-server running?");
  }
});

//Initialize
get("dob").setAttribute("max", new Date().toISOString().split("T")[0]);
loadUsers();

