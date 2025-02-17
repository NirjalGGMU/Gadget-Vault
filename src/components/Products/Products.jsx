// import React from "react";
// import Heading from "../Shared/Heading";
// import ProductCard from "./ProductCard";

// // Images import
// import Img1 from "../../assets/product/p-1.jpg";
// import Img2 from "../../assets/product/p-2.jpg";
// import Img3 from "../../assets/product/p-3.jpg";
// import Img4 from "../../assets/product/p-4.jpg";
// import Img5 from "../../assets/product/p-5.jpg"; // New image

// // Products Data
// const ProductsData1 = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     price: "320",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed",
//     price: "220",
//   },
//   {
//     id: 5,
//     img: Img5,
//     title: "New Product",
//     price: "150",
//   },
// ];

// const ProductsData2 = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     price: "320",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed",
//     price: "220",
//   },
//   {
//     id: 5,
//     img: Img5,
//     title: "New Product",
//     price: "150",
//   },
// ];

// const Products = () => {
//   return (
//     <div>
//       <div className="container">
//         {/* Header section */}
//         <Heading title="Our Products" subtitle="Explore Our Products" />

//         {/* Body section */}
//         <ProductCard data={ProductsData1} />
//         <ProductCard data={ProductsData2} />
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-6.jpg";
import Img7 from "../../assets/product/p-9.jpg";
import Img8 from "../../assets/product/p-8.jpg";

// Combined Products Data with categories
const AllProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    category: "earphones and headphones",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    category: "watch",
    description: "Premium smartwatch with health tracking features"
  },
  {
    id: 3,
    img: Img3,
    title: "Wireless Elit",
    price: "320",
    category: "earphones and headphones",
    description: "Wireless earbuds with premium sound quality"
  },
  {
    id: 4,
    img: Img4,
    title: "Barcelona PS5 Joystick",
    price: "220",
    category: "joystick",
    description: "Custom designed PS5 controller with Barcelona theme"
  },
  {
    id: 5,
    img: Img5,
    title: "Gaming Laptop",
    price: "1200",
    category: "laptop",
    description: "High-performance gaming laptop with latest specs"
  },
  {
    id: 6,
    img: Img6,
    title: "Nintendo Switch",
    price: "420",
    category: "nintendo",
    description: "Nintendo Switch gaming console with controllers"
  },
  {
    id: 7,
    img: Img8,
    title: "Earphone",
    price: "320",
    category: "earphones and headphones",
    description: "Premium wired earphones for superior sound"
  },
  {
    id: 8,
    img: Img7,
    title: "Wireless Speaker",
    price: "220",
    category: "speaker",
    description: "Portable bluetooth speaker with rich sound"
  },
];

// Main Products Component
const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(AllProductsData);
  const searchQuery = searchParams.get('search');

  // Get unique categories from products
  const uniqueCategories = ["all", ...new Set(AllProductsData.map(product => product.category))];

  // Filter products based on search and category
  useEffect(() => {
    let result = AllProductsData;

    // Apply search filter if search query exists
    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    }

    // Apply category filter if not "all"
    if (selectedCategory !== "all") {
      result = result.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory]);

  // Split products into two groups for display
  const firstHalf = filteredProducts.slice(0, Math.ceil(filteredProducts.length / 2));
  const secondHalf = filteredProducts.slice(Math.ceil(filteredProducts.length / 2));

  // Categories for filter buttons with proper naming
  const categories = uniqueCategories.map(category => ({
    id: category,
    name: category === "all" 
      ? "All Products" 
      : category.split(" ").map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(" ")
  }));

  return (
    <div className="py-10">
      <div className="container">
        {/* Header section */}
        <Heading 
          title={searchQuery ? `Search Results for "${searchQuery}"` : "Our Products"} 
          subtitle={searchQuery 
            ? `${filteredProducts.length} products found` 
            : "Explore Our Products"
          } 
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Results Count */}
        {searchQuery && (
          <div className="text-center mb-8 text-gray-600 dark:text-gray-400">
            {filteredProducts.length === 0 
              ? `No products found matching "${searchQuery}"` 
              : `Showing ${filteredProducts.length} results for "${searchQuery}"`
            }
          </div>
        )}

        {/* Products Display */}
        <div className="space-y-10">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-10 text-gray-500 dark:text-gray-400">
              {searchQuery 
                ? `No products found matching "${searchQuery}"` 
                : "No products found in this category."
              }
            </div>
          ) : (
            <>
              {firstHalf.length > 0 && <ProductCard data={firstHalf} />}
              {secondHalf.length > 0 && <ProductCard data={secondHalf} />}
            </>
          )}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
          aria-label="Back to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Products;


