// Load environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* ===============================
   Middleware
================================= */

// Enable CORS (allow frontend requests)
app.use(cors());

// Parse JSON body
app.use(express.json());


/* ===============================
   Database Connection
================================= */

mongoose.connect(process.env.MONGO_URI)
    .catch((err) => {
        process.exit(1); // Stop server if DB fails
    });

/* ===============================
   Basic Route (Health Check)
================================= */

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Task Manager API is running 🚀"
    });
});

/* ===============================
   Routes
================================= */

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

/* ===============================
   Start Server
================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT);