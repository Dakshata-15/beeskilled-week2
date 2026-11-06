# Notes App Backend

A secure Notes Management REST API built using Node.js, Express.js, and MongoDB, with JWT authentication to ensure users can access and manage only their own notes.

## Features
- Create new notes
- Retrieve all notes
- Retrieve a specific note by ID
- Update existing notes
- Delete notes
- JWT-protected API routes
- User-specific note management
- MongoDB data storage

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Postman

## Installation and Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file:

```env
PORT=5002
MONGO_URI=mongodb://127.0.0.1:27017/notes_db
JWT_SECRET=your_secret_key
```

5. Start the server:

```bash
npm run dev
```

Server URL: `http://localhost:5002`

## API Endpoints

All endpoints require a valid JWT Bearer token.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/notes` | Create a note |
| GET | `/api/notes` | Get all user notes |
| GET | `/api/notes/:id` | Get a note by ID |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Authentication
The API uses JWT middleware to protect all note routes. Each user can access and modify only their own notes.

## Testing
All CRUD operations and JWT-protected routes were tested successfully using Postman.