// New Main One
// import React, { useState } from "react";
// import Heading from "../Shared/Heading";
// import ProductCard from "./ProductCard";

// // images import
// import Img1 from "../../assets/product/p-1.jpg";
// import Img2 from "../../assets/product/p-2.jpg";
// import Img3 from "../../assets/product/p-3.jpg";
// import Img4 from "../../assets/product/p-4.jpg";
// import Img5 from "../../assets/product/p-5.jpg";
// import Img6 from "../../assets/product/p-6.jpg";
// import Img7 from "../../assets/product/p-9.jpg";
// import Img8 from "../../assets/product/p-8.jpg";

// // Combined Products Data with categories
// const AllProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//     category: "earphones and headphones",
//     description: "High-quality wireless headphones with noise cancellation"
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//     category: "watch",
//     description: "Premium smartwatch with health tracking features"
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Wireless Elit",
//     price: "320",
//     category: "earphones and headphones",
//     description: "Wireless earbuds with premium sound quality"
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Barcelona PS5 Joystick",
//     price: "220",
//     category: "joystick",
//     description: "Custom designed PS5 controller with Barcelona theme"
//   },
//   {
//     id: 5,
//     img: Img5,
//     title: "Gaming Laptop",
//     price: "1200",
//     category: "laptop",
//     description: "High-performance gaming laptop with latest specs"
//   },
//   {
//     id: 6,
//     img: Img6,
//     title: "Nintendo Switch",
//     price: "420",
//     category: "nintendo",
//     description: "Nintendo Switch gaming console with controllers"
//   },
//   {
//     id: 7,
//     img: Img8,
//     title: "Earphone",
//     price: "320",
//     category: "earphones and headphones",
//     description: "Premium wired earphones for superior sound"
//   },
//   {
//     id: 8,
//     img: Img7,
//     title: "Wireless Speaker",
//     price: "220",
//     category: "speaker",
//     description: "Portable bluetooth speaker with rich sound"
//   },
// ];

// // Main Products Component
// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // Get unique categories from products
//   const uniqueCategories = ["all", ...new Set(AllProductsData.map(product => product.category))];

//   // Filter products based on category
//   const filteredProducts = selectedCategory === "all" 
//     ? AllProductsData 
//     : AllProductsData.filter(product => product.category === selectedCategory);

//   // Split products into two groups for display
//   const firstHalf = filteredProducts.slice(0, Math.ceil(filteredProducts.length / 2));
//   const secondHalf = filteredProducts.slice(Math.ceil(filteredProducts.length / 2));

//   // Categories for filter buttons with proper naming
//   const categories = uniqueCategories.map(category => ({
//     id: category,
//     name: category === "all" 
//       ? "All Products" 
//       : category.split(" ").map(word => 
//           word.charAt(0).toUpperCase() + word.slice(1)
//         ).join(" ")
//   }));

//   return (
//     <div className="py-10">
//       <div className="container">
//         {/* Header section */}
//         <Heading title="Our Products" subtitle="Explore Our Products" />

//         {/* Category Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-4 py-2 rounded-full transition-all duration-300 ${
//                 selectedCategory === category.id
//                   ? "bg-primary text-white"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Products Display */}
//         <div className="space-y-10">
//           {filteredProducts.length === 0 ? (
//             <div className="text-center py-10 text-gray-500">
//               No products found in this category.
//             </div>
//           ) : (
//             <>
//               {firstHalf.length > 0 && <ProductCard data={firstHalf} />}
//               {secondHalf.length > 0 && <ProductCard data={secondHalf} />}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


// import React, { useState } from "react"; // Importing React and useState
// import Heading from "../Shared/Heading"; // Importing Heading component
// import ProductCard from "./ProductCard"; // Importing ProductCard component

