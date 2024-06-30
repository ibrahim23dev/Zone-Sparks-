import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../assets/taxx.png";
import Image2 from "../assets/taxxx.png";
import Image3 from "../assets/Tax3.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Stress-free tax returns. £169, all in",
    description:
      "Self Assessment doesn’t need to be painful.Simple, fast, all online Sorted by an accredited accountant Filed in as little as 48 hours",
  },
  {
    id: 2,
    img: Image2,
    title: "Stress-free tax returns. £169, all in",
    description:
      "Unleash productivity and creativity with our powerful, ultra-portable laptop—crafted for seamless performance and stunning visuals on-the-go.",
  },
  {
    id: 3,
    img: Image3,
    title: "Stress-free tax returns. £169, all in",
    description:
      "Get up to 70% off on all products! Don't miss out on these incredible savings. Shop now and save bi!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[1000px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="justify-center items-center text-center">
       <div className=" z-50 flex items-center justify-center">
        <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-96 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-center w-full">Let's get started</h1>
          </div>
          {/* Form Section */}
          <div>
            <input
              type="text"
              placeholder="Your email address"
              className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-4"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-6"
                />
                <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-4 py-2 mb-6"
            />
            
            <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-6 hover:scale-105 transition-transform duration-200">
              Start now
            </button>
          </div>
        </div>
      </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
