import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./ProductsDetails";
import Product from "./Products";
import TopProducts from "./TopProducts";

function ListProduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=8&skip=${(currentPage - 1) * 8}`
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, [currentPage]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("https://dummyjson.com/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setShowCartPopup(true);
    console.log("Added to cart:", product.title);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowCategoryPopup(false);
    // Perform filtering based on the selected category
    // For demonstration purposes, we'll just log the selected category
    console.log("Selected category:", category);
  };

  const handleCancelCart = () => {
    setCart([]);
    setShowCartPopup(false);
  };

  return (
    <div>
      <Product />
      <TopProducts />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8 mt-6 font-serif">
          Featured Products
        </h1>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowCategoryPopup(true)}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Filter by Category
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 sm:h-56 object-cover object-center"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-gray-800 font-semibold line-clamp-1 text-lg">
                    {product.title}
                  </h2>
                  <p className="text-gray-700 font-medium">${product.price}</p>
                </div>
                <p className="text-gray-700 line-clamp-2 mb-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-red-600 font-semibold">
                    {" "}
                    In Stock: {product.stock}
                  </p>
                  {product.discountPercentage && (
                    <p className="text-green-600 font-semibold">
                      -{product.discountPercentage}%
                    </p>
                  )}
                </div>
                <div className="flex justify-center mt-2">
                  <button
                    className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-full mx-2 transition-colors duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart className="inline-block mr-1" />
                    Add to Cart
                  </button>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-full mx-2 transition-colors duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleViewProduct(product)}
                  >
                    <FaEye className="inline-block mr-1" />
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {/* Pagination buttons */}
          <button
            className="mx-1 p-2 rounded-full border border-gray-300 focus:outline-none hover:bg-blue-200"
            onClick={() => handlePaginationClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          {[...Array(3)].map((_, index) => (
            <button
              key={index}
              className={`mx-1 p-2 rounded-full border border-gray-300 focus:outline-none ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => handlePaginationClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="mx-1 p-2 rounded-full border border-gray-300 focus:outline-none hover:bg-blue-200"
            onClick={() => handlePaginationClick(currentPage + 1)}
            disabled={currentPage === 3}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Category Filter Popup */}
      {showCategoryPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.name)}
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cart Popup */}

      {/* Cart Popup */}
      {showCartPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add to Cart</h2>
              <button
                onClick={() => setShowCartPopup(false)}
                className="text-red-600"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="divide-y divide-gray-200">
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="py-2 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <span className="text-gray-800">{product.title}</span>
                    <span className="text-gray-600 ml-2">${product.price}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="text-red-600"
                  >
                    <FaTimes />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCancelCart}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Delete Cart
              </button>
              {/* Add order confirmation button here */}
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default ListProduct;
