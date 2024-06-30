import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        id: 1,
        name: "Stephanie Howsam",
        date: "2 days ago",
        text: "I've had the same accountant assigned 3 years in a row, that has given me some confid...",
        rating: 5
    },
    {
        id: 2,
        name: "Dean Butler",
        date: "2 days ago",
        text: "Website is very easy to navigate and provide the required information. Jordan was exc...",
        rating: 5
    },
    {
        id: 3,
        name: "M Allen",
        date: "3 days ago",
        text: "Speed of service was very good. They asked all the right questions in order to correc...",
        rating: 5
    },
    {
        id: 4,
        name: "customer",
        date: "3 days ago",
        text: "Highly recommend, I've had trouble with previous accountants being incompetent but th...",
        rating: 5
    }
];

const ReviewCard = ({ review }) => {
    return (
        <div className="p-6 bg-slate-200 shadow-lg rounded-lg text-center mx-4">
            <div className="mb-4">
                {[...Array(review.rating)].map((star, index) => (
                    <span key={index} className="text-green-500">⭐</span>
                ))}
            </div>
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{review.date}</p>
            <p className="text-gray-700">{review.text}</p>
        </div>
    );
};

const ReviewSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-6xl mx-auto py-12">
            <Slider {...settings}>
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </Slider>
            <div className="text-center mt-8">
                <p className="text-gray-600">Rated 4.8 / 5 based on 5,148 reviews. Showing our latest reviews.</p>
                <p className="text-green-500 font-semibold">Trustpilot</p>
            </div>
        </div>
    );
};

export default ReviewSlider;
