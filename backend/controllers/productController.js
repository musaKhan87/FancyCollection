const Product = require("../models/Product");

// Get all products (Public)
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add product (Admin)
const addProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
     image: req.file.path,
      // Cloudinary image URL
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete product (Admin)
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};

const getServer=async (req,res) => {
  try {
    return res.status(200).json("Server Started")
  } catch (error) {
    
  }
}

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  getServer
};
