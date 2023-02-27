const express = require("express");
const { signup } = require("../controllers/authController");
const router = express.Router();

// auth routes
// /api/aignup
router.post('/signup', signup);

module.exports = router;