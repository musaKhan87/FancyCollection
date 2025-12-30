const express = require("express");
const { submitInquiry, getInquiries } = require("../controllers/inquiryController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

// Public
router.post("/", submitInquiry);

// Admin
router.get("/", protect, getInquiries);

module.exports = router;
