const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware"); // Ensure this middleware exists

// Protected Profile Route
router.get("/profile", authMiddleware, async (req, res) => {
    try {
        res.json({ message: "User profile data", user: req.user });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
