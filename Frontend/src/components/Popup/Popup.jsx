// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   return (
//     orderPopup && (
//       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//         <div className="w-[300px] p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white rounded-md">
//           {/* Header section */}
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Order Now</h1>
//             <button onClick={() => setOrderPopup(false)} className="cursor-pointer">
//               <IoCloseOutline size={24} />
//             </button>
//           </div>

//           {/* Form section */}
//           <div className="mt-6 space-y-3">
//             <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
//             <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
//             <input type="text" placeholder="Address" className="w-full p-2 border rounded-md" />
//             <div className="flex justify-center">
//               <button
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//                 onClick={() => {
//                   console.log("Order submitted");
//                   setOrderPopup(false);
//                 }}
//               >
//                 Order Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Popup;


import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
    <div>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Order Now</h1>
          <div>
            <IoCloseOutline
              onClick={() => setOrderPopup(false)}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>

            {/* Form secton */}
            <div className="mt-6">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="text" placeholder="Address" className="form-input" />
              <div className="flex justify-center">
                <Button
                  text="Order Now"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Popup;


// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// // Define a simple Button component if you don't have one already
// const Button = ({ text, bgColor, textColor, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`${bgColor} ${textColor} px-4 py-2 rounded-md`} // Added basic styling
//   >
//     {text}
//   </button>
// );

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   return (
//     // Only conditionally render the popup
//     orderPopup && (
//       <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//         <div className="w-[300px] p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white rounded-xl">
//           {/* Header Section */}
//           <div className="flex items-center justify-between">
//             <h1 className="text-lg font-semibold">Order Now</h1>
//             <div onClick={() => setOrderPopup(false)} className="cursor-pointer">
//               <IoCloseOutline className="text-2xl" /> {/* Simplified className */}
//             </div>
//           </div>

//           {/* Form section */}
//           <div className="mt-6 space-y-3"> {/* Added space-y-3 for spacing */}
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full p-2 border rounded-md"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 border rounded-md"
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               className="w-full p-2 border rounded-md"
//             />
//             <div className="flex justify-center mt-3"> {/* Added margin top */}
//               <Button
//                 text="Order Now"
//                 bgColor="bg-blue-500 hover:bg-blue-700" // More specific bg color
//                 textColor="text-white"
//                 onClick={() => {
//                   console.log("Order submitted");
//                   setOrderPopup(false);
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Popup;