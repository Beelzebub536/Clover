import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./bubble.module.css";
import RotatingSlider from "./RotatingSlider";
import {
  ArrowRight,
  Rocket,
  Code,
  Server,
  Cloud,
  Clover,
  MoonStar,
  Cat,
  Facebook,
  Boxes,
  Database,
  DatabaseBackup,
  DatabaseZap,
  Linkedin,
  Github,
  Bitcoin,
  FilePieChart as FileChartColumn,
  Ghost,
  Sprout,
} from "lucide-react";

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const tileSize = 100; // Fixed tile size
  const text =
    "We craft cutting-edge digital solutions that empower businesses to thrive in the modern era.";
  const images = [
    "/public/image1.png",
    "/public/image1.png",
    "/public/image1.png",
    "/public/image1.png",
    "/public/image1.png",
    "/public/image1.png",
    ];

  // Update window dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate number of tiles needed based on screen size
  const cols = Math.ceil(dimensions.width / tileSize);
  const rows = Math.ceil(dimensions.height / tileSize);
  const totalTiles = cols * rows;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="grid w-full h-full"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            gap: "4px", // Padding between tiles
          }}
        >
          {Array.from({ length: totalTiles }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-emerald-500 rounded-lg cursor-pointer"
              initial={{ opacity: 0.1 }} // Start dim
              whileHover={{
                opacity: 1, // Fully visible on hover
                scale: 1.1, // Slightly scale up
                zIndex: 1, // Bring to front
                boxShadow: "0 0 20px 5px rgba(16, 185, 129, 0.6)", // Glow effect
                transition: { duration: 0.2 },
              }}
              whileTap={{
                opacity: 1, // Fully visible on tap
                scale: 1.1, // Slightly scale up
                zIndex: 1, // Bring to front
                boxShadow: "0 0 20px 5px rgba(16, 185, 129, 0.6)", // Glow effect
                transition: { duration: 0.2 },
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          Rocket,
          Code,
          Cloud,
          Clover,
          MoonStar,
          Cat,
          Boxes,
          DatabaseBackup,
          DatabaseZap,
          Facebook,
          Linkedin,
          Github,
          Bitcoin,
          FileChartColumn,
          Ghost,
          Sprout,
        ].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-500 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <Icon size={Math.random() * 20 + 40} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="pointer-events-none container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 mb-6"
            >
              Build the Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pointer-events-auto text-xl md:text-2xl text-gray-300 mb-8"
            >
              {text.split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pointer-events-auto flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              {[
                {
                  href: "#services",
                  text: "Explore Services",
                  icon: <ArrowRight size={18} />,
                },
                { href: "#contact", text: "Contact Us" },
              ].map(({ href, text, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  className="rounded-xl border-2 border-dashed border-black bg-emerald-400 bg-opacity-55 px-6 py-3 
                  font-semibold uppercase text-black transition-all duration-300 shadow-xl shadow-emerald-500
                  hover:translate-x-[-4px] hover:translate-y-[-4px] 
                  hover:rounded-md hover:shadow-[4px_4px_0px_black] 
                  active:translate-x-[0px] active:translate-y-[0px] 
                  active:rounded-2xl active:shadow-none"
                >
                  {text} {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className=" min-h-screen">
              <RotatingSlider images={images} />
            </div>

            {/* <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative z-10 border-2 border-emerald-500 shadow-emerald-500 rounded-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Digital Solutions"
                  className="rounded-xl w-full"
                />
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Rocket,
//   Code,
//   Cloud,
//   Clover,
//   MoonStar,
//   Cat,
//   Facebook,
//   Boxes,
//   DatabaseBackup,
//   DatabaseZap,
//   Linkedin,
//   Github,
//   Bitcoin,
//   FileChartColumn,
//   Ghost,
//   Sprout,
// } from "lucide-react";

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
//       {/* Animated Grid Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="grid grid-cols-12 gap-4 w-full h-full opacity-20">
//           {Array.from({ length: 144 }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="bg-emerald-500 rounded-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: [0, 0.2, 0] }}
//               transition={{
//                 duration: Math.random() * 4 + 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[
//           Rocket,
//           Code,
//           Cloud,
//           Clover,
//           MoonStar,
//           Cat,
//           Boxes,
//           DatabaseBackup,
//           DatabaseZap,
//           Facebook,
//           Linkedin,
//           Github,
//           Bitcoin,
//           FileChartColumn,
//           Ghost,
//           Sprout,
//         ].map((Icon, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-emerald-500 opacity-30"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, Math.random() * 100 - 50, 0],
//               x: [0, Math.random() * 100 - 50, 0],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 5,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >
//             <Icon size={Math.random() * 20 + 40} />
//           </motion.div>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center md:text-left"
//           >
//             <motion.h1
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 mb-6"
//             >
//               Build the Future
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-xl md:text-2xl text-gray-300 mb-8"
//             >
//               We craft cutting-edge digital solutions that empower businesses to
//               thrive in the modern era.
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             >
//               {[
//                 {
//                   href: "#services",
//                   text: "Explore Services",
//                   icon: <ArrowRight size={18} />,
//                 },
//                 { href: "#contact", text: "Contact Us" },
//               ].map(({ href, text, icon }, i) => (
//                 <motion.a
//                   key={i}
//                   href={href}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-3 bg-transparent border-2 border-emerald-400 text-white font-semibold rounded-lg shadow-2xl
//                 hover:shadow-emerald-500 hover:bg-emerald-400 hover:bg-opacity-25 transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   {text} {icon}
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Animated Illustration */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="hidden md:block"
//           >
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
//               <div className="relative z-10">
//                 <img
//                   src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//                   alt="Digital Solutions"
//                   className="rounded-xl shadow-2xl w-full"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
