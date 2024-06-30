import React from 'react';

const AccountantSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        <div className="flex-shrink-0 mr-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="path_to_image" alt="Ben" className="w-32 h-32 object-cover rounded-full" />
              <p className="mt-2 text-center">Ben, 6 years qualified</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="path_to_image" alt="Nikita" className="w-32 h-32 object-cover rounded-full" />
              <p className="mt-2 text-center">Nikita, 9 years in the industry</p>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-4">Who's my accountant?</h2>
          <p className="text-lg mb-2">
            Each accountant is vetted before they can join our superstar community. Most own their own practice, all have 5+ years industry experience.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>100% UK-based accounting community</li>
            <li>A hand-vetted group of ~85 practitioners</li>
            <li>Rated 4.8* out of 5 from 5k+ reviews</li>
            <li>Accredited by the major UK accounting bodies</li>
            <li>Regular quality audits to maintain a gold standard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountantSection;
