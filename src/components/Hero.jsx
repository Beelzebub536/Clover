import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./bubble.module.css";
import RotatingSlider from "./RotatingSlider";
import CustomButton from "./Button";
import {
  ArrowRight,
  Rocket,
  Code,
  Cloud,
  Clover,
  MoonStar,
  Cat,
  Facebook,
  Boxes,
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
            gap: "6px", // Padding between tiles
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
                transition: { duration: 0.1 },
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
      <div className=" pointer-events-none container mx-auto px-4 z-10">
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
                  className="border-2 border-solid rounded-lg border-black bg-emerald-400 bg-opacity-55 px-6 py-3 
                  font-semibold uppercase text-black transition-all duration-300 shadow-xl shadow-emerald-500
                  hover:translate-x-[-4px] hover:translate-y-[-4px] 
                  hover:rounded-md hover:shadow-[4px_4px_0px_black] 
                  active:translate-x-[0px] active:translate-y-[0px] 
                  active:rounded-2xl active:shadow-none"
                  // style={{
                  //   clipPath:
                  //     "polygon(0% 0%, 90% 0%, 100% %, 100% 100%, 0% 100%)",
                  // }}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
