# Task Management System

A web-based application that allows users to create, update, and manage tasks. Each user can sign up, log in, and manage their tasks. Users can view tasks by status, update, and delete only the tasks they created.

### Features
- User Authentication: Signup, login, password change.
- Task Management: Create, view, update, delete tasks.
- Task Filtering: Get tasks by status.
- Access Control: Users can only delete tasks they created.

### Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Token)

### Project Structure
```plaintext
└── TASK MANAGEMENT SYSTEM/
    ├── models/
    │   ├── User.js     # User model
    │   └── Task.js     # Task model
    ├── routes/
    │   ├── taskRoute.js     # Task management route
    │   └── userRoute.js    # User route
    ├── db.js   # Database connection module
    ├── jwt.js   # JWT Authentication middleware and token generation
    └── server.js   # Server setup



## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or MongoDB Atlas URI

### Installation
1. Clone the repository:
    ```
   git clone https://github.com/your-username/your-repo-name.git
    ```
   
2. Navigate to the project directory:
   ```
   cd your-repo-name
   ```
3. Install dependencies:
  "dependencies": {
    "bcrypt": "^5.1.1",
    "body-parser": "^1.20.3",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.7.0",
    "nodemon": "^3.1.7"
  },
   ```
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file with the following variables:
     ```
     PORT=5000
     MONGODB_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     ```

5. Start the server:
   ```
   node server.js
   ```



## API Endpoints

### User Authentication
- `POST /signup` - Register a new user
- `POST /login` - Login with email and password

### User Profile
- `GET /profile` - Get user profile information
- `PUT /profile/password` - Change password

### Task Management
- `POST /task/create` - Create a new task
- `PUT /task/update` - Update an existing task
- `GET /task` - Get list of all tasks
- `GET /task/:status` - Get tasks filtered by status
- `DELETE /task/delete` - Delete a task (user can only delete their own tasks)