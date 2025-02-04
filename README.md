
Advanced Product Catalog
An Advanced Product Catalog designed for an e-commerce platform that allows users to browse, filter, view products, and manage their shopping cart efficiently. This application features real-time product availability updates, a responsive design, and dynamic filtering to enhance user experience.

Table of Contents
Features
Product Catalog
Dynamic Filtering
Shopping Cart
Real-Time Product Availability
Product Detail Page
UI/UX Design (TailwindCSS)
State Management
APIs
Links
Installation
Technologies Used
License
Features
1. Product Catalog
Product Display: Displays a list of products with essential details:
Product Name
Description
Price
Image
Stock Status
Pagination or Infinite Scrolling: Handle large datasets smoothly through pagination or infinite scrolling.
Add to Cart: Users can add products directly to their shopping cart.
2. Dynamic Filtering
Filter by Category: Filter products by categories such as Electronics, Clothing, and more.
Price Range: Allows users to set a price range to narrow down their product search.
Rating Filter: Filters products by user ratings (e.g., 4 stars and above).
Real-Time Updates: Product list updates dynamically as filters are applied without page reload.
3. Shopping Cart
Add/Remove Products: Users can add or remove products from their cart easily.
Cart Summary: Displays the total number of items and the total price of the cart.
Persistence: Cart state is maintained even when navigating to different pages.
4. Real-Time Product Availability
WebSockets/Polling: Checks product availability in real-time while browsing.
Out of Stock Alerts: Displays a message if a product is out of stock when attempting to add it to the cart.
Loading Indicators: Uses spinners or other UI elements to indicate when product availability is being checked.
5. Product Detail Page
Detailed Product Information: Displays more comprehensive details, including:
Larger Product Image
Full Product Description
Price
Rating & Reviews
Stock Status
Related Products: Suggests related products based on category or tags.
6. UI/UX Design (TailwindCSS)
Responsive Design: Fully responsive layout optimized for mobile, tablet, and desktop devices using TailwindCSS.
UI Components: TailwindCSS utility classes are used to create sleek and functional components:
Add to Cart buttons
Price range sliders, search bars
Product Cards
Navigation and filter components
7. State Management
Global State Management: Uses React Context API or Redux to manage:
Cart State: Items in the cart and total price.
Active Filters: Current category, price range, and ratings.
useEffect and useState hooks are used for managing side effects and updating UI in real-time as product or filter data changes.
APIs
The following Mock APIs (DummyJSON) are used to manage product data and cart functionality:

Get Products (List of Products)

Endpoint: https://dummyjson.com/products
Get Product by ID (Product Detail Page)

Endpoint: https://dummyjson.com/products/{id}
Example: https://dummyjson.com/products/1
Add Product to Cart

Endpoint: https://dummyjson.com/carts/add
Method: POST
Get Cart (Retrieve Cart Items)

Endpoint: https://dummyjson.com/carts
Product Search with Filtering

Endpoint: https://dummyjson.com/products/search?q={query}&category={category}&price={minPrice}-{maxPrice}
Links
GitHub Repository: https://github.com/Amarjeet113
Live Deployment: https://cadncart.vercel.app/
Installation
To run the project locally:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/Amarjeet113/cadncart
Navigate into the project folder:

bash
Copy
Edit
cd advanced-product-catalog
Install the required dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
The application will be live at https://cadncart.vercel.app/

Technologies Used
Frontend: React, TailwindCSS, React Context API / Redux
Backend: Mock API (DummyJSON)
Deployment: Vercel
