# Task Management REST API

A complete RESTful API for task management built with Express.js, Node.js, and MongoDB.

## Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Partial updates with PATCH
- ✅ Real-time search functionality (no enter key needed)
- ✅ Query filtering by status and priority
- ✅ Pagination support
- ✅ Sorting capabilities
- ✅ Request logging middleware
- ✅ Comprehensive error handling
- ✅ Input validation
- ✅ Automatic timestamps (createdAt, updatedAt)
- ✅ Task statistics endpoint
- ✅ Proper HTTP status codes

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Validation:** express-validator
- **Logging:** Morgan
- **Environment:** dotenv

## Project Structure

```
expAssignment/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   └── Task.js              # Task schema with timestamps
│   ├── controllers/
│   │   └── taskController.js    # Business logic
│   ├── routes/
│   │   └── taskRoutes.js        # API routes
│   ├── middleware/
│   │   ├── logger.js            # Request logging
│   │   ├── errorHandler.js      # Error handling
│   │   └── validator.js         # Input validation
│   └── server.js                # Application entry point
├── postman/
│   └── Task_Management_API.postman_collection.json
├── .env                         # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "C:\Users\Vansh Sharma\Documents\vansh\nodeTs\expAssignment"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - The `.env` file is already created
   - Update MongoDB URI if needed (default: `mongodb://localhost:27017/taskmanagement`)

4. **Make sure MongoDB is running:**
   ```bash
   # If using MongoDB locally, start it with:
   mongod
   ```

5. **Start the server:**
   ```bash
   # Development mode with auto-restart
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks with optional filters |
| GET | `/api/tasks/:id` | Get a single task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Full update of a task |
| PATCH | `/api/tasks/:id` | Partial update of a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET | `/api/tasks/stats/summary` | Get task statistics |

### Query Parameters

#### Filtering & Search
- `status` - Filter by status (pending, in-progress, completed)
- `priority` - Filter by priority (low, medium, high)
- `search` - Search in title and description (real-time, no enter needed)

#### Pagination
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

#### Sorting
- `sortBy` - Sort field (createdAt, updatedAt, title, priority, status)
- `order` - Sort order (asc, desc)

### Request Examples

#### Create a Task
```json
POST /api/tasks
{
  "title": "Complete project documentation",
  "description": "Write comprehensive documentation for the API",
  "status": "pending",
  "priority": "high",
  "dueDate": "2024-12-31",
  "tags": ["documentation", "urgent"]
}
```

#### Search Tasks (Real-time)
```
GET /api/tasks?search=meeting
```
No need to press enter - the search works instantly as you type!

#### Get Tasks with Multiple Filters
```
GET /api/tasks?status=in-progress&priority=high&page=1&limit=10&sortBy=dueDate&order=asc
```

#### Partial Update (PATCH)
```json
PATCH /api/tasks/:id
{
  "status": "completed"
}
```

### Response Format

#### Success Response
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "_id": "...",
    "title": "...",
    "description": "...",
    "status": "pending",
    "priority": "high",
    "createdAt": "2024-12-03T10:30:00.000Z",
    "updatedAt": "2024-12-03T10:30:00.000Z"
  }
}
```

#### Error Response
```json
{
  "success": false,
  "error": "Validation Error",
  "details": ["Title is required"]
}
```

## Task Schema

```javascript
{
  title: String (required, max 100 chars)
  description: String (optional, max 500 chars)
  status: String (pending | in-progress | completed)
  priority: String (low | medium | high)
  dueDate: Date (optional)
  tags: Array of Strings (optional)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

## HTTP Status Codes

- `200` - Success (GET, PUT, PATCH, DELETE)
- `201` - Created (POST)
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

## Testing with Postman

1. **Import the Postman collection:**
   - Open Postman
   - Click "Import"
   - Select the file: `postman/Task_Management_API.postman_collection.json`

2. **The collection includes:**
   - All CRUD operations
   - Filtering examples
   - Search examples
   - Pagination examples
   - Sorting examples
   - Error scenarios

3. **Test the real-time search:**
   - Use the "Search Tasks" request
   - Modify the `search` parameter
   - No need to press enter - results update instantly

## Middleware

### Logger
- Logs all incoming requests with timestamp
- Displays method, path, body, and query parameters
- Uses Morgan for HTTP request logging

### Error Handler
- Catches all errors globally
- Provides meaningful error messages
- Handles validation errors, cast errors, and duplicate keys
- Returns proper HTTP status codes

### Validator
- Validates all input data
- Ensures data integrity
- Prevents invalid data from reaching the database

## Features Explanation

### Real-time Search
The search functionality works without pressing enter because it uses MongoDB's regex-based text search that processes queries instantly. Simply type in the search parameter and get immediate results:

```
GET /api/tasks?search=meeting
```

### Automatic Timestamps
MongoDB automatically manages `createdAt` and `updatedAt` fields:
- `createdAt` - Set when the document is first created
- `updatedAt` - Updated automatically on every modification

### Pagination
Efficiently handles large datasets:
```
GET /api/tasks?page=2&limit=5
```
Returns: page 2 with 5 items, plus total count and total pages

## Development

### Available Scripts

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

### Environment Variables

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskmanagement
NODE_ENV=development
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check the connection string in `.env`
- Verify MongoDB is installed correctly

### Port Already in Use
- Change the PORT in `.env` file
- Kill the process using port 3000:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```

### Module Not Found
- Run `npm install` again
- Delete `node_modules` and run `npm install`

## API Best Practices Implemented

✅ RESTful URL structure
✅ Proper HTTP methods and status codes
✅ Request/Response logging
✅ Input validation
✅ Error handling
✅ Pagination for large datasets
✅ Filtering and searching
✅ Partial updates support
✅ Consistent response format

## Author

Created as part of Express.js assignment

## License

ISC
