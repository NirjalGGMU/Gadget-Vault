// import React from "react";
// import Heading from "../Shared/Heading";
// import ProductCard from "./ProductCard";

// // images import
// import Img1 from "../../assets/product/p-1.jpg";
// import Img2 from "../../assets/product/p-2.jpg";
// import Img3 from "../../assets/product/p-3.jpg";
// import Img4 from "../../assets/product/p-4.jpg";
// import Img5 from "../../assets/product/p-5.jpg";
// import Img6 from "../../assets/product/p-9.jpg";
// import Img7 from "../../assets/product/p-7.jpg";

// const ProductsData1 = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//     // aosDelay: "0",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//     // aosDelay: "200",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     price: "320",
//     // aosDelay: "400",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed", // Note the trailing space here, if it is intentional
//     price: "220",
//     // aosDelay: "600",
//   },
// ];

//   const ProductsData2 = [
//     {
//       id: 1,
//       img: Img1,
//       title: "Boat Headphone",
//       price: "120",
//       // aosDelay: "0",
//     },
//     {
//       id: 2,
//       img: Img2,
//       title: "Rocky Mountain",
//       price: "420",
//       // aosDelay: "200",
//     },
//     {
//       id: 3,
//       img: Img3,
//       title: "Goggles",
//       price: "320",
//       // aosDelay: "400",
//     },
//     {
//       id: 4,
//       img: Img4,
//       title: "Printed", // Note the trailing space here, if it is intentional
//       price: "220",
//       // aosDelay: "600",
//     },
// ];   

// const Products = () => {
//   return (
//     <div>
//       <div className="container">
//         {/* Header section */}
//         <Heading title="Our Products" subtitle={"Explore Our Products"} />

//         {/* Body section */}
//         <ProductCard data={ProductsData1} />
//         <ProductCard data={ProductsData2} />
//       </div>
//     </div>
//   );
// };

// export default Products;

import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData1 = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />

        {/* Body section */}
        <ProductCard data={ProductsData1} />
        <ProductCard data={ProductsData2} />

        {/* Testimonial section */}
        <div className="py-10 bg-gray-100 dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Gadget Vaults Testimonials
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                See what our satisfied customers are saying about their
                Gadget Vaults experience.
              </p>
            </div>
            <div className="py-6">
              <div className="flex justify-center space-x-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
                  <img
                    className="rounded-full w-20 h-20 mb-4"
                    src={Img1} // Use any relevant image for the testimonial
                    alt="Testimonial 1"
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                    "The best selling gadgets with good service and good price."
                  </p>
                  <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                    Sushant Babu Prasai
                  </h3>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
                  <img
                    className="rounded-full w-20 h-20 mb-4"
                    src={Img2} // Use any relevant image for the testimonial
                    alt="Testimonial 2"
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                    "Cheap and very good service with affordable gadget prices."
                  </p>
                  <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                    Nishal Khambu
                  </h3>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
                  <img
                    className="rounded-full w-20 h-20 mb-4"
                    src={Img3} // Use any relevant image for the testimonial
                    alt="Testimonial 3"
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                    "Excellent customer service and timely responses."
                  </p>
                  <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                    Nishan Bista
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Testimonial section */}
      </div>
    </div>
  );
};

export default Products;
