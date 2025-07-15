# N17 Fit Backend Documentation

## Overview
N17 Fit is a premium gym brand that offers a full-stack web application for managing memberships and user authentication. This backend application is built using Node.js, Express, and MongoDB.

## Features
- User authentication (registration and login)
- Membership management (create, update, delete plans)
- Protected routes using JWT authentication
- Middleware for role-based access control

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd n17-fit-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the backend directory and add the following variables:
  ```
  MONGODB_URI=<your_mongodb_connection_string>
  JWT_SECRET=<your_jwt_secret>
  PORT=5000
  ```

### Running the Application
To start the server, run:
```
npm start
```
The server will run on `http://localhost:5000`.

### API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login an existing user

- **Membership Management**
  - `GET /api/memberships` - Get all membership plans
  - `POST /api/memberships` - Create a new membership plan
  - `PUT /api/memberships/:id` - Update a membership plan
  - `DELETE /api/memberships/:id` - Delete a membership plan

## Folder Structure
- `src/`
  - `controllers/` - Contains controller functions for handling requests
  - `models/` - Contains Mongoose models for User and Membership
  - `routes/` - Contains route definitions for authentication and membership
  - `middleware/` - Contains middleware for authentication and authorization
  - `app.js` - Entry point of the application

## Contributing
Contributions are welcome! Please create a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.