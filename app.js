// app.js
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Memungkinkan penggunaan .env untuk konfigurasi

const app = express();

// Middleware
app.use(cors()); // Mengaktifkan CORS
app.use(express.json()); // Untuk menerima data JSON di body request

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes); // Menghubungkan routing pengguna

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
