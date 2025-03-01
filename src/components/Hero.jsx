// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full"></div>
//         <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white rounded-full"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full"></div>
//       </div>
      
//       <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
//             >
//               Innovative IT Solutions for Your Business
//             </motion.h1>
            
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-lg md:text-xl mb-8 text-emerald-100"
//             >
//               Clover Soft Inc. provides cutting-edge technology services from Bangladesh to the world. From web development to 3D modeling, we deliver excellence in every project.
//             </motion.p>
            
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
//             >
//               <a 
//                 href="#services" 
//                 className="px-6 py-3 bg-white text-emerald-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 text-center"
//               >
//                 Our Services
//               </a>
//               <a 
//                 href="#contact" 
//                 className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-emerald-600 transition-colors duration-300 flex items-center justify-center"
//               >
//                 <span>Get in Touch</span>
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </a>
//             </motion.div>
//           </div>
          
//           <div className="md:w-1/2 md:pl-10">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="relative"
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
//                 alt="IT professionals working together" 
//                 className="rounded-lg shadow-2xl"
//               />
//               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="text-emerald-600 font-bold">10+ Years</div>
//                 <div className="text-gray-600 text-sm">Industry Experience</div>
//               </div>
//               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="text-emerald-600 font-bold">500+</div>
//                 <div className="text-gray-600 text-sm">Projects Completed</div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-500 opacity-10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 100, Math.random() * -100],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Innovative IT Solutions for Your Digital Journey
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8">
              From concept to creation, Clover Soft Inc. transforms your ideas into digital reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 transition-colors duration-300 text-center flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-emerald-400 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors duration-300 text-center"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Digital Solutions"
                className="rounded-xl shadow-2xl relative z-10 w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

