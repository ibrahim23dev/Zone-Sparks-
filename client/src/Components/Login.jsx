import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Google from "../assets/google.png";

const Login = () => {
  return (
    <>
      <div className="popup fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
        <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-center w-full">Log in to Easy-Tax Ltd</h1>
          </div>
          {/* Form Section */}
          <div>
            <input
              type="text"
              placeholder="Your email address"
              className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4"
            />
            <input
              type="password"
              placeholder="Your password"
              className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-6"
            />
            <div className="flex items-center mb-6">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Keep me logged in</label>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-6 hover:scale-105 transition-transform duration-200">
              Log in
            </button>
            <div className="flex items-center justify-center mb-6">
              <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition-colors duration-200">
                <img className="w-5 h-5" src={Google} alt="Google" /> Sign in with Google
              </button>
            </div>
            <div className="text-center">
              <p>
                Don't have an account? <a href="/signup" className="text-blue-600">Sign up here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
