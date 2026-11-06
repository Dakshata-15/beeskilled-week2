# User Authentication API

A secure user authentication REST API built using Node.js, Express.js, MongoDB, bcrypt, and JSON Web Tokens (JWT).

## Features
- User registration
- Secure password hashing using bcrypt
- User login and authentication
- JWT token generation and verification
- Protected user profile route
- Input validation and error handling

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
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
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/auth_db
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

5. Start the server:

```bash
npm run dev
```

Server URL: `http://localhost:5001`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Login a user |
| GET | `/api/auth/profile` | Get protected user profile |

## Security
Passwords are hashed using bcrypt, and JWT middleware protects authenticated routes.

## Testing
All authentication endpoints were tested using Postman.
