import React from 'react';

const IncludedComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-4">What's included?</h2>
          <p className="text-lg mb-2">Get professional help from an accredited accountant.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>A UK based accredited accountant works on your taxes</li>
            <li>Professional help to claim eligible expenses and tax reliefs</li>
            <li>Full calculation of your tax bill for you to review and approve</li>
            <li>Your tax return filed to HMRC</li>
            <li>Support to save on your tax bill</li>
            <li>Current or previous tax year filing</li>
            <li>A quick and easy crypto tax report for your transactions</li>
          </ul>
        </div>
        <div className="flex-shrink-0 ml-6 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="/path/to/accredited-accountant.jpg" alt="Accredited Accountant" className="w-24 h-24 mx-auto rounded-full"/>
            <p className="mt-4 font-semibold">ACCREDITED ACCOUNTANT</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-purple-200 w-24 h-24 mx-auto rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold">X</span>
            </div>
            <p className="mt-4 font-semibold">100,000+ TAX RETURNS FILED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncludedComponent;
