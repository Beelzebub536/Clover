import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
  twitter?: string;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  image,
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
      className="bg-white rounded-xl overflow-hidden shadow-lg group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-center space-x-3">
              <a href={`mailto:${email}`} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-emerald-500 transition-colors duration-300">
                <Mail className="h-5 w-5 text-white" />
              </a>
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-emerald-500 transition-colors duration-300">
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              )}
              {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-emerald-500 transition-colors duration-300">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-emerald-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;