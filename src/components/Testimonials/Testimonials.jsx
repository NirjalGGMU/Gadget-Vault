import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Binod Adhikari",
    text: "Exceptional quality products and outstanding customer service. The prices are very competitive and delivery was faster than expected.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 2,
    name: "Sarita Tamang",
    text: "I've been a regular customer for months now. Their product range is impressive and the after-sales support is remarkable.",
    img: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    id: 3,
    name: "Rajesh Shrestha",
    text: "Best electronics store in town! The staff is knowledgeable and helped me find exactly what I needed. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 4,
    name: "Anjali Gurung",
    text: "Great experience shopping here. The prices are reasonable and the product quality is excellent. Will definitely come back!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    name: "Prakash Thapa",
    text: "Fantastic selection of products and very professional service. They really go above and beyond for customer satisfaction.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];


const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-primary dark:text-secondary font-bold">
            What Our Customers Say
          </p>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Testimonials
          </h2>
        </div>
        <div className="px-4">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mx-2">
                  {data.img && (
                    <img
                      className="rounded-full w-20 h-20 mx-auto mb-4"
                      src={data.img}
                      alt={data.name}
                    />
                  )}
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                    "{data.text}"
                  </p>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white text-center">
                    {data.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;