import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 255, 255, 0.3)' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative bg-gray-900 rounded-2xl p-8 overflow-hidden border-2 border-transparent hover:border-[#00FFFF] transition-all duration-300 group"
      style={{
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal Grid Lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="rgba(0, 255, 255, 0.2)"
              strokeWidth="0.5"
            />
          ))}
          {/* Vertical Grid Lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="rgba(0, 255, 255, 0.2)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Holographic Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.2)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100"
      />

      {/* Floating Icon Container */}
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        className="flex items-center justify-center w-20 h-20 bg-gray-800 rounded-2xl mb-6 mx-auto shadow-lg relative"
      >
        {/* Neon Glow Around Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 border-2 border-[#00FFFF] rounded-2xl opacity-0 group-hover:opacity-100"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.7), 0 0 40px rgba(0, 255, 255, 0.5)',
          }}
        />
        <div className="text-[#00FFFF] text-3xl">{icon}</div>
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-2xl font-bold text-center mb-4 text-white"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="text-gray-300 text-center"
      >
        {description}
      </motion.p>

      {/* Holographic Line Effect */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 h-1 bg-[#00FFFF]"
        style={{
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)',
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;