import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ThreeDModel from '../components/ThreeDModel';
import ContactForm from '../components/ContactForm';
import { 
  Palette, 
  Code, 
  Headphones, 
  Database, 
  Search, 
  Share2, 
  Cube, 
  Laptop, 
  ArrowRight 
} from 'lucide-react';

const Home = () => {
  // Sample 3D model URL - replace with actual model in production
  const sampleModelUrl = "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/suzanne-low-poly/model.gltf";

  const services = [
    {
      icon: <Palette size={28} />,
      title: "Graphics Designing",
      description: "Professional graphic design services for branding, marketing materials, and digital assets."
    },
    {
      icon: <Cube size={28} />,
      title: "3D Modeling",
      description: "High-quality 3D models and animations for games, architecture, and product visualization."
    },
    {
      icon: <Code size={28} />,
      title: "Web Development",
      description: "Custom website development with responsive design and modern technologies."
    },
    {
      icon: <Laptop size={28} />,
      title: "Software Development",
      description: "Bespoke software solutions tailored to your business needs and requirements."
    },
    {
      icon: <Headphones size={28} />,
      title: "Audio Editing",
      description: "Professional audio editing services for podcasts, music, and multimedia projects."
    },
    {
      icon: <Database size={28} />,
      title: "Data Entry",
      description: "Accurate and efficient data entry services for businesses of all sizes."
    },
    {
      icon: <Search size={28} />,
      title: "SEO",
      description: "Search engine optimization to improve your website's visibility and ranking."
    },
    {
      icon: <Share2 size={28} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence."
    }
  ];

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="text-center mt-12">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* 3D Model Demo Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Interactive 3D Models</h2>
              <p className="text-xl text-blue-100 mb-8">
                Experience our 3D modeling capabilities firsthand. Interact with this sample model by rotating, zooming, and panning to explore every detail.
              </p>
              <p className="text-blue-200 mb-8">
                Our team of skilled 3D artists can create custom models for your specific needs, whether it's for product visualization, gaming, architecture, or marketing.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 transition-colors duration-300"
              >
                Request a Custom 3D Model
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-800/50 rounded-xl p-4"
            >
              <ThreeDModel modelPath={sampleModelUrl} backgroundColor="#1e3a8a" />
              <p className="text-center text-sm text-blue-200 mt-4">
                Click and drag to rotate. Scroll to zoom. Shift + drag to pan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-emerald-200">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-emerald-200">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-emerald-200">Countries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-emerald-200">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Have a project in mind? Contact us today to discuss how we can help bring your ideas to life.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;