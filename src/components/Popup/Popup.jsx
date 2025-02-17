import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from 'react-toastify';

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.address) {
      toast.error("Please fill in all fields");
      return;
    }

    // Get cart items
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Create order object
    const order = {
      ...formData,
      items: cartItems,
      orderDate: new Date().toISOString(),
      orderStatus: "pending",
      orderId: `ORD-${Math.random().toString(36).substr(2, 9)}`
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

    // Clear cart
    localStorage.setItem('cart', JSON.stringify([]));

    // Show success message
    toast.success("Order placed successfully!");

    // Close popup
    handleOrderPopup();

    // Reset form
    setFormData({
      name: "",
      email: "",
      address: ""
    });
  };

  if (!orderPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[350px] p-6 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold">Order Now</h1>
          <IoCloseOutline
            onClick={handleOrderPopup}
            className="text-2xl cursor-pointer hover:text-red-500 transition"
          />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address Input */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
            />
          </div>

          {/* Order Summary */}
          <div className="mb-3">
            <h2 className="text-sm font-medium mb-2">Order Summary</h2>
            <div className="text-sm bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
              {JSON.parse(localStorage.getItem('cart'))?.length || 0} items in cart
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;






// Main One
// import { IoCloseOutline } from "react-icons/io5"; // Importing the close icon from react-icons

// const Popup = ({ orderPopup, handleOrderPopup }) => { // Popup component with orderPopup and handleOrderPopup props

//   if (!orderPopup) return null; // Ensure the component is only rendered when orderPopup is true

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
//       {/* Outer div with fixed positioning, backdrop blur, and centering */}

//       <div className="w-[350px] p-6 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
//         {/* Inner div containing the popup content with styling */}

//         {/* Header Section */}
//         <div className="flex items-center justify-between mb-4">
//           {/* Header section with a title and close button */}

//           <h1 className="text-lg font-semibold">Order Now</h1>
//           {/* Title for the popup */}

//           <IoCloseOutline
//             onClick={handleOrderPopup}
//             className="text-2xl cursor-pointer hover:text-red-500 transition"
//           />
//           {/* Close button, triggers handleOrderPopup when clicked */}
//         </div>

//         {/* Form Section */}
//         <form onSubmit={(e) => e.preventDefault()}>
//           {/* Form with onSubmit preventing default action */}

//           {/* Name Input */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Name</label>
//             {/* Label for name input */}

//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {/* Input field for name */}
//           </div>

//           {/* Email Input */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Email</label>
//             {/* Label for email input */}

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {/* Input field for email */}
//           </div>

//           {/* Address Input */}
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Address</label>
//             {/* Label for address input */}

//             <textarea
//               placeholder="Enter your address"
//               className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="2"
//             />
//             {/* Textarea for address */}
//           </div>

//           {/* Submit Button */}
//           <button
//             className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//             onClick={handleOrderPopup}
//           >
//             Submit
//           </button>
//           {/* Submit button */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Popup;





// import { IoCloseOutline } from "react-icons/io5";

// const Popup = ({ orderPopup, handleOrderPopup }) => {
//   return (
//     <>
//       {orderPopup && (
//         <div>
//           <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//             <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
//               {/* Header section */}
//               <div className="flex items-center justify-between">
//                 <h1>Order Now</h1>
//                 <div>
//                   <IoCloseOutline
//                     onClick={handleOrderPopup}
//                     className="text-2xl cursor-pointer"
//                   />
//                 </div>
//               </div>
//               {/* Form section */}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;


// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   return (
//     <div>
//       {orderPopup && (
//         <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//           <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-lg font-semibold">Order Now</h1>
//               <button onClick={() => setOrderPopup(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
//                 <IoCloseOutline className="text-2xl" />
//               </button>
//             </div>

//             <div>
//               <form onSubmit={(e) => e.preventDefault()}>
//                 <div className="mb-4">
//                   <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name:</label>
//                   <input type="text" id="name" className="w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email:</label>
//                   <input type="email" id="email" className="w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white" />
//                 </div>
//                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Popup;


// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   return (
//     <div>
//       {orderPopup && ( // Conditionally render the popup 
//         <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//           <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
//             {/* Header section */}
//             <div className="flex justify-between items-center mb-4"> {/* Added flex and margin-bottom */}
//               <h1 className="text-lg font-semibold">Order Now</h1> {/* Added styling */}
//               <button onClick={() => setOrderPopup(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"> {/* Added button styling and onClick */}
//                 <IoCloseOutline className="text-2xl" />
//               </button>
//             </div>

//             {/* Form section */}
//             <div>
//               {/* Your form elements go here */}
//               <form>
//                 {/* Example form fields */}
//                 <div className="mb-4">
//                   <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name:</label>
//                   <input type="text" id="name" className="w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white" />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email:</label>
//                   <input type="email" id="email" className="w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white" />
//                 </div>
//                 {/* Add more form fields as needed */}
//                 <button type="submit" className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Popup;


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


// import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

// const Popup = ({ orderPopup, setOrderPopup }) => {
//   return (
//     <>
//     <div>
//       {orderPopup && (
//         <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//           <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
//         {/* Header Section */}
//         <div className="flex items-center justify-between">
//           <h1 className="text-lg font-semibold">Order Now</h1>
//           <div>
//             <IoCloseOutline
//               onClick={() => setOrderPopup(false)}
//               className="text-2xl cursor-pointer"
//             />
//           </div>
//         </div>

//             {/* Form secton */}
//             <div className="mt-6">
//               <input type="text" placeholder="Name" className="form-input" />
//               <input type="email" placeholder="Email" className="form-input" />
//               <input type="text" placeholder="Address" className="form-input" />
//               <div className="flex justify-center">
//                 <Button
//                   text="Order Now"
//                   bgColor={"bg-primary"}
//                   textColor={"text-white"}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default Popup;


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



