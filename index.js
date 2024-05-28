const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
