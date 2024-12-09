// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Mendapatkan semua pengguna
router.get("/", userController.getAllUsers);

// Mendapatkan pengguna berdasarkan ID (params)
router.get("/:id", userController.getUserById);

// Mendapatkan pengguna dengan query params
router.get("/search", userController.getUserByQuery);

module.exports = router;
