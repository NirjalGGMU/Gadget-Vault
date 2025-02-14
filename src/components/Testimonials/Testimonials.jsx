// import React from "react";
// import Slider from "react-slick";

// const testimonialData = [
//   {
//     id: 1,
//     name: "Sushant Babu Prasai ",
//     text: "The best selling gadgets with good service and good price.",
//     // img: "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-1/470182568_1800070244138127_7659097703276802766_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=vMZhfhAkZ14Q7kNvgGV5MLK&_nc_oc=AdiH1z2ZOMANazrVGHhfwOfH0m74jYepBBW1D5WEovje_J5afomOjiw4G3J2FVuDWUE&_nc_zt=24&_nc_ht=scontent.fktm10-1.fna&_nc_gid=A5UynoLBy01b6-G8t_ZU0QW&oh=00_AYDBwL9Cb6YKULeysc_Ol0ILsPqGtt6_oNvHXP4nyFYzmA&oe=679B86A8",
//   },
//   {
//     id: 2,
//     name: "Nishal Khambu",
//     text: "Cheap and very good service with affordable price.",
//     // img: "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-1/472219058_1622458195816543_6859196844072996997_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=61abaNoc5WcQ7kNvgGUtXZt&_nc_oc=AdgnjLjdvbhIOV7dvkGjlWhEn_xc1XfdssreZVsAzNQqEgiYCqxnRfxA8PS1TDq8rwo&_nc_zt=24&_nc_ht=scontent.fktm10-1.fna&_nc_gid=AHpClBPbBlvd8oBGfoIxRi1&oh=00_AYApbBIEZLHC4fzr7NwfaftBImGrrqteaIculYSePFdSaA&oe=679B6BA7",
//   },
//   {
//     id: 3,
//     name: "Nishan Bista",
//     text: "Excellent customer service and timely responses.",
//     // img: "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-1/334281294_682301470250535_5002309847003242714_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=NrTg7wDwD9cQ7kNvgEjUGNL&_nc_oc=Adi28Ouk5V_bvFBKGDuOhEIWYxlpxAKf740gd1jSDQm376lhjEHmMeiRavH9vSA92v4&_nc_zt=24&_nc_ht=scontent.fktm10-1.fna&_nc_gid=AhASYkX1-BZF1I0kfvdoYjL&oh=00_AYB3S00Ntc-Q4zbbMNtyDP6JiKbxNWt3VPpbVs2KvAFsKA&oe=679CCE1B",
//   },
// ];

// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2, // Show 2 testimonials at a time
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-10 bg-gray-100 dark:bg-gray-900"> {/* Added background color */}
//       <div className="container mx-auto"> {/* Center the container */}
//         <div className="text-center mb-10"> {/* Reduced margin */}
//           <p className="text-sm text-primary dark:text-secondary font-bold"> {/* Improved styling */}
//             What Our Customers Say
//           </p>
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-white"> {/* Improved styling */}
//             Testimonials
//           </h2>
//         </div>
//         <Slider {...settings}>
//           {testimonialData.map((data) => (
//             <div key={data.id} className="px-4"> {/* Added padding for spacing */}
//               <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> {/* Improved styling */}
//                 {/* {data.img && ( // Conditionally render image
//                   <img
//                     className="rounded-full w-20 h-20 mx-auto mb-4"
//                     src={data.img}
//                     alt={data.name}
//                   />
//                 )} */}
//                 <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
//                   "{data.text}" {/* Added quotation marks */}
//                 </p>
//                 <h3 className="text-lg font-medium text-gray-800 dark:text-white text-center">
//                   {data.name}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;