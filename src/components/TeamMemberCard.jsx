import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ 
  name, 
  role, 
  bio, 
  imageUrl, 
  email, 
  linkedin, 
  twitter,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-emerald-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{bio}</p>
        
        <div className="flex space-x-3">
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors duration-300"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
          
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors duration-300"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={18} />
            </a>
          )}
          
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors duration-300"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;