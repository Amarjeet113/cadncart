// backend/routes/productRoutes.js
import express from "express";
import Product from "../models/product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); 

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET single product by id
router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await Product.findOne({ id:productId }); 

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id/stock", async (req, res) => {
  try {
    const { stock } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found" });
    product.stock = stock;
    await product.save();
    res.json({ message: "Stock updated", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/update-stock", async (req, res) => {
  try {
    const { products } = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    for (const product of products) {
      await Product.findOneAndUpdate(
        { id: product.id },
        { $inc: { stockPurchased: product.stockPurchased || 0 } },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }

    res.status(200).json({ message: "Stock updated successfully" });
  } catch (error) {
    console.error("Error on updating stock:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
