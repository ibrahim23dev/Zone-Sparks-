import React from "react";
import { FaQuestionCircle, FaMobileAlt, FaLaptop, FaBox } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-16 font-serif">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Frequently Asked Questions
      </h2>

      {/* Smartphone FAQ */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
          <FaMobileAlt className="mr-2" /> Smartphone
        </h3>
        <div className="flex flex-col md:flex-row md:justify-center gap-6">
          <div className="bg-blue-100 md:w-1/3 rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-blue-500 mr-4" />
                <p className="text-gray-800 font-semibold">
                  What are the available payment options for smartphones?
                </p>
              </div>
              <p className="text-gray-600">
                We accept credit/debit cards, PayPal, and bank transfers.
              </p>
            </div>
          </div>
          <div className="bg-green-100 md:w-1/3 rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-green-500 mr-4" />
                <p className="text-gray-800 font-semibold">
                  Do smartphones come with a warranty?
                </p>
              </div>
              <p className="text-gray-600">
                Yes, all smartphones come with a standard one-year manufacturer
                warranty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop FAQ */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
          <FaLaptop className="mr-2" /> Laptop
        </h3>
        <div className="flex flex-col md:flex-row md:justify-center gap-6">
          <div className="bg-yellow-100 md:w-1/3 rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-yellow-500 mr-4" />
                <p className="text-gray-800 font-semibold">
                  Can I customize the specifications of a laptop?
                </p>
              </div>
              <p className="text-gray-600">
                Yes, we offer customization options for RAM, storage, and other
                components.
              </p>
            </div>
          </div>
          <div className="bg-purple-100 md:w-1/3 rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-purple-500 mr-4" />
                <p className="text-gray-800 font-semibold">
                  What operating systems are available for laptops?
                </p>
              </div>
              <p className="text-gray-600">
                We offer laptops with Windows, macOS, and Linux operating
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Products FAQ */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
          <FaBox className="mr-2" /> Other Products
        </h3>
        <div className="flex flex-col md:flex-row md:justify-center gap-6">
          <div className="bg-pink-100 md:w-1/3 rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-pink-500 mr-4" />
                <p className="text-gray-800 font-semibold">
                  How do I track my order?
                </p>
              </div>
              <p className="text-gray-600">
                You can track your order using the tracking number provided in
                your confirmation email.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 md:w-1/3 rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-gray-500 mr-4" />
                <p className="text-gray-800 font-semibold">
                  Do you offer international shipping?
                </p>
              </div>
              <p className="text-gray-600">
                Yes, we offer international shipping to select countries. Please
                check our shipping policy for details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
