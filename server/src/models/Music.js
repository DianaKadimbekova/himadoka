const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  filename: { type: String, required: true },
});

module.exports = mongoose.model("Music", MusicSchema);
