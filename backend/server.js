const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BlogRouter = require('./routes/postRoutes.js');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

function startServer() {
  try {
    // Connecting to MongoDB Database
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("MongoDB connected!, DataBase name: " + mongoose.connection.db.databaseName)
      }).then(() => {
        // Middlewares
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
      })
      .then(() => {
        // Routes
        // Welcome route
        app.get("/", (req, res) => {
          res.send("Welcome to Mini Blog App's API");
        });
        // Blog routes
        app.use("/api/posts", BlogRouter);
      })
      .then(() => {
        // Listening to port
        app.listen(PORT, () => {
          console.log(`Server is running on port http://localhost:${PORT}`);
        });
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1);
      });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}

startServer();