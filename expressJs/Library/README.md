# Library Management API

## Folder Structure
```
Library/
├── src/
│   ├── controllers/        # Handle requests and responses
│   │   ├── userController.js
│   │   └── bookController.js
│   ├── services/          # Business logic
│   │   ├── userService.js
│   │   └── bookService.js
│   ├── routes/            # Define API routes
│   │   ├── userRoutes.js
│   │   └── bookRoutes.js
│   ├── utils/             # Helper functions
│   │   └── fileHelper.js
│   ├── data/              # JSON files for data storage
│   │   ├── users.json     # User data stored here
│   │   └── books.json     # Book data stored here
│   └── server.js          # Main server file
├── package.json
└── .env
```

## Data Storage

📁 **Users data**: `src/data/users.json`
📁 **Books data**: `src/data/books.json`

**Important**: All changes (add, update, delete) are now **permanently saved** to these JSON files!

## How to Run

1. Start the server:
```bash
npm run dev
```

2. Server will run on: `http://localhost:3000`

## API Endpoints to Test

### USER Routes

1. **Get All Users (Query Params)**
   ```
   GET http://localhost:3000/user?age=25
   ```

2. **Get User by ID (Path Param)**
   ```
   GET http://localhost:3000/user/1
   ```

3. **Create User (Body)**
   ```
   POST http://localhost:3000/user
   Body: {
     "name": "Vansh",
     "email": "vansh@example.com",
     "age": 22
   }
   ```

4. **Update User (Path Param + Body)**
   ```
   PUT http://localhost:3000/user/1
   Body: {
     "name": "Vansh Sharma",
     "email": "vansh.sharma@example.com"
   }
   ```

5. **Delete User (Path Param)**
   ```
   DELETE http://localhost:3000/user/1
   ```

### BOOK Routes

1. **Get All Books (Query Params)**
   ```
   GET http://localhost:3000/books?category=fiction
   GET http://localhost:3000/books?price=600
   ```

2. **Get Book by ID (Path Param)**
   ```
   GET http://localhost:3000/books/1
   ```

3. **Get Books by Author (Path Param)**
   ```
   GET http://localhost:3000/books/author/JK-Rowling
   ```

4. **Create Book (Body)**
   ```
   POST http://localhost:3000/books
   Body: {
     "title": "The Alchemist",
     "author": "Paulo Coelho",
     "price": 399,
     "category": "fiction"
   }
   ```

5. **Update Book (Path Param + Body)**
   ```
   PUT http://localhost:3000/books/1
   Body: {
     "title": "Harry Potter Updated",
     "price": 699
   }
   ```

6. **Delete Book (Path Param)**
   ```
   DELETE http://localhost:3000/books/1
   ```

## Understanding the Flow

1. **Request** → Routes file receives HTTP request
2. **Route** → Calls Controller function
3. **Controller** → Calls Service function (logs params)
4. **Service** → Reads/Writes JSON file
5. **Response** → Data flows back to user

## What Gets Logged in Console

- Path Params (like `/user/1` - the 1 is logged)
- Query Params (like `?age=25&city=Delhi`)
- Request Body (JSON data in POST/PUT)

## File Storage Benefits

✅ Data persists even after server restart
✅ Easy to view and edit data manually
✅ Simple to backup
✅ No database setup needed

## Tools to Test API

- **Postman** (Recommended for beginners)
- **Thunder Client** (VS Code Extension)
- **Browser** (Only for GET requests)
