import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-emerald-600">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/"
                className="px-6 py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center"
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-md font-medium hover:bg-emerald-50 transition-colors duration-300 flex items-center justify-center"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                <span>Go Back</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;