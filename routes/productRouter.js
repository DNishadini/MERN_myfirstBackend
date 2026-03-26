import express from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  getProductID,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.delete("/:productId", deleteProduct);
productRouter.put("/:productId", updateProduct);
productRouter.get("/:productID", getProductID);
export default productRouter;