// // images import
// import Img1 from "../../assets/product/p-1.jpg";
// import Img2 from "../../assets/product/p-2.jpg";
// import Img3 from "../../assets/product/p-3.jpg";
// import Img4 from "../../assets/product/p-4.jpg";
// import Img5 from "../../assets/product/p-5.jpg";
// import Img6 from "../../assets/product/p-6.jpg";
// import Img7 from "../../assets/product/p-9.jpg";
// import Img8 from "../../assets/product/p-8.jpg";

// // Combined Products Data with categories
// const AllProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//     category: "earphones and headphones"
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//     category: "watch"
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Wireless Elit",
//     price: "320",
//     category: "earphones and headphones"
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Barcelona PS5 Joytsick",
//     price: "220",
//     category: "joytsick"
//   },
//   // Second set of products
//   {
//     id: 5,
//     img: Img5,
//     title: "Gaming Laptop",
//     price: "120",
//     category: "laptop"
//   },
//   {
//     id: 6,
//     img: Img6,
//     title: "Nintendo Switch",
//     price: "420",
//     category: "nintendo"
//   },
//   {
//     id: 7,
//     img: Img8,
//     title: "Earphone",
//     price: "320",
//     category: "earphones and headphones"
//   },
//   {
//     id: 8,
//     img: Img7,
//     title: "Wireless Speaker",
//     price: "220",
//     category: "speaker"
//   },
// ];

// // Main Products Component
// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // Filter products based on category
//   const filteredProducts = selectedCategory === "all" 
//     ? AllProductsData 
//     : AllProductsData.filter(product => product.category === selectedCategory);

//   // Split products into two groups for display
//   const firstHalf = filteredProducts.slice(0, Math.ceil(filteredProducts.length / 2));
//   const secondHalf = filteredProducts.slice(Math.ceil(filteredProducts.length / 2));

//   // Categories for filter buttons
//   const categories = [
//     { id: "all", name: "All Products" },
//     { id: "laptop", name: "Laptops" },
//     { id: "earphone", name: "Earphones" },
//     { id: "watch", name: "Watches" },
//     { id: "vr", name: "VR" },
//     { id: "speaker", name: "Speakers" }
//   ];

//   return (
//     <div className="py-10">
//       <div className="container">
//         {/* Header section */}
//         <Heading title="Our Products" subtitle="Explore Our Products" />

//         {/* Category Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-4 py-2 rounded-full transition-all duration-300 ${
//                 selectedCategory === category.id
//                   ? "bg-primary text-white"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Products Display */}
//         <div className="space-y-10">
//           {filteredProducts.length === 0 ? (
//             <div className="text-center py-10 text-gray-500">
//               No products found in this category.
//             </div>
//           ) : (
//             <>
//               {firstHalf.length > 0 && <ProductCard data={firstHalf} />}
//               {secondHalf.length > 0 && <ProductCard data={secondHalf} />}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;








// import React from "react";

// import Heading from "../Shared/Heading";
// import ProductCard from "./ProductCard";

// // images import
// import Img1 from "../../assets/product/p-1.jpg";
// import Img2 from "../../assets/product/p-2.jpg";
// import Img3 from "../../assets/product/p-3.jpg";
// import Img4 from "../../assets/product/p-4.jpg";

// const ProductsData1 = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     price: "320",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed",
//     price: "220",
//   },
// ];

// const ProductsData2 = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     price: "320",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed",
//     price: "220",
//   },
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



// import React from "react";

// import Heading from "../Shared/Heading";
// import ProductCard from "./ProductCard";

// // images import
// import Img1 from "../../assets/product/p-1.jpg";
// import Img2 from "../../assets/product/p-2.jpg";
// import Img3 from "../../assets/product/p-3.jpg";
// import Img4 from "../../assets/product/p-4.jpg";

// const ProductsData1 = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     price: "320",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed",
//     price: "220",
//   },
// ];

// const ProductsData2 = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Boat Headphone",
//     price: "120",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "Rocky Mountain",
//     price: "420",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     price: "320",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed",
//     price: "220",
//   },
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














 {/* Testimonial section */}
        {/* <div className="py-10 bg-gray-100 dark:bg-gray-900">
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
        </div> */}
        {/* End of Testimonial section */}