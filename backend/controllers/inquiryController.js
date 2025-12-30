const Inquiry = require("../models/Inquiry");

// Submit inquiry (Public)
const submitInquiry = async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all inquiries (Admin)
const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitInquiry,
  getInquiries,
};
