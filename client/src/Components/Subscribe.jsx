import React from "react";
import Banner from "../assets/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "35%",
  width: "85%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className=" dark:bg-gray-800 text-white flex items-center justify-center"
      style={{ height: "100vh" }}
    >
      <div
        className="flex items-center justify-center p-4"
        style={BannerImg}
      >
        <div className="max-w-md w-full mx-auto">
          <div className="space-y-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Let’s get your Self Assessment sorted today
            </h2>
            <p>Taxes as they should be done</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-6 hover:scale-105 transition-transform duration-200">
              Start now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
