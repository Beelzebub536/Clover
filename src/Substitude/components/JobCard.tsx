import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ExternalLink } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  formLink: string;
  delay?: number;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  type,
  description,
  requirements,
  formLink,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-emerald-200 transition-colors duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1 text-emerald-500" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-1 text-emerald-500" />
            <span className="text-sm">{type}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Briefcase className="h-4 w-4 mr-1 text-emerald-500" />
            <span className="text-sm">Clover Soft Inc.</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {requirements.map((req, index) => (
              <li key={index} className="text-gray-600 text-sm">{req}</li>
            ))}
          </ul>
        </div>
        
        <a 
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-300"
        >
          Apply Now <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default JobCard;