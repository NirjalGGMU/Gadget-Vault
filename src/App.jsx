// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Hero from "./components/Hero/Hero.jsx";
// import LoginPage from "./components/Navbar/LoginPage.jsx";
// import SignupPage from "./components/Navbar/SignupPage.jsx";
// import DarkMode from "./components/Navbar/DarkMode.jsx";
// import Category from "./components/Category/Category";
// import Category2 from "./components/Category/Category2";
// import Partners from "./components/Partners/Partners.jsx";
// import Products from "./components/Products/Products";
// import Footer from "./components/Footer/Footer.jsx";
// import Popup from "./components/Popup/Popup.jsx";

// const App = () => {
//     const [orderPopup, setOrderPopup] = useState(false);

//     const handleOrderPopup = () => {
//         setOrderPopup(!orderPopup);
//     };

//     return (
//         <BrowserRouter>
//             <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
//                 <Navbar handleOrderPopup={handleOrderPopup} />
//                 <Hero handleOrderPopup={handleOrderPopup} />

//                 <Routes>
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/signup" element={<SignupPage />} />
//                     <Route path="/" element={<Products />} /> {/* Example route */}
//                     <Route path="/category" element={<Category />} />
//                     <Route path="/category2" element={<Category2 />} />
//                     {/* Add other routes as needed */}
//                 </Routes>

//                 <DarkMode />
//                 <Category />
//                 <Category2 />
//                 <Products />
//                 <Partners />
//                 <Footer />
//                 <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
//             </div>
//         </BrowserRouter>
//     );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import LoginPage from "./components/Navbar/LoginPage.jsx";
import SignupPage from "./components/Navbar/SignupPage.jsx";
import DarkMode from "./components/Navbar/DarkMode.jsx";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Partners from "./components/Partners/Partners.jsx";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Hero handleOrderPopup={handleOrderPopup} />

            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/" element={<Products />} />
                <Route path="/category" element={<Category />} />
                <Route path="/category2" element={<Category2 />} />
                {/* Add other routes as needed */}
            </Routes>

            <DarkMode />
            <Category />
            <Category2 />
            <Products />
            <Partners />
            <Footer />
            <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
        </div>
    );
};

export default App;





// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Category from "./components/Category/Category";
// import Category2 from "./components/Category/Category2";
// // import Banner from "./components/Banner/Banner";
// import Partners from "./components/Partners/Partners.jsx";
// import headphone from "./assets/hero/headphone.jpg" // Correct import path
// import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
// import Products from "./components/Products/Products";
// import Footer from "./components/Footer/Footer.jsx";
// import Popup from "./components/Popup/Popup.jsx";
// import Testimonials from "./components/Testimonials/Testimonials.jsx";

// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// // const BannerData = {
// //     discount: "30% OFF",
// //     title: "Fine Smile",
// //     date: "10 Jan to 28 Jan",
// //     image: headphone, // Now using the correctly imported image
// //     title2: "Air Solo Bass",
// //     title3: "Winter Sale",
// //     title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
// //     bgColor: "#f42c37",
// // };

// // const BannerData2 = {
// //     discount: "30% OFF",
// //     title: "Happy Hours",
// //     date: "14 Jan to 28 Jan",
// //     image: smartwatch2,
// //     title2: "Smart Solo",
// //     title3: "Winter Sale",
// //     title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
// //     bgColor: "#2dcc6f",
// // };

// const App = () => {
//     const [orderPopup, setOrderPopup] = React.useState(false);

//     const handleOrderPopup = () => {
//         setOrderPopup(!orderPopup);
//     };

//     // React.useEffect(() => {
//     //     AOS.init({
//     //         duration: 800,
//     //         easing: "ease-in-sine",
//     //         delay: 100,
//     //         offset: 100,
//     //     });
//     //     AOS.refresh();
//     // }, []);

//     return (
//         <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
//             <Navbar handleOrderPopup={handleOrderPopup} />
//             <Hero handleOrderPopup={handleOrderPopup} />
//             <Category />
//             <Category2 />
//             {/* <Banner data={BannerData} /> */}
//             <Products />
//             {/* <Banner data={BannerData2} /> */}
//             <Partners />
//             <Footer />
//             <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
//             <Testimonials/>
//         </div>
//     );
// };

// export default App;
