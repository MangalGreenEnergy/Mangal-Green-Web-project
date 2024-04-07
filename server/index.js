//jshint esversion:6

const express = require("express");
const connectDB = require("./config/db"); // Import db.js
const bodyParser = require("body-parser");
const userRoutes = require("./app/routers/userRoutes");
const productRoutes = require('./app/routers/productRoutes')
const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Connect to MongoDB Atlas
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/users to access user routes`);
});
