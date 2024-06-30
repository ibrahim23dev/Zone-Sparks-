import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Google from "../assets/google.png";

const GetStart = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 rounded-md shadow-md p-4 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            {/* header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-semibold text-center w-full">Let's start by creating your account</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* form section */}
            <div>
              <input
                type="text"
                placeholder="Your email address"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4"
              />
              <input
                type="password"
                placeholder="Choose a password"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4"
              />
              <div className="flex flex-col md:flex-row md:gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full md:w-1/2 rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4"
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" />
                  I agree to the terms of service and privacy policy
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" />
                  I agree to receive email marketing from Easy-Tax Ltd
                </label>
                <p className="text-xs text-gray-500">
                  We keep the emails to a minimum. Expect to receive relevant product updates, tax deadline reminders, and similar.
                </p>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-4 hover:scale-105 transition-transform duration-200">
                Start Now
              </button>
              <div className="flex items-center justify-center mb-4">
                <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition-colors duration-200">
                  <img className="w-5 h-5" src={Google} alt="Google" /> Sign in with Google
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already have an account? <a href="/login" className="text-blue-600">Log in here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetStart;
