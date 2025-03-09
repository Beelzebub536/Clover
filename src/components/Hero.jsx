import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Code, Server, Cloud } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 w-full h-full opacity-20">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-emerald-500 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Rocket, Code, Server, Cloud].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-400 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
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
            <Icon size={48} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
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
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              We craft cutting-edge digital solutions that empower businesses to thrive in the modern era.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-emerald-400 text-white font-semibold rounded-lg hover:bg-emerald-800/20 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Digital Solutions"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;