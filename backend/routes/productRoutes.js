const express = require("express");
const { addProduct, getProducts, deleteProduct, getServer } = require("../controllers/productController");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

// Public
router.get("/", getProducts);

router.get("/get", getServer);

// Admin
router.post(
  "/",
   upload.single("image"), // image field name
  addProduct
);
router.delete("/:id", deleteProduct);

module.exports = router;
