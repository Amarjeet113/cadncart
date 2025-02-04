// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js";

dotenv.config();

const products = [
  {
    _id: "1", // Force _id to "1" (as a string) if needed, or use mongoose.Types.ObjectId("...") 
    name: "Product 1",
    description: "Sample product",
    price: 10,
    image: "https://via.placeholder.com/150",
    stock: 5,
  },
  {
    _id: "2",
    name: "Product 2",
    description: "Another sample product",
    price: 20,
    image: "https://via.placeholder.com/150",
    stock: 0,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database seeded!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();
