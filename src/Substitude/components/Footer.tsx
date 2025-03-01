import React from 'react';
import { Link } from 'react-router-dom';
import { Clover, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Clover className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Clover Soft Inc.</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing innovative IT solutions from Bangladesh to the world. Excellence in every pixel, line of code, and digital strategy.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-emerald-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Our Team</Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-emerald-500 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Link to="/services">Graphics Designing</Link>
              </li>
              <li className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Link to="/services">3D Modeling</Link>
              </li>
              <li className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Link to="/services">Web Development</Link>
              </li>
              <li className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Link to="/services">Software Development</Link>
              </li>
              <li className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <Link to="/services">Digital Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-emerald-500 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Tech Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+880 1234 567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">info@cloversoft.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Clover Soft Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;