# Book Reviews API

A RESTful backend API for managing book reviews and ratings with JWT and Session authentication.

## Features

- User registration and authentication (JWT & Session)
- CRUD operations for book reviews
- Search and filter books
- Rate and review books
- User-specific review management
- Concurrent user access support

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile

### Books
- `GET /api/books` - Get all books (with search/filter)
- `GET /api/books/:id` - Get book by ID
- `GET /api/books/isbn/:isbn` - Get book by ISBN
- `GET /api/books/:id/reviews` - Get book reviews

### Reviews (Protected - JWT required)
- `POST /api/reviews` - Add new review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review
- `GET /api/reviews/user/my-reviews` - Get user's reviews

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Start MongoDB
5. Run the server: `npm run dev`

## Testing with Postman

1. Import the Postman collection
2. Start with registration/login to get JWT token
3. Use the token in Authorization header for protected routes
4. Test all CRUD operations

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Express Session
- bcryptjs for password hashing
- Express Validator