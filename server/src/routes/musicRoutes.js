const express = require("express");
const router = express.Router();
const multer = require("multer");
const musicController = require("../controllers/musicController");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("audio"), musicController.uploadMusic);
router.get("/list", musicController.getMusicList);
router.get("/:filename", musicController.streamMusic);

module.exports = router;
