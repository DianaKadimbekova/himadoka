const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./authRoutes");
const musicRoutes = require("./musicRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

app.use("/api", authRoutes);
app.use("/music", musicRoutes);

module.exports = app;
