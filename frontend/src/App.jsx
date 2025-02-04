// frontend/src/App.jsx
import { useAuth0 } from "@auth0/auth0-react";
import AuthSection from "./component/AuthSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import { Toaster } from "react-hot-toast";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Checkout from "./component/Checkout";
import Exit from "./component/Exit";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Toaster position="top-right" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/exit" element={<Exit />} />
            <Route path="/authSection" element={<AuthSection />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
