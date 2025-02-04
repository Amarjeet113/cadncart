// backend/server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import productRoutes from "./routes/productRoutes.js";
import Product from "./models/product.js"; // For stock checking

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Create HTTP server and integrate with Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/products", productRoutes);

// io.on("connection", (socket) => {
//   console.log("Client connected:", socket.id);

//   // Listen for availability check requests
//   socket.on("checkProductAvailability", async (productId) => {
//     try {
//       // Fetch product details from the database or API
//       const response = await fetch(`https://dummyjson.com/products/${productId}`);
//       const product = await response.json();

//       if (product.stock > 0) {
//         socket.emit("productInStock", { productId, inStock: true });
//       } else {
//         socket.emit("productOutOfStock", { productId, inStock: false });
//       }
//     } catch (error) {
//       console.error("Error checking product:", error);
//       socket.emit("productOutOfStock", { productId, inStock: false });
//     }
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected:", socket.id);
//   });
// });


const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`Server running on port ${PORT} and WebSocket connected`)
);
