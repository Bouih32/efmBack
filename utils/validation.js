const { check, validationResult } = require("express-validator");

const validateData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg,
    });
  }
  next();
};

const loginValidation = [
  check("email")
    .notEmpty()
    .withMessage("Email must be at least 2 characters long")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Email must be at least 2 characters long"),
  check("password")
    .notEmpty()
    .withMessage("Password must be at least 2 characters long")
    .isLength({ min: 2 })
    .withMessage("Password must be at least 2 characters long"),
];

const registerValidation = [
  ...loginValidation,
  check("fullname")
    .notEmpty()
    .withMessage("Fullname must be at least 2 characters long")
    .isLength({ min: 2 })
    .withMessage("Fullname must be at least 2 characters long"),
];

const taskValidation = [
  check("title")
    .notEmpty()
    .withMessage("Title must be at least 2 characters long")
    .isString()
    .withMessage("Title must be a string")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Title must be at least 2 characters long"),
  check("content")
    .notEmpty()
    .withMessage("Content must be at least 2 characters long")
    .isString()
    .withMessage("Content must be a string")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Content must be at least 2 characters long"),
];

const categoryValidation = [
  check("title")
    .notEmpty()
    .withMessage("Title must be at least 2 characters long")
    .isString()
    .withMessage("Title must be a string")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Title must be at least 2 characters long"),
];

module.exports = {
  validateData,
  categoryValidation,
  loginValidation,
  registerValidation,
  taskValidation,
};
