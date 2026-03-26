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

export async function deleteProduct(req, res) {
  if (!isAdmin(req)) {
    res.status(403).json({
      message: "Only admin can delete product",
    });
    return;
  }
  try {
    const productID = req.params.productId;
    await Product.deleteOne({
      productID: productID,
    });
    res.json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({
      message: "Error deleting product",
    });
  }
}

export async function updateProduct(req, res) {
  if (!isAdmin(req)) {
    res.status(403).json({
      message: "Only admin can update product",
    });
    return;
  }
  try {
    const productID = req.params.productId;
    const updateData = req.body;

    await Product.updateOne(
      {
        productID: productID,
      },
      updateData,
    );
    res.json({
      message: "Product updated successfully",
    });
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({
      message: "Error updating product",
    });
  }
}

export async function getProductID(req, res) {
  try {
    const productID = req.params.productId;
    const product = await Product.findOne({
      productID: productID,
    });

    if (product == null) {
      res.status(404).json({
        message: "Product not found",
      });
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({
      message: "Error fetching product",
    });
  }
}
