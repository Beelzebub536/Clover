import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingCardProps {
  tier: 'Bronze' | 'Silver' | 'Gold';
  price: string;
  features: string[];
  recommended?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  tier, 
  price, 
  features, 
  recommended = false,
  delay = 0
}) => {
  const tierColors = {
    Bronze: 'from-amber-700 to-amber-500',
    Silver: 'from-gray-500 to-gray-300',
    Gold: 'from-yellow-600 to-yellow-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-xl overflow-hidden shadow-lg ${recommended ? 'ring-4 ring-emerald-500 transform scale-105' : ''}`}
    >
      {recommended && (
        <div className="bg-emerald-500 text-white text-center py-2 font-semibold">
          Recommended
        </div>
      )}
      <div className={`bg-gradient-to-r ${tierColors[tier]} p-6 text-white`}>
        <h3 className="text-2xl font-bold mb-1">{tier}</h3>
        <div className="text-3xl font-bold">{price}</div>
        <p className="text-sm opacity-80">per hour</p>
      </div>
      <div className="p-6 bg-white">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
          recommended 
            ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}>
          Select Plan
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;