import React from 'react';

const CostComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        <div className="flex-shrink-0 mr-6">
          <div className="bg-pink-200 p-10 rounded-lg relative">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">£169</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-black text-white py-1 px-4 rounded-full text-sm">all in</span>
          </div>
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-4">What's the cost?</h2>
          <p className="text-lg mb-2">We charge a one-off, flat fee of £169 per tax return.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>No monthly fees</li>
            <li>Fixed cost, no matter how complicated</li>
            <li>Price includes VAT</li>
            <li>No additional hidden costs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostComponent;
