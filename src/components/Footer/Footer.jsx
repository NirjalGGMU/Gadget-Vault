import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Gadget Vault
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <p className="text-gray-500 mt-4">
              Made by GGMU_Nirjal
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4"> {/* Important Links Column */}
              <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4"> {/* Quick Links Column */}
              <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* Company Address */}
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
            <div>
              <div className="flex items-center gap-3">
                <FaLocationArrow aria-label="Location" />
                <p>Manamaiju, Kathmandu</p> {/* Updated Address */}
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt aria-label="Phone" />
                <p>+97 9741685411</p>
              </div>
            </div>

            {/* social links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-primary duration-300" aria-label="Instagram" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-primary duration-200" aria-label="Facebook" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-primary duration-200" aria-label="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


// import React from 'react';
// import { FaLocationArrow, FaMobileAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

// const FooterLinks = [
//   {
//     title: "Home",
//     link: "/#",
//   },
//   {
//     title: "About",
//     link: "/#about",
//   },
//   {
//     title: "Contact",
//     link: "/#contact",
//   },
//   {
//     title: "Blog",
//     link: "/#blog",
//   },
// ];

// const Footer = () => {
//   return (
//     <div className="dark:bg-gray-950">
//       <div className="container">
//         <div className="grid md:grid-cols-3 pb-20 pt-5">
//           {/* Company Details */}
//           <div className="py-8 px-4">
//             <a
//               href="#"
//               className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
//             >
//               Eshop
//             </a>
//             <p className="text-gray-600 lg:pr-24 pt-3">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
//               alias cum
//             </p>
//             <p className="text-gray-500 mt-4">
//               Made with ❤️ by The Coding Journey
//             </p>
//             <a
//               href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-primary/90 py-2 px-4 mt-4 text-sm rounded-full text-white"
//             >
//               Visit our YouTube Channel
//             </a>
//           </div>
//           {/* After this right of footer links, then second col links, then company address and finally , social links  */}

//           {/* Footer Links */}
//           <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10"></div>
//           <div className="py-8 px-4">
//             <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
//             <ul className="space-y-3">
//     {FooterLinks.map((data, index) => (
//       <li key={index}>
//         <a
//           href={data.link}
//           className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
//         >
//           {data.title}
//         </a>
//       </li>
//     ))}
//   </ul>
//           </div>

// {/* second col links */}
// <div className="py-8 px-4">
//   <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
//   <ul className="space-y-3">
//     {FooterLinks.map((data, index) => (
//       <li key={index}>
//         <a
//           href={data.link}
//           className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
//         >
//           {data.title}
//         </a>
//       </li>
//     ))}
//   </ul>
// </div>

//           {/* Company Address */}
//           <div className="py-8 px-4 col-span-2 sm:col-auto">
//             <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
//             <div>
//               <div className="flex items-center gap-3">
//                 <FaLocationArrow aria-label="Location" />
//                 <p>Noida, Uttar Pradesh</p>
//               </div>
//               <div className="flex items-center gap-3 mt-6">
//                 <FaMobileAlt aria-label="Phone" />
//                 <p>+91 1234567890</p>
//               </div>
//             </div>

//              {/* social links */}
//             <div className="flex items-center gap-3 mt-6">
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram className="text-3xl hover:text-primary duration-300" aria-label="Instagram" />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaFacebook className="text-3xl hover:text-primary duration-200" aria-label="Facebook" />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin className="text-3xl hover:text-primary duration-200" aria-label="LinkedIn" />
//               </a>
//             </div>
//           </div>

         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

