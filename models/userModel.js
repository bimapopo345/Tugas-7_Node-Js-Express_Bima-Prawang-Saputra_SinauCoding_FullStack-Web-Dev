// models/userModel.js
class User {
  constructor(id, name, email, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

// Data contoh
const users = [
  new User(1, "John Doe", "john@example.com", 25),
  new User(2, "Jane Smith", "jane@example.com", 30),
];

// Simulasi fungsi untuk mencari user berdasarkan ID
function findById(id) {
  return users.find((user) => user.id === parseInt(id));
}

// Fungsi untuk mendapatkan semua pengguna
function findAll() {
  return users;
}

module.exports = { findById, findAll };
