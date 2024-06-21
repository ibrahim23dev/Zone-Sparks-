import React, { useState } from "react";
import { FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";

function ProductDetails({ product, onClose }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <p className="text-gray-700 mb-2">
          Category:{" "}
          <span className="text-blue-600 font-semibold">
            {product.category}
          </span>
        </p>
        <p className="text-gray-700 mb-2">
          Price:{" "}
          <span className="text-green-600 font-semibold">${product.price}</span>
        </p>
        <p className="text-gray-700 mb-2">
          In Stock:{" "}
          <span className="text-red-600 font-semibold">{product.stock}</span>
        </p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex mb-4">
          <div className="w-1/3 pr-2">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-auto rounded-lg cursor-pointer transform transition duration-300 hover:scale-110"
            />
          </div>
          <div className="w-2/3 flex flex-wrap">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                className="w-16 h-16 object-cover rounded-lg cursor-pointer transform transition duration-300 hover:scale-110 mr-2 mb-2"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-blue-600">
            <FaShoppingCart className="mr-2 animate-bounce" />
            Add to Cart
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
