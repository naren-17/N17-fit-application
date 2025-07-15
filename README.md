# N17 Fit Gym Application

## Overview
N17 Fit is a premium gym brand that offers a full-stack web application for managing memberships, user authentication, and providing a seamless user experience. This application is built using React and Tailwind CSS for the frontend, and Node.js with Express and MongoDB for the backend.

## Features
- **Responsive Design**: The application is designed to be fully responsive, ensuring a great user experience on all devices.
- **Smooth Animations**: Incorporates smooth animations for a modern and engaging user interface.
- **User Authentication**: Secure user authentication with registration and login functionalities.
- **Membership Management**: Admin features for creating, updating, and deleting membership plans.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB

## Project Structure
```
n17-fit-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public
│   │   └── index.html
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd n17-fit-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### API Documentation
Refer to the backend README.md for detailed API endpoints and usage.

### Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

### License
This project is licensed under the MIT License.