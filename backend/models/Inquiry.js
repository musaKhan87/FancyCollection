const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  fabric: String,
  quantity: String,
  city: String
}, { timestamps: true });

module.exports = mongoose.model("Inquiry", inquirySchema);
