// controllers/userController.js
const User = require("../models/userModel");

// Mendapatkan semua pengguna
exports.getAllUsers = (req, res) => {
  const users = User.findAll();
  res.status(200).json(users);
};

// Mendapatkan pengguna berdasarkan ID
exports.getUserById = (req, res) => {
  const userId = req.params.id; // Mengambil parameter ID dari URL
  const user = User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

// Mendapatkan pengguna dengan query params
exports.getUserByQuery = (req, res) => {
  const { name, age } = req.query; // Mengambil query params dari URL
  const users = User.findAll().filter((user) => {
    let isMatch = true;
    if (name && !user.name.toLowerCase().includes(name.toLowerCase())) {
      isMatch = false;
    }
    if (age && user.age !== parseInt(age)) {
      isMatch = false;
    }
    return isMatch;
  });
  res.status(200).json(users);
};
