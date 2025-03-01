import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { 
  Palette, 
  Code, 
  Headphones, 
  Database, 
  Search, 
  Share2, 
  Cube, 
  Laptop 
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState('all');

  const services = [
    {
      id: 'graphics',
      icon: <Palette size={40} />,
      title: "Graphics Designing",
      description: "Professional graphic design services for branding, marketing materials, and digital assets.",
      longDescription: "Our team of skilled graphic designers creates visually stunning designs that communicate your brand message effectively. From logos and brand identity to marketing materials and digital assets, we deliver high-quality designs that make your brand stand out.",
      pricing: [
        { tier: 'Bronze', price: '$40/hour', features: ['Basic design concepts', 'Standard delivery time (5-7 days)', '2 revision rounds', 'Basic file formats'] },
        { tier: 'Silver', price: '$60/hour', features: ['Advanced design concepts', 'Faster delivery (3-5 days)', '5 revision rounds', 'All standard file formats'] },
        { tier: 'Gold', price: '$80/hour', features: ['Premium design concepts', 'Express delivery (1-2 days)', 'Unlimited revisions', 'All file formats + source files', 'Dedicated designer'] }
      ]
    },
    {
      id: '3d',
      icon: <Cube size={40} />,
      title: "3D Modeling",
      description: "High-quality 3D models and animations for games, architecture, and product visualization.",
      longDescription: "Our 3D modeling experts create detailed and realistic 3D models for various applications. Whether you need architectural visualizations, product renderings, or 3D assets for games, we deliver high-quality models that bring your ideas to life in three dimensions.",
      pricing: [
        { tier: 'Bronze', price: '$70/hour', features: ['Basic 3D modeling', 'Standard texturing', 'Basic lighting setup', 'Standard resolution renders'] },
        { tier: 'Silver', price: '$100/hour', features: ['Advanced 3D modeling', 'High-quality texturing', 'Professional lighting setup', 'High-resolution renders'] },
        { tier: 'Gold', price: '$140/hour', features: ['Complex 3D modeling', 'Photorealistic texturing', 'Advanced lighting and effects', '4K resolution renders', 'Animation options'] }
      ]
    },
    {
      id: 'web',
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Custom website development with responsive design and modern technologies.",
      longDescription: "We build custom websites that are not only visually appealing but also functional and user-friendly. Our web development team uses the latest technologies and best practices to create responsive, fast-loading, and secure websites that help you achieve your business goals.",
      pricing: [
        { tier: 'Bronze', price: '$50/hour', features: ['Basic responsive website', 'Standard CMS integration', 'Basic SEO setup', '30 days support'] },
        { tier: 'Silver', price: '$75/hour', features: ['Advanced responsive website', 'Custom CMS development', 'Comprehensive SEO setup', '90 days support'] },
        { tier: 'Gold', price: '$100/hour', features: ['Premium website with custom features', 'Advanced CMS with custom modules', 'Advanced SEO & analytics', '1 year support & maintenance', 'Performance optimization'] }
      ]
    },
    {
      id: 'software',
      icon: <Laptop size={40} />,
      title: "Software Development",
      description: "Bespoke software solutions tailored to your business needs and requirements.",
      longDescription: "We develop custom software solutions that address your specific business challenges. From desktop applications to enterprise systems, our software development team creates reliable, scalable, and secure software that streamlines your operations and enhances productivity.",
      pricing: [
        { tier: 'Bronze', price: '$60/hour', features: ['Basic software development', 'Standard features', 'Basic testing', '3 months support'] },
        { tier: 'Silver', price: '$90/hour', features: ['Advanced software development', 'Custom features', 'Comprehensive testing', '6 months support'] },
        { tier: 'Gold', price: '$120/hour', features: ['Enterprise-grade development', 'Complex custom features', 'Rigorous testing & QA', '1 year support & updates', 'Documentation & training'] }
      ]
    },
    {
      id: 'audio',
      icon: <Headphones size={40} />,
      title: "Audio Editing",
      description: "Professional audio editing services for podcasts, music, and multimedia projects.",
      longDescription: "Our audio editing services enhance the quality of your audio content. Whether you need podcast editing, music production, or sound design for videos, our audio experts ensure your audio sounds professional and engaging to your audience.",
      pricing: [
        { tier: 'Bronze', price: '$30/hour', features: ['Basic audio cleaning', 'Standard editing', 'Basic mixing', 'MP3 delivery'] },
        { tier: 'Silver', price: '$45/hour', features: ['Advanced audio cleaning', 'Detailed editing', 'Professional mixing', 'Multiple format delivery'] },
        { tier: 'Gold', price: '$60/hour', features: ['Premium audio restoration', 'Comprehensive editing', 'Professional mixing & mastering', 'All formats + source files', 'Sound design options'] }
      ]
    },
    {
      id: 'data',
      icon: <Database size={40} />,
      title: "Data Entry",
      description: "Accurate and efficient data entry services for businesses of all sizes.",
      longDescription: "Our data entry services help you manage your information efficiently. We handle various types of data entry tasks with accuracy and attention to detail, allowing you to focus on your core business activities while ensuring your data is organized and accessible.",
      pricing: [
        { tier: 'Bronze', price: '$20/hour', features: ['Basic data entry', 'Standard accuracy', 'Standard delivery time', 'Basic formatting'] },
        { tier: 'Silver', price: '$30/hour', features: ['Advanced data entry', 'High accuracy', 'Faster delivery time', 'Custom formatting'] },
        { tier: 'Gold', price: '$40/hour', features: ['Premium data entry', '99.9% accuracy guarantee', 'Express delivery', 'Advanced formatting & validation', 'Data analysis options'] }
      ]
    },
    {
      id: 'seo',
      icon: <Search size={40} />,
      title: "SEO",
      description: "Search engine optimization to improve your website's visibility and ranking.",
      longDescription: "Our SEO services help improve your website's visibility in search engine results. We implement proven strategies to optimize your website's content, structure, and performance, driving more organic traffic and increasing your online presence.",
      pricing: [
        { tier: 'Bronze', price: '$40/hour', features: ['Basic keyword research', 'On-page SEO', 'Monthly reporting', 'Basic recommendations'] },
        { tier: 'Silver', price: '$60/hour', features: ['Comprehensive keyword research', 'On-page & technical SEO', 'Bi-weekly reporting', 'Content optimization'] },
        { tier: 'Gold', price: '$80/hour', features: ['Advanced keyword & competitor analysis', 'Complete SEO audit & implementation', 'Weekly reporting', 'Content strategy & creation', 'Link building'] }
      ]
    },
    {
      id: 'marketing',
      icon: <Share2 size={40} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      longDescription: "Our digital marketing services help you reach your target audience and achieve your business goals. We develop and implement comprehensive marketing strategies across various digital channels, including social media, email, content marketing, and paid advertising.",
      pricing: [
        { tier: 'Bronze', price: '$40/hour', features: ['Basic social media management', 'Standard content creation', 'Monthly reporting', 'Basic campaign setup'] },
        { tier: 'Silver', price: '$60/hour', features: ['Multi-platform social media management', 'Advanced content creation', 'Bi-weekly reporting', 'Campaign optimization'] },
        { tier: 'Gold', price: '$80/hour', features: ['Comprehensive digital marketing strategy', 'Premium content creation', 'Weekly reporting & analysis', 'Advanced campaign management', 'Conversion optimization'] }
      ]
    }
  ];

  const filteredServices = selectedService === 'all' 
    ? services 
    : services.filter(service => service.id === selectedService);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-purple-100"
            >
              Comprehensive IT solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Filter Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedService('all')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedService === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Services
            </button>
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedService === service.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12"
              >
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.longDescription}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-4">
                      {service.icon}
                    </div>
                    <span className="text-lg font-semibold text-emerald-600">Professional {service.title} Services</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={`https://source.unsplash.com/random/800x600/?${service.id}`}
                    alt={service.title}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-800 mb-8 text-center"
              >
                Pricing Options
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.pricing.map((price, priceIndex) => (
                  <PricingCard
                    key={priceIndex}
                    tier={price.tier as 'Bronze' | 'Silver' | 'Gold'}
                    price={price.price}
                    features={price.features}
                    recommended={price.tier === 'Silver'}
                    delay={priceIndex * 0.1}
                  />
                ))}
              </div>

              {index < filteredServices.length - 1 && (
                <div className="border-b border-gray-200 my-20"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-emerald-100 mb-8"
            >
              Contact us today to discuss your project requirements and how we can help you achieve your goals.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              href="/#contact"
              className="inline-block px-8 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-100 transition-colors duration-300"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;