const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const loginController = require("../controllers/loginController");

router.post("/register", authController.registerUser);
router.post("/login", loginController.loginUser);

module.exports = router;
