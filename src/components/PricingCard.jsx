import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingCard = ({
  tier,
  price,
  currency = "$",
  period = "hour",
  features,
  delay = 0,
}) => {
  const isGold = tier === "Gold";
  const isSilver = tier === "Silver";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: isGold ? 1.05 : isSilver ? 1.03 : 1.01,
        y: isGold ? -15 : isSilver ? -10 : -5,
      }}
      transition={{ 
        duration: 0.5, 
        delay,
        hover: { duration: 0.3 }
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={`relative h-full rounded-xl shadow-lg transition-all duration-300 ${
        isGold
          ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white"
          : isSilver
          ? "bg-gradient-to-br from-gray-50 to-white border-2 border-emerald-100"
          : "bg-gray-50 border border-gray-200"
      } ${isGold ? "shadow-2xl shadow-emerald-200/50" : "shadow-md"}`}
    >
      {isGold && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 200, opacity: 0.4 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      )}

      <div className="p-8">
        <h3
          className={`text-3xl font-bold text-center mb-6 ${
            isGold ? "text-white" : "text-gray-800"
          }`}
        >
          {tier}
        </h3>

        <div
          className={`flex justify-center items-baseline mb-8 ${
            isGold ? "text-emerald-100" : "text-gray-600"
          }`}
        >
          <span className="text-5xl font-extrabold mr-2">
            {currency}
            {price}
          </span>
          <span className="text-lg">/{period}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index + delay }}
              className="flex items-start"
            >
              <Check
                className={`h-6 w-6 flex-shrink-0 mr-3 ${
                  isGold ? "text-emerald-100" : "text-emerald-600"
                }`}
              />
              <span
                className={`text-lg ${
                  isGold ? "text-emerald-50" : "text-gray-700"
                }`}
              >
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        <button
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
            isGold
              ? "bg-white text-emerald-600 hover:bg-emerald-50 hover:shadow-lg"
              : isSilver
              ? "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-md"
              : "bg-white text-gray-800 border-2 border-gray-200 hover:border-emerald-200 hover:bg-gray-50"
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;