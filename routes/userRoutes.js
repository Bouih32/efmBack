const express = require("express");
const router = express.Router();
const {
  loginValidation,
  validateData,
  registerValidation,
} = require("../utils/validation");
const {
  loginUser,
  registerUser,

  logOut,
} = require("../controllers/userController");
const authenticateToken = require("../utils/auth");

router.post("/login", loginValidation, validateData, loginUser);
router.post("/register", registerValidation, validateData, registerUser);
router.post("/logout", logOut);

module.exports = router;
