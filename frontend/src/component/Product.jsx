import React, { useState, useEffect, useCallback, useRef } from "react";
import { useCart } from "react-use-cart";
import toast from "react-hot-toast";

const Product = () => {
  const { addItem, inCart } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [stockStatus, setStockStatus] = useState('');

  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    const url = `https://dummyjson.com/products/search?q=&category=${selectedCategory}&price=0-10000&page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const newProducts = data.products;

      if (newProducts.length === 0) setHasMore(false);

      setProducts((prev) => [...prev, ...newProducts]);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  }, [loading, page, selectedCategory, hasMore]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const fetchProductDetails = (id) => {
    checkStockAvailability(id)
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data))
      .catch((err) => console.error("Error fetching product details:", err));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setPage(1);
    setHasMore(true);
    setProducts([]);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setPage(1);
    setHasMore(true);
    setProducts([]);
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setSortBy("default");
    setPage(1);
    setHasMore(true);
    setProducts([]);
  };

  const checkStockAvailability = async (id) => {
    try {
      const productResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const product = await productResponse.json();

      const purchasedResponse = await fetch(`http://localhost:5000/api/products/${id}`);
      const purchasedData = await purchasedResponse.json();

      const originalStock = product.stock;
      const purchasedStock = purchasedData.product.stockPurchased || 0;
      

      const availableStock = originalStock - purchasedStock;

      if (availableStock > 0) {
        setStockStatus(`In Stock (${availableStock} left)`);
        return true;
      } else {
        setStockStatus("Out of Stock");
        return false;
      }
    } catch (error) {
      console.error("Error checking stock availability", error);
      setStockStatus("Out of Stock");
      return false;
    }
  };

  const handleClick = async (product) => {
    setLoading(true);
    const inStock = await checkStockAvailability(product.id);
    if (!inStock) {
      toast.error("Product Out of Stock!");
      setLoading(false);
      return;
    }
    addItem(product);
    toast.success("Item added to the cart.");
    setLoading(false);
  };

  // Infinite scroll detection
  const loadMoreRef = useRef(null);
  const handleScroll = () => {
    if (loading || !hasMore) return;
    const bottom = loadMoreRef.current.getBoundingClientRect().bottom;
    if (bottom <= window.innerHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  let filteredProducts = [...products];
  if (sortBy === "Ratings") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "priceHighToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "priceLowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex bg-orange-400 flex-col lg:flex-row justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white m-2 text-center">
            Apply Filters
          </h2>
          <div className="flex flex-col md:flex-row justify-between lg:gap-x-5 md:my-2">
            <select
              className="bg-orange-400 border-2 border-white text-white"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="">Categories</option>
              {[...new Set(products.map((c) => c.category))].map(
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              )}
            </select>
            <button onClick={() => handleSortChange("Ratings")} className="text-white">
              Ratings
            </button>
            <button onClick={() => handleSortChange("priceHighToLow")} className="text-white">
              Price: Expensive
            </button>
            <button onClick={() => handleSortChange("priceLowToHigh")} className="text-white">
              Price: Cheap
            </button>
            <button onClick={resetFilters} className="text-white">
              Reset
            </button>
          </div>
        </div>

        {!selectedProduct ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <h3
                    className="text-sm text-gray-700 cursor-pointer"
                    onClick={() => fetchProductDetails(product.id)}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
                <p className="text-sm text-gray-900">{product.rating} ⭐</p>
                <button
                  onClick={() => handleClick(product)}
                  className="w-full bg-orange-600 text-white py-2 mt-2"
                  disabled={loading}
                >
                  {loading
                    ? "Checking..."
                    : inCart(product.id)
                    ? "In Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 p-5 border rounded-lg shadow-lg">
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-orange-600 mb-4"
            >
              Back to Products
            </button>
            <img
                    src={selectedProduct.thumbnail}
                    alt={selectedProduct.title}
                    className="h-full w-full object-cover"
                  />
            <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
            <p className="mt-2 text-gray-600">{selectedProduct.description}</p>
            <div className="mt-4">
              <button
                onClick={() => checkStockAvailability(selectedProduct.id)}
                className="w-full bg-orange-600 text-white py-2"
              >
                Check Availability
              </button>
              <p className="text-sm text-gray-500 mt-2">{stockStatus}</p>
            </div>
          </div>
        )}
        {loading && <div className="text-center mt-4">Loading...</div>}
        <div ref={loadMoreRef}></div>
      </div>
    </div>
  );
};

export default Product;
