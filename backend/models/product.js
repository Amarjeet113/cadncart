// backend/models/Product.js
import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    stockPurchased: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
