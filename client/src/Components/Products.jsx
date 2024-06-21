import React from "react";
import Img1 from "../assets/man.avif";
import Img2 from "../assets/macbookpro.jpg";
import Img3 from "../assets/iphone.avif";
import Img4 from "../assets/phone3.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Man Grocery",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "MacBook Pro",
    rating: 4.5,
    color: "silver",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "iphone 15 pro max",
    rating: 4.7,
    color: "silver",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Owmen Grocery",
    rating: 4.4,
    color: "white",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Macbook",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-serif">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold font-serif">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 font-serif">
            Experience luxury with our sleek, high-performance smartphone—your perfect companion for seamless connectivity and exceptional functionality
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;