import React, { useState } from "react";
import { FaHandshake, FaBullseye, FaUserTie } from "react-icons/fa";

const AboutUsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-semibold mb-8 text-center">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`p-6 rounded-lg shadow-md ${
              isDarkMode ? "bg-gray-800" : "bg-blue-200"
            }`}
          >
            <FaHandshake className="text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {isDarkMode ? "Our Dark Mission" : "Our Mission"}
            </h2>
            <p className="leading-relaxed">
              {isDarkMode
                ? "Our dark mission is to provide customers with the best online shopping experience by offering a wide range of high-quality products, seamless transactions, and exceptional customer service."
                : "Our mission at EcomMart is to provide customers with the best online shopping experience by offering a wide range of high-quality products, seamless transactions, and exceptional customer service."}
            </p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-md ${
              isDarkMode ? "bg-gray-800" : "bg-green-200"
            }`}
          >
            <FaBullseye className="text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {isDarkMode ? "Our Dark Vision" : "Our Vision"}
            </h2>
            <p className="leading-relaxed">
              {isDarkMode
                ? "Our dark vision is to become the leading ecommerce platform globally, known for innovation, reliability, and customer satisfaction. We aim to empower businesses and individuals to thrive in the digital marketplace."
                : "Our vision is to become the leading ecommerce platform globally, known for innovation, reliability, and customer satisfaction. We aim to empower businesses and individuals to thrive in the digital marketplace."}
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`rounded-lg shadow-md p-6 ${
                isDarkMode ? "bg-yellow-800" : "bg-yellow-200"
              }`}
            >
              <FaUserTie className="text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">X</h3>
              <p className="text-center">CEO</p>
            </div>
            <div
              className={`rounded-lg shadow-md p-6 ${
                isDarkMode ? "bg-pink-800" : "bg-pink-200"
              }`}
            >
              <FaUserTie className="text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Y</h3>
              <p className="text-center">COO</p>
            </div>
            <div
              className={`rounded-lg shadow-md p-6 ${
                isDarkMode ? "bg-purple-800" : "bg-purple-200"
              }`}
            >
              <FaUserTie className="text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Z</h3>
              <p className="text-center">CTO</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`fixed bottom-4 right-4 p-2 rounded-full border border-gray-300 focus:outline-none ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default AboutUsPage;
