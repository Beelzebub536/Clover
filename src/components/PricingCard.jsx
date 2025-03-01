import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingCard = ({ 
  tier, 
  price, 
  currency = '$', 
  period = 'hour', 
  features, 
  highlighted = false,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-lg overflow-hidden shadow-lg ${
        highlighted 
          ? 'border-2 border-emerald-500 transform scale-105 z-10' 
          : 'border border-gray-200'
      }`}
    >
      <div className={`p-6 ${highlighted ? 'bg-emerald-500 text-white' : 'bg-white text-gray-800'}`}>
        <h3 className="text-2xl font-bold text-center">{tier}</h3>
        <div className="flex justify-center items-baseline my-5">
          <span className="text-4xl font-extrabold">{currency}{price}</span>
          <span className="text-xl text-gray-300 ml-1">/{period}</span>
        </div>
      </div>
      
      <div className="p-6 bg-white space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-300 mt-6 ${
            highlighted 
              ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          Select Plan
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;