const Product = require("../models/Product");
const Inquiry = require("../models/Inquiry");

const getDashboardStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalInquiries = await Inquiry.countDocuments();

    const latestProducts = await Product.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const latestInquiries = await Inquiry.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalProducts,
      totalInquiries,
      latestProducts,
      latestInquiries,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};
