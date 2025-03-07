require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes"); // ✅ Import user routes

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes); // ✅ Added user routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
