import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function createProduct(req, res) {
  if (!isAdmin(req)) {
    res.status(403).json({
      message: "Only admin can create product",
    });
    return;
  }

  try {
    const productData = req.body;
    const product = new Product(productData);
    await product.save();
    res.json({
      message: "Product created successfully",
      product: product,
    });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({
      message: "Error creating product",
    });
  }
}

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching products",
      error: err,
    });
  }
}
