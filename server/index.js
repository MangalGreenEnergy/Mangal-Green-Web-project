const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const userRoutes = require("./app/routers/userRoutes");
const productRoutes = require("./app/routers/productRoutes");

const app = express();
const corsConfig={
  origin:["*"], 
  Credential:true,
  methods:["GET","PUT","POST","DELETE"]
}

app.options("",cors(corsConfig));
app.use(cors(corsConfig)); // Enable CORS

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, I am live");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/users to access user routes`);
});