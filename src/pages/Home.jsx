import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Box, Globe, Headphones, Database, Search, MessageCircle, BarChart } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ThreeJSModel from '../components/ThreeJSModel';


const Home = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-emerald-600" />,
      title: 'Graphics Designing',
      description: 'Creative and professional designs that capture your brand essence and message.',
    },
    {
      icon: <Box className="w-8 h-8 text-emerald-600" />,
      title: '3D Modeling',
      description: 'Stunning 3D models and visualizations that bring your ideas to life.',
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.',
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      title: 'Software Development',
      description: 'Tailored software solutions to streamline your business processes.',
    },
    {
      icon: <Headphones className="w-8 h-8 text-emerald-600" />,
      title: 'Audio Editing',
      description: 'Professional audio editing services for podcasts, music, and more.',
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-600" />,
      title: 'Data Entry',
      description: 'Accurate and efficient data entry services for all your business needs.',
    },
    {
      icon: <Search className="w-8 h-8 text-emerald-600" />,
      title: 'SEO',
      description: 'Boost your online visibility and drive more traffic to your website.',
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
      title: 'Social Media Promotion',
      description: 'Strategic social media campaigns to grow your audience and engagement.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-emerald-600" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to help your business thrive online.',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We offer a wide range of IT services to help your business grow and succeed in the digital world.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* 3D Model Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              >
                Interactive 3D Models
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-8"
              >
                Experience our 3D modeling capabilities firsthand. Interact with this demo model by rotating, zooming, and panning to explore all angles.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-8"
              >
                Our team of skilled 3D artists can create detailed models for various purposes including product visualization, architectural rendering, gaming assets, and more.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors duration-300"
              >
                Request a Demo
              </motion.button>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-100 p-4 rounded-lg"
              >
                <ThreeJSModel modelType="simple" />
                <p className="text-center text-gray-500 mt-4">
                  Click and drag to rotate. Scroll to zoom.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-emerald-200">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-200">Team Members</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-emerald-200">Years Experience</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-emerald-200">Happy Clients</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 mb-10"
            >
              Let's discuss how Clover Soft Inc. can help you achieve your business goals with our innovative IT solutions.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="px-8 py-4 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors duration-300 text-lg"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;