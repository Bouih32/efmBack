const express = require("express");
const {
  addTask,
  addCategory,
  deleteTask,
  getTasks,
  getTaskById,
  deleteCategory,
  getCategoryById,
  editTask,
} = require("../controllers/taskController");
const authenticateToken = require("../utils/auth");
const {
  taskValidation,
  validateData,
  categoryValidation,
} = require("../utils/validation");
const router = express.Router();

router.get("/", authenticateToken, getTasks);

router.post("/add", authenticateToken, taskValidation, validateData, addTask);
router.post(
  "/category",
  authenticateToken,
  categoryValidation,
  validateData,
  addCategory
);

router.put("/:id", authenticateToken, taskValidation, validateData, editTask);
router.get("/:id", authenticateToken, getTaskById);
router.get("/category/:id", authenticateToken, getCategoryById);
router.patch("/delete/:id", authenticateToken, deleteTask);
router.delete("/category/:id", authenticateToken, deleteCategory);
module.exports = router;
