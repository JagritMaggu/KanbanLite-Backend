Backend service for KanbanLite — a full-stack task management application.

Provides RESTful APIs for managing tasks including:
- Create task
- Update task
- Delete task
- Mark completed/pending
- Fetch all tasks

Built using Node.js, Express, and MongoDB Atlas. 

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv

## API Endpoints

### Create Task
POST /api/tasks

### Get All Tasks
GET /api/tasks

### Update Task
PUT /api/tasks/:id

### Delete Task
DELETE /api/tasks/:id

### Update Status
PATCH /api/tasks/:id/status

## Environment Variables

Create a `.env` file in the root:

PORT=5000  
MONGO_URI= mongodb+srv://taskappuser:taskappuser@cluster0.wpk6zwu.mongodb.net/taskManager?retryWrites=true&w=majority&appName=Cluster0
## Run Locally

Clone the repo:

git clone https://github.com/JagritMaggu/KanbanLite-Backend.git

Install dependencies:

npm install

Start server:

npm run dev

## Deployment

Backend deployed on Render: https://kanbanlite-backend.onrender.com
