# To-Do List REST API

A RESTful API built using Node.js, Express.js, and MongoDB to manage tasks efficiently.

## Features
- Create a new task
- Retrieve all tasks
- Retrieve a task by ID
- Update an existing task
- Delete a task
- Task status and priority management
- MongoDB database integration

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Installation and Setup

1. Clone the repository.
2. Navigate to the project folder.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskflow_db
```

5. Start the server:

```bash
npm run dev
```

Server URL: `http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a task by ID |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Testing
All API endpoints were tested successfully using Postman.
