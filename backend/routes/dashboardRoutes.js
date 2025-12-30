const express = require("express");
const router = express.Router();
const { getDashboardStats } = require("../controllers/dashboardController");
const protect = require("../middleware/authMiddleware");

// Admin Dashboard
router.get("/stats", protect, getDashboardStats);

module.exports = router;
