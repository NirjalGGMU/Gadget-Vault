import React from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

export default function LoginPage() {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center duration-200">
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <form>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Login</h1>
            <p className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username:</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </p>
            <p className="mb-6">
              <label htmlFor="pass" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password:</label>
              <input 
                type="password" 
                id="pass" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </p>
            <button 
              type="button" 
              onClick={() => navigate('/signup')} 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 duration-200 mb-4"
            >
              Create Account?
            </button>
            <button 
              type="submit" 
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}



// // LoginPage.jsx
// import React from "react";
// import Navbar from "./Navbar";

// const LoginPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center duration-200">
//         <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
//             Login
//           </h2>
//           <form>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 duration-200"
//             >
//               Login
//             </button>
//           </form>
//           <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
//             Don't have an account?{" "}
//             <a href="/signup" className="text-blue-500 hover:underline">
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;



// // // LoginPage.jsx
// // import React from "react";
// // import Navbar from "./Navbar";

// // const LoginPage = () => {
// //   return (
// //     <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center duration-200">
// //       <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
// //         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
// //           Login
// //         </h2>
// //         <form>
// //           <div className="mb-4">
// //             <label
// //               htmlFor="email"
// //               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
// //             >
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
// //               placeholder="Enter your email"
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label
// //               htmlFor="password"
// //               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
// //             >
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
// //               placeholder="Enter your password"
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 duration-200"
// //           >
// //             Login
// //           </button>
// //         </form>
// //         <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
// //           Don't have an account?{" "}
// //           <a href="/signup" className="text-blue-500 hover:underline">
// //             Sign up
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;