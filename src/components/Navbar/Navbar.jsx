import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Popup from "../Popup/Popup";
import DarkMode from "./DarkMode";

const MenuLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // Get cart items count from localStorage
  const getCartItemsCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Clear search input after search
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search on enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
            Gadget Vault
          </Link>

          {/* Menu Items */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <Link 
                    to={data.link} 
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    {data.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section (Search, Cart, Dark Mode, Login) */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  className="w-[200px] px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 duration-200" />
                </button>
              </form>
            </div>

            {/* Cart Icon - Opens Popup */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                {getCartItemsCount()}
              </div>
            </button>

            {/* Dark Mode Button */}
            <DarkMode />

            {/* Login Button */}
            <Link 
              to="/login" 
              className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Popup Component */}
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default Navbar;


// Main One
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
// import { IoMdSearch } from "react-icons/io";
// import Popup from "../Popup/Popup";
// import DarkMode from "./DarkMode";

// const MenuLinks = [
//   { text: "Home", link: "/home" },
//   { text: "About", link: "/about" },
//   { text: "Services", link: "/services" },
//   { text: "Contact", link: "/contact" },
// ];

// const DropdownLinks = [
//   { name: "Category 1", link: "/category/1" },
//   { name: "Category 2", link: "/category/2" },
//   { name: "Category 3", link: "/category/3" },
// ];

// const Navbar = () => {
//   const [orderPopup, setOrderPopup] = useState(false);

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
//             Gadget Vault
//           </Link>

//           {/* Menu Items */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-4">
//               {MenuLinks.map((data, index) => (
//                 <li key={index}>
//                   <Link to={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
//                     {data.text}
//                   </Link>
//                 </li>
//               ))}

//               {/* Dropdown */}
//               <li className="relative cursor-pointer group">
//                 <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
//                   More <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                 </a>
//                 <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
//                   <ul className="space-y-2">
//                     {DropdownLinks.map((data, index) => (
//                       <li key={index}>
//                         <Link to={data.link} className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
//                           {data.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section (Search, Cart, Dark Mode, Login) */}
//           <div className="flex items-center gap-4">
//             {/* Search Bar */}
//             <div className="relative group hidden sm:block">
//               <input type="text" placeholder="Search" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//               <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
//             </div>

//             {/* Cart Icon - Opens Popup */}
//             <button className="relative p-3" onClick={handleOrderPopup}>
//               <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 4
//               </div>
//             </button>

//             Dark Mode Button
//             <DarkMode /> 

//             {/* Login Button */}
//             <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-200">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Popup Component */}
//       <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
// import { IoMdSearch } from "react-icons/io";
// import Popup from "../Popup/Popup";

// const MenuLinks = [
//   { text: "Home", link: "/home" },
//   { text: "About", link: "/about" },
//   { text: "Services", link: "/services" },
//   { text: "Contact", link: "/contact" },
// ];

// const DropdownLinks = [
//   { name: "Category 1", link: "/category/1" },
//   { name: "Category 2", link: "/category/2" },
//   { name: "Category 3", link: "/category/3" },
// ];

// const Navbar = () => {
//   const [orderPopup, setOrderPopup] = useState(false); // State for popup

//   const handleOrderPopup = () => {
//     setOrderPopup(!orderPopup);
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
//             Gadget Vault
//           </Link>

//           {/* Menu Items */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-4">
//               {MenuLinks.map((data, index) => (
//                 <li key={index}>
//                   <Link to={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
//                     {data.text}
//                   </Link>
//                 </li>
//               ))}

//               {/* Dropdown */}
//               <li className="relative cursor-pointer group">
//                 <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
//                   More <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                 </a>
//                 <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
//                   <ul className="space-y-2">
//                     {DropdownLinks.map((data, index) => (
//                       <li key={index}>
//                         <Link to={data.link} className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
//                           {data.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section (Search, Cart, Dark Mode, Login) */}
//           <div className="flex items-center gap-4">
//             {/* Search Bar */}
//             <div className="relative group hidden sm:block">
//               <input type="text" placeholder="Search" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
//               <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
//             </div>

//             {/* Cart Icon - Opens Popup */}
//             <button className="relative p-3" onClick={handleOrderPopup}>
//               <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 4
//               </div>
//             </button>

//             {/* Dark Mode Button (Placeholder) */}
//             <button>Dark Mode</button>

//             {/* Login Button */}
//             <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-200">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Popup Component */}
//       <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
//     </div>
//   );
// };

// export default Navbar;




// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { FaCaretDown, FaCartShopping } from "react-icons/fa6"; // Import icons
// import { IoMdSearch } from "react-icons/io"; // Import search icon
// import Popup from "./Popup"; // Import the Popup component
// import LightButton from "../../assets/website/light-mode-button.png"; // Import light mode image
// import DarkButton from "../../assets/website/dark-mode-button.png"; // Import dark mode image

// const MenuLinks = [
//   { text: "Home", link: "/home" },
//   { text: "About", link: "/about" },
//   { text: "Services", link: "/services" },
//   { text: "Contact", link: "/contact" },
// ];

// // const DropdownLinks = [
// //   { name: "Link 1", link: "/link1" },
// //   { name: "Link 2", link: "/link2" },
// //   { name: "Link 3", link: "/link3" },
// // ];

// const DropdownLinks = [
//   { name: "Category 1", link: "/category/1" }, // Or "/category1", "/categories/1", etc.
//   { name: "Category 2", link: "/category/2" }, // Or "/category2", "/categories/2", etc.
//   { name: "Category 3", link: "/category/3" }, // If you have a 3rd category
//   // ... more categories as needed
// ];

// const Navbar = () => {
//   const handleCartClick = () => {
//     // Logic to handle the cart button click (e.g., open cart modal)
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo and Links section */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/"
//               className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
//             >
//               Gadget Vault
//             </Link>
//           </div>
//           {/* Menu Items */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-4">
//               {MenuLinks.map((data, index) => (
//                 <li key={index}>
//                   <Link
//                     to={data.link}
//                     className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
//                   >
//                     {data.text}
//                   </Link>
//                 </li>
//               ))}
//               {/* Dropdown */}
//               <li className="relative cursor-pointer group">
//                 <a
//                   href="#"
//                   className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
//                 >
//                   More <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                 </a>
//                 {/* Dropdown Links */}
//                 <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
//                   <ul className="space-y-2">
//                     {DropdownLinks.map((data, index) => (
//                       <li key={index}>
//                         <Link
//                           to={data.link}
//                           className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
//                         >
//                           {data.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           {/* Navbar Right section */}
//           <div className="flex items-center gap-4">
//             {/* Search Bar section */}
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="search-bar px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Added basic styling
//               />
//               <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
//             </div>

//             {/* Order-button section */}
//             <button className="relative p-3" onClick={handleCartClick}>
//               <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 4
//               </div>
//             </button>

//             {/* Dark Mode section */}
//             <div>
//               <button>Dark Mode</button> {/* Example placeholder */}
//             </div>

//             {/* Login Button/Link */}
//             <div>
//               <Link
//                 to="/login" // Use Link for navigation
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-200"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const MenuLinks = [
//   { text: "Home", link: "/" },
//   { text: "About", link: "/about" },
//   { text: "Services", link: "/services" },
//   { text: "Contact", link: "/contact" },
// ];

// const DropdownLinks = [
//   { name: "Link 1", link: "#" },
//   { name: "Link 2", link: "#" },
//   { name: "Link 3", link: "#" },
// ];

// const Navbar = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo and Links section */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/"
//               className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
//             >
//               Gadget Vault
//             </Link>
//           </div>
//           {/* Menu Items */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-4">
//               {MenuLinks.map((data, index) => (
//                 <li key={index}>
//                   <Link
//                     to={data.link}
//                     className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
//                   >
//                     {data.text}
//                   </Link>
//                 </li>
//               ))}
//               {/* Dropdown */}
//               <li className="relative cursor-pointer group">
//                 <a
//                   href="#"
//                   className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
//                 >
//                   {/* <span>
//                     <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                   </span> */}
//                 </a>
//                 {/* Dropdown Links */}
//                 <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
//                   <ul className="space-y-2">
//                     {DropdownLinks.map((data, index) => (
//                       <li key={index}>
//                         <a
//                           className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
//                           href={data.link}
//                         >
//                           {data.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           {/* Navbar Right section */}
//           <div className="flex items-center gap-4">
//             {/* Search Bar section */}
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="search-bar px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Added basic styling
//               />
//               {/* <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" /> */}
//             </div>

//             {/* Order-button section */}
//             <button className="relative p-3">
//               {/* <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" /> */}
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 4
//               </div>
//             </button>

//             {/* Dark Mode section */}
//             <div>
//               {/* Dark mode toggle content goes here */}
//               <button>Dark Mode</button> {/* Example placeholder */}
//             </div>

//             {/* Login Button/Link */}
//             <div>
//               <Link
//                 to="/login" // Use Link for navigation
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-200"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// // import { IoMdSearch } from "react-icons/io";
// // import { FaCartShopping, FaCaretDown } from "react-icons/fa";

// const MenuLinks = [
//   { text: "Home", link: "/" },
//   { text: "About", link: "/about" },
//   { text: "Services", link: "/services" },
//   { text: "Contact" },
// ];

// const DropdownLinks = [
//   { name: "Link 1", link: "#" },
//   { name: "Link 2", link: "#" },
//   { name: "Link 3", link: "#" },
// ];

// const Navbar = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo and Links section */}
//           <div className="flex items-center gap-4">
//             <a
//               href="#"
//               className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
//             >
//               Eshop
//             </a>
//           </div>
//           {/* Menu Items */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-4">
//               {MenuLinks.map((data, index) => (
//                 <li key={index}>
//                   <a
//                     href={data.link}
//                     className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
//                   >
//                     {data.text}
//                   </a>
//                 </li>
//               ))}
//               {/* Dropdown */}
//               <li className="relative cursor-pointer group">
//                 <a
//                   href="#"
//                   className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
//                 >
//                   {/* <span>
//                     <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                   </span> */}
//                 </a>
//                 {/* Dropdown Links */}
//                 <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
//                   <ul className="space-y-2">
//                     {DropdownLinks.map((data, index) => (
//                       <li key={index}>
//                         <a
//                           className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
//                           href={data.link}
//                         >
//                           {data.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           {/* Navbar Right section */}
//           <div className="flex items-center gap-4">
//             {/* Search Bar section */}
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="search-bar px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Added basic styling
//               />
//               {/* <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" /> */}
//             </div>

//             {/* Order-button section */}
//             <button className="relative p-3">
//               {/* <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" /> */}
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 4
//               </div>
//             </button>

//             {/* Dark Mode section */}
//             <div>
//               {/* Dark mode toggle content goes here */}
//               <button>Dark Mode</button> {/* Example placeholder */}
//             </div>

//             {/* Login Button/Link */}
//             <div>
//               <a
//                 href="/login" // Replace with your login page route
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-200"
//               >
//                 Login
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// // import { IoMdSearch } from "react-icons/io";
// // import { FaCartShopping, FaCaretDown } from "react-icons/fa";

// const MenuLinks = [
//   { text: "Home", link: "/" },
//   { text: "About", link: "/about" },
//   { text: "Services", link: "/services" },
//   { text: "Contact" },
// ];

// const DropdownLinks = [
//   { name: "Link 1", link: "#" },
//   { name: "Link 2", link: "#" },
//   { name: "Link 3", link: "#" },
// ];

// const Navbar = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo and Links section */}
//           <div className="flex items-center gap-4">
//             <a
//               href="#"
//               className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
//             >
//               Eshop
//             </a>
//           </div>
//           {/* Menu Items */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-4">
//               {MenuLinks.map((data, index) => (
//                 <li key={index}>
//                   <a
//                     href={data.link}
//                     className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
//                   >
//                     {data.text}
//                   </a>
//                 </li>
//               ))}
//               {/* Dropdown */}
//               <li className="relative cursor-pointer group">
//                 <a
//                   href="#"
//                   className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
//                 >
//                   {/* <span>
//                     <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                   </span> */}
//                 </a>
//                 {/* Dropdown Links */}
//                 <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
//                   <ul className="space-y-2">
//                     {DropdownLinks.map((data, index) => (
//                       <li key={index}>
//                         <a
//                           className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
//                           href={data.link}
//                         >
//                           {data.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           {/* Navbar Right section */}
//           <div className="flex items-center gap-4">
//             {/* Search Bar section */}
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="search-bar px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Added basic styling
//               />
//               {/* <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" /> */}
//             </div>

//             {/* Order-button section */}
//             <button className="relative p-3">
//               {/* <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" /> */}
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 4
//               </div>
//             </button>

//             {/* Dark Mode section */}
//             <div>
//               {/* Dark mode toggle content goes here */}
//               <button>Dark Mode</button> {/* Example placeholder */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping, FaCaretDown } from "react-icons/fa";

// const MenuLinks = [
//   { text: "Home", link: "/" },
//   { text: "About", link: "/about" },
//   { text: "Services", link: "/services" },
//   { text: "Contact" },
// ];

// const DropdownLinks = [
//   { name: "Link 1", link: "#" },
//   { name: "Link 2", link: "#" },
//   { name: "Link 3", link: "#" },
// ];

// const Navbar = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo and Links section */}
//           <div className="flex items-center gap-4">
//             <a
//               href="#"
//               className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
//             >
//               Eshop
//             </a>
//           </div>
//           {/* Menu Items */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-4">
//               {MenuLinks.map((data, index) => (
//                 <li key={index}>
//                   <a
//                     href={data.link}
//                     className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
//                   >
//                     {data.text}
//                   </a>
//                 </li>
//               ))}
//               {/* Dropdown */}
//               <li className="relative cursor-pointer group">
//                 <a
//                   href="#"
//                   className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
//                 >
                
//                   <span>
//                     <FaCaretDown className="group-hover:rotate-180 duration-300" />
//                   </span>
//                 </a>
//                 {/* Dropdown Links */}
//                 <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
//                   <ul className="space-y-2">
//                     {DropdownLinks.map((data, index) => (
//                       <li key={index}>
//                         <a
//                           className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
//                           href={data.link}
//                         >
//                           {data.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           {/* Navbar Right section */}
//           <div className="flex items-center gap-4"> {/* Changed to items-center */}
//             {/* Search Bar section */}
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="search-bar px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" // Added basic styling
//               />
//               <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
//             </div>

//             {/* Order-button section */}
//             <button className="relative p-3">
//               <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 4
//               </div>
//             </button>

//             {/* Dark Mode section */}
//             <div>
//               {/* Dark mode toggle content goes here */}
//               <button>Dark Mode</button> {/* Example placeholder */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React from "react";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa";

// const MenuLinks = [
//   // Example MenuLinks data
//   { text: "Home", link: "/" },
//   { text: "About", link: "/about" },
//   { text: "Services", link: "/services" },
//   { text: "Contact" },
// ];

// const Navbar = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* Logo and Links section */}
//           <div className="flex items-center gap-4">
//             <a
//               href="#"
//               className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
//             >
//               Eshop
//             </a>
//           </div>
//           {/* Menu Items */}
//           <div className="hidden lg:block">
//             <ul className="flex items-center gap-4">
//               {MenuLinks.map((data, index) => (
//                 <li key={index}>
//                   <a
//                     href={data.link}
//                     className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
//                   >
//                     {data.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* Navbar Right section */}
//           <div className="flex justify-between items-center gap-4">
//             {/* Search Bar section */}
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="search-bar"
//               />
//               <IoMdSearch
//                 className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
//               />
//             </div>

//             {/* Order-button section */}
//             <button className="relative p-3">
//               <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
//               <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
//                 4
//               </div>
//             </button>

//             {/* Dark Mode section */}
//             <div>
//               {/* Dark mode toggle content goes here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


