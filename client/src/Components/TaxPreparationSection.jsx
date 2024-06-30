import React from 'react';
import Man1 from '../assets/admin.jpg'
import Subscribe from './Subscribe';
import HelpComponent from './HelpComponents';
import IncludedComponent from './IncludedComponent';
import AccountantSection from './CostSection';
const TaxPreparationSection = () => {
  return (
    <>
       <section>
       <div className="flex flex-col items-center justify-center h-screen pt-96 mb-auto">
      
      <h1 className='font-bold text-[40px]'>How it works</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-[60px] font-bold">1</h1>
            <h2 className="text-xl mt-2">Answer a few simple questions</h2>
            <p className="text-gray-600 mt-2 text-center">
              And we mean a few. After a couple of minutes of answering questions online we’ll have everything we need to start preparing your tax return.
            </p>
            <div className="bg-yellow-100 p-4 mt-4 rounded-lg">
              <p className="text-yellow-700">How did you earn your income?</p>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <div className="relative">
              <img src={Man1}alt="Accountant" className="rounded-full w-24 h-24" />
              <div className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">✓</div>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">Amy will be your accountant</h2>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-[60px] font-bold">2</h1>
            <h2 className="text-xl mt-2">Get paired with a tax return accountant</h2>
            <p className="text-gray-600 mt-2 text-center">
              That’s right, you’ll be matched with a real accredited accountant who is best suited to prepare your return. Plus, they’re on hand for questions whenever you need.
            </p>
          </div>
         
          <div className="flex flex-col items-center mt-8 pt-5">
            <h1 className="text-[60px] font-bold">3</h1>
            <h2 className="text-xl mt-2">We file your Self Assessment for you</h2>
            <p className="text-gray-600 mt-2 text-center">
              Once you’ve signed off your return, your Easy-Tax Ltd accountant will submit your return with HMRC for you.
            </p>
            <div className="mt-4">
              <img src={Man1} alt="Notification" className="w-36 rounded-full" />
            </div>
        </div>
        </div>
      </div>
        </div>
        <div className='pt-[300px]'>
          <Subscribe/>
        </div>
        <div>
          <HelpComponent/>
        </div>
        <div>
          <IncludedComponent/>
        </div>
        <div>
          <AccountantSection/>
        </div>
        <div> <Subscribe/></div>
  </section>
    </>
   
   
  );
};

export default TaxPreparationSection;
