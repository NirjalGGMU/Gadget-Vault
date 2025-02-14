import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative w-12">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={theme === "dark" ? LightButton : DarkButton} // Directly use the correct image based on the theme
        alt={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"} // Set appropriate alt text
        className="w-12 cursor-pointer" // Removed unnecessary classes for opacity transition
      />
    </div>
  );
};

export default DarkMode;



// import React, { useEffect, useState } from "react";
// import LightButton from "../../assets/website/light-mode-button.png";
// import DarkButton from "../../assets/website/dark-mode-button.png";

// const DarkMode = () => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );

//   useEffect(() => {
//     const element = document.documentElement;
//     localStorage.setItem("theme", theme);

//     if (theme === "dark") {
//       element.classList.add("dark");
//       element.classList.remove("light");
//     } else {
//       element.classList.add("light");
//       element.classList.remove("dark");
//     }
//   }, [theme]);

//   return (
//     <div className="relative w-12">
//       <img
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         src={LightButton}
//         alt="Switch to Light Mode"
//         className={`w-12 cursor-pointer absolute top-0 right-0 ${
//           theme === "dark" ? "opacity-0" : "opacity-100"
//         } transition-opacity duration-300`}
//       />
//       <img
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         src={DarkButton}
//         alt="Switch to Dark Mode"
//         className={`w-12 cursor-pointer absolute top-0 right-0 ${
//           theme === "dark" ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-300`}
//       />
//     </div>
//   );
// };

// export default DarkMode;


// import React, { useEffect, useState } from "react";
// import LightButton from "../../assets/website/light-mode-button.png";
// import DarkButton from "../../assets/website/dark-mode-button.png";

// const DarkMode = () => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light" // Default to "light" if not set
//   );

//   useEffect(() => {
//     const element = document.documentElement; // Access inside useEffect
//     localStorage.setItem("theme", theme);

//     if (theme === "dark") {
//       element.classList.add("dark");
//       element.classList.remove("light"); // Explicitly remove "light"
//     } else {
//       element.classList.add("light"); // Add "light" for better control
//       element.classList.remove("dark");
//     }
//   }, [theme]); // Runs when `theme` changes

//   return (
//     <div className="relative">
//       <img
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         src={LightButton}
//         alt="Switch to Light Mode"
//         className={`w-12 cursor-pointer absolute right-0 z-10 ${
//           theme === "dark" ? "opacity-0" : "opacity-100"
//         } transition-all duration-300`}
//       />
//       <img
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         src={DarkButton}
//         alt="Switch to Dark Mode"
//         className={`w-12 cursor-pointer absolute right-0 z-10 ${
//           theme === "dark" ? "opacity-100" : "opacity-0"
//         } transition-all duration-300`}
//       />
//     </div>
//   );
// };

// export default DarkMode;


// import React from "react";
// import LightButton from "../../assets/website/light-mode-button.png";
// import DarkButton from "../../assets/website/dark-mode-button.png";

// const DarkMode = () => {
//   const [theme, setTheme] = React.useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   const element = document.documentElement; // access to html element

//   // set theme to localStorage and html element
//   React.useEffect(() => {
//     localStorage.setItem("theme", theme);
//     if (theme === "dark") {
//       element.classList.add("dark");  // Only add once
//       element.classList.add("dark");  // Only remove "dark"
//     } else {
//       element.classList.remove("light"); // Removing "light" is often unnecessary
//       element.classList.remove("dark");
//     }
//   }, [theme]); // Add theme as a dependency

//   return (
//     <div className="relative">
//       <img
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         src={LightButton}
//         alt="Switch to Light Mode"
//         className={`w-12 cursor-pointer absolute right-0 z-10 ${
//           theme === "dark" ? "opacity-0" : "opacity-100"
//         } transition-all duration-300`}
//       />
//       <img
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         src={DarkButton}
//         alt="Switch to Dark Mode"
//         className={`w-12 cursor-pointer absolute right-0 z-10 ${
//           theme === "dark" ? "opacity-100" : "opacity-0"
//         } transition-all duration-300`}
//       />
//     </div>
//   );
// }

// export default DarkMode;


// chatgpt code:

// import React from "react";
// import LightButton from "../../assets/website/light-mode-button.png";
// import DarkButton from "../../assets/website/dark-mode-button.png";

// const DarkMode = () => {
//   const [theme, setTheme] = React.useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   const element = document.documentElement;

//   React.useEffect(() => {
//     localStorage.setItem("theme", theme);
//     if (theme === "dark") {
//       element.classList.add("dark"); // Correct: Only add ONCE
//     } else {
//       element.classList.remove("dark"); // Correct: Only remove "dark"
//     }
//   }, [theme]);

//   return (
//     <div className="relative">
//       <img
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         src={LightButton}
//         alt="Switch to Light Mode"
//         className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${
//           theme === "dark" ? "opacity-0" : "opacity-100"
//         }`}
//       />
//       <img
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         src={DarkButton}
//         alt="Switch to Dark Mode"
//         className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${
//           theme === "dark" ? "opacity-100" : "opacity-0"
//         }`}
//       />
//     </div>
//   );
// };

// export default DarkMode;