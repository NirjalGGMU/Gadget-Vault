import React, { useState } from "react";
import Button from "../Shared/Button";
import { toast } from 'react-toastify';

const ProductCard = ({ data }) => {
  const handleAddToCart = (product) => {
    try {
      // Get existing cart items from localStorage
      const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Check if product already exists in cart
      const existingProduct = existingCartItems.find(item => item.id === product.id);
      
      let updatedCart;
      if (existingProduct) {
        // If product exists, update quantity
        updatedCart = existingCartItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add it with quantity 1
        updatedCart = [...existingCartItems, { ...product, quantity: 1 }];
      }
      
      // Save back to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      // Show success notification
      toast.success('Product added to cart!', {
        position: "bottom-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error('Failed to add product to cart', {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div className="group" key={data.id}>
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  onClick={() => handleAddToCart(data)}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;



// import React from "react";
// import Button from "../Shared/Button";

// import Img1 from "../../assets/product/p-1.jpg"; // Importing image 1
// import Img2 from "../../assets/product/p-2.jpg"; // Importing image 2
// import Img3 from "../../assets/product/p-3.jpg"; // Importing image 3
// import Img4 from "../../assets/product/p-4.jpg"; // Importing image 4

// const ProductCard = ({ data }) => {
//   // Check if 'data' is an array before using .map()
//   if (!Array.isArray(data)) {
//     return <div>No products available</div>; // Handle non-array case
//   }

//   return (
//     <div className="mb-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
//         {/* Card section */}
//         {data.map((item) => (
//           <div
//             className="group"
//             key={item.id}
//           >
//             <div className="relative">
//               <img
//                 src={item.img}
//                 alt=""
//                 className="h-[180px] w-[260px] object-cover rounded-md"
//               />
//               {/* Hover button */}
//               <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
//                 <Button
//                   text={"Add to cart"}
//                   bgColor={"bg-primary"}
//                   textColor={"text-white"}
//                 />
//               </div>
//             </div>
//             <div className="leading-7">
//               <h2 className="font-semibold">{item.title}</h2>
//               <h2 className="font-bold">${item.price}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
