const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// Variables
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

// Middlewears
app.use(bodyParser.json());
app.use(cors());

// DB connection
mongoose.connect(
  uri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connection to DB successful");
  }
);

// Import Routes
const todoRoute = require("./routes/todoRoute");

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });
// //Route Middleware
app.use("/todos", todoRoute);

// Listen
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
