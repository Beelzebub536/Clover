import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;