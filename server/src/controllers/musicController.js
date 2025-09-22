const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3333;

app.use(cors());

app.get("/list", (req, res) => {
  fs.readdir(path.resolve("music"), (err, files) => {
    if (err) return res.status(500).send("Error");
    res.json(files);
  });
});

app.get("/music/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.resolve("music", filename);
  if (!fs.existsSync(filePath)) return res.status(404).send("Not found");
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
