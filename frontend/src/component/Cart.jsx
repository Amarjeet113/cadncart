// frontend/src/components/Cart.jsx
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const [loading, setLoading] = useState(false);
  

  const addToCart = async (product) => {
    setLoading(true);
    // Check product availability first
    const inStock = "inStock"
    if (!inStock) {
      alert("Product is out of stock!");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("https://dummyjson.com/carts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1, // Using a static user ID for this demo
          products: [
            {
              id: product.id,
              quantity: product.quantity,
            },
          ],
        }),
      });
      const data = await response.json();
      console.log("Added to Cart:", data);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {isEmpty && (
        <div className="flex flex-row justify-center px-4 py-16 sm:px-6 sm:py-24">
          <div className="w-fit flex flex-col">
            <AiOutlineShopping size={150} className="mx-7" />
            <h3 className="mx-2">No item added to your cart</h3>
            <Link to="/product">
              <button className="flex items-center m-2 justify-center rounded-md bg-orange-700 px-6 py-3 text-white hover:bg-indigo-500">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-between">
        <div className="text-lg font-medium text-gray-900">Shopping cart</div>
        <button onClick={emptyCart} className="text-indigo-600 hover:text-indigo-500">
          Remove All Items
        </button>
        <div className="mt-8">
          <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
              {!isEmpty &&
                items.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{product.title}</h3>
                        <p className="ml-4">${(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="quantity flex flex-row my-2">
                          <h3 className="my-2.5">Quantity:</h3>
                          <div className="flex flex-row mx-2 border p-1 border-indigo-600">
                            <button
                              className="minus mt-1"
                              onClick={() =>
                                updateItemQuantity(product.id, product.quantity - 1)
                              }
                            >
                              <AiOutlineMinus />
                            </button>
                            <span className="num mx-2 mt-1 text-lg">{product.quantity}</span>
                            <button
                              className="plus mt-1"
                              onClick={() =>
                                updateItemQuantity(product.id, product.quantity + 1)
                              }
                            >
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </div>
                        <button
                          className="text-indigo-600 hover:text-indigo-500"
                          onClick={() => removeItem(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
                        disabled={loading}
                      >
                        {loading ? "Adding..." : "Add to Cart"}
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6">
        <div className="flex justify-between text-lg font-medium bg-orange-400 rounded-md py-3">
          <p className="ml-3">Grand Total</p>
          <p className="mr-7">${cartTotal.toFixed(2)}</p>
        </div>
        <Link
          to="/checkout"
          className="flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-white hover:bg-indigo-500 mt-4"
        >
          Checkout
        </Link>
        <Link
          to="/product"
          className="mt-4 block text-center text-orange-600 hover:text-indigo-500"
        >
          Continue Shopping →
        </Link>
      </div>
    </div>
  );
};

export default Cart;
