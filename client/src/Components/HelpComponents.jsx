import React from 'react';
import CostComponent from './CostComponent';

const HelpComponent = () => {
  const people = [
    { name: "Person 1", imageUrl: "../assets/admin.jpg" },
    { name: "Person 2", imageUrl: "../assets/taxx.png" },
    { name: "Person 3", imageUrl: "../assets/taxx.png" },
    { name: "Person 4", imageUrl: "../assets/taxx.png" }
  ];

  return (
    <div className="max-w-7xl pb-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Who we can help</h2>
        <p className="mt-4 text-lg text-gray-500">We can help everybody that needs to file a tax return.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <ul className="text-left space-y-4">
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">First-time filers</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">Tax relief/refund claims</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">Self-employed</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">Freelancers & contractors</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">Investors (property, forex, crypto etc.)</span>
          </li>
        </ul>
        <ul className="text-left space-y-4">
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">Construction workers (CIS)</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">High earners (£150K+)</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">Landlords (inc. Airbnb hosts)</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">Expats</span>
          </li>
          <li className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2">Couriers, riders or drivers</span>
          </li>
                                                                                   </ul>
                                                                                            <div className="mt-10 flex justify-center space-x-4">
        {people.map((person) => (
          <div key={person.name} className="flex-shrink-0">
            <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt={person.name} />
          </div>
        ))}
      </div>
      </div>
      <CostComponent/>
    </div>
  );
};

export default HelpComponent;
