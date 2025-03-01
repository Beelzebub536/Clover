import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Cuboid as Cube, Globe, Headphones, Database, Search, MessageCircle, BarChart } from 'lucide-react';
import PricingCard from '../components/PricingCard';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.',
      pricingTiers: [
        {
          tier: 'Bronze',
          price: 50,
          period: 'hour',
          features: [
            'Responsive design',
            'Basic SEO optimization',
            'Content management system',
            'Contact form integration',
            'Standard delivery time'
          ]
        },
        {
          tier: 'Silver',
          price: 75,
          period: 'hour',
          features: [
            'All Bronze features',
            'Advanced SEO optimization',
            'E-commerce functionality',
            'Performance optimization',
            'Faster delivery time',
            'Premium support'
          ],
          highlighted: true
        },
        {
          tier: 'Gold',
          price: 100,
          period: 'hour',
          features: [
            'All Silver features',
            'Custom animations',
            'Advanced security features',
            'API integrations',
            'Expedited delivery',
            '24/7 priority support',
            'Free maintenance (1 month)'
          ]
        }
      ]
    },
    {
      icon: <Palette className="w-8 h-8 text-emerald-600" />,
      title: 'UI/UX Design',
      description: 'Creative and professional designs that capture your brand essence and message.',
      pricingTiers: [
        {
          tier: 'Bronze',
          price: 60,
          period: 'hour',
          features: [
            'Brand identity design',
            'Logo design',
            'Basic UI elements',
            'Standard delivery time',
            'Up to 2 revisions'
          ]
        },
        {
          tier: 'Silver',
          price: 90,
          period: 'hour',
          features: [
            'All Bronze features',
            'Advanced UI components',
            'Interactive prototypes',
            'User flow diagrams',
            'Faster delivery time',
            'Up to 5 revisions'
          ],
          highlighted: true
        },
        {
          tier: 'Gold',
          price: 120,
          period: 'hour',
          features: [
            'All Silver features',
            'Complete design system',
            'Animation guidelines',
            'Accessibility compliance',
            'Expedited delivery',
            'Unlimited revisions',
            'Post-delivery support'
          ]
        }
      ]
    },
    {
      icon: <Cube className="w-8 h-8 text-emerald-600" />,
      title: '3D Modeling',
      description: 'Stunning 3D models and visualizations that bring your ideas to life.',
      pricingTiers: [
        {
          tier: 'Bronze',
          price: 70,
          period: 'hour',
          features: [
            'Basic 3D modeling',
            'Standard texturing',
            'Simple animations',
            'Standard delivery time',
            'Up to 2 revisions'
          ]
        },
        {
          tier: 'Silver',
          price: 100,
          period: 'hour',
          features: [
            'All Bronze features',
            'Advanced modeling techniques',
            'High-quality texturing',
            'Complex animations',
            'Faster delivery time',
            'Up to 5 revisions'
          ],
          highlighted: true
        },
        {
          tier: 'Gold',
          price: 140,
          period: 'hour',
          features: [
            'All Silver features',
            'Photorealistic rendering',
            'Advanced lighting setups',
            'Interactive 3D models',
            'Expedited delivery',
            'Unlimited revisions',
            'Source files included'
          ]
        }
      ]
    },
    {
      icon: <BarChart className="w-8 h-8 text-emerald-600" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to help your business thrive online.',
      pricingTiers: [
        {
          tier: 'Bronze',
          price: 40,
          period: 'hour',
          features: [
            'Social media management',
            'Basic content creation',
            'Monthly performance reports',
            'Standard response time',
            'Basic SEO optimization'
          ]
        },
        {
          tier: 'Silver',
          price: 60,
          period: 'hour',
          features: [
            'All Bronze features',
            'Advanced content strategy',
            'PPC campaign management',
            'Weekly performance reports',
            'Faster response time',
            'Competitor analysis'
          ],
          highlighted: true
        },
        {
          tier: 'Gold',
          price: 80,
          period: 'hour',
          features: [
            'All Silver features',
            'Comprehensive marketing strategy',
            'Advanced analytics and insights',
            'Daily performance reports',
            'Priority response time',
            'ROI optimization',
            'Marketing automation'
          ]
        }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-600" />,
      title: 'Data Entry',
      description: 'Accurate and efficient data entry services for all your business needs.',
      pricingTiers: [
        {
          tier: 'Bronze',
          price: 20,
          period: 'hour',
          features: [
            'Basic data entry',
            'Standard accuracy rate',
            'Standard delivery time',
            'Basic quality checks',
            'Simple data formatting'
          ]
        },
        {
          tier: 'Silver',
          price: 30,
          period: 'hour',
          features: [
            'All Bronze features',
            'Advanced data processing',
            'Higher accuracy rate',
            'Faster delivery time',
            'Comprehensive quality checks',
            'Data validation'
          ],
          highlighted: true
        },
        {
          tier: 'Gold',
          price: 40,
          period: 'hour',
          features: [
            'All Silver features',
            'Complex data processing',
            'Highest accuracy rate',
            'Expedited delivery',
            'Advanced quality assurance',
            'Data analysis',
            'Custom reporting'
          ]
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
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
              className="text-xl text-emerald-100"
            >
              Comprehensive IT solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From web development to digital marketing, we provide a wide range of services to help your business succeed in the digital landscape.
            </motion.p>
          </div>
          
          {services.map((service, index) => (
            <div key={index} id={service.title.toLowerCase().replace(/\s+/g, '-')} className="mb-24">
              <div className="text-center mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 mx-auto"
                >
                  {service.icon}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                  {service.description}
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.pricingTiers.map((tier, tierIndex) => (
                  <PricingCard 
                    key={tierIndex}
                    tier={tier.tier}
                    price={tier.price}
                    period={tier.period}
                    features={tier.features}
                    highlighted={tier.highlighted}
                    delay={tierIndex * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Our Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              How we work with you to deliver exceptional results
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
                <span className="text-emerald-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business, goals, and requirements through in-depth consultations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
                <span className="text-emerald-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Planning</h3>
              <p className="text-gray-600">
                We create a detailed project plan with timelines, milestones, and deliverables based on your requirements.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
                <span className="text-emerald-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Execution</h3>
              <p className="text-gray-600">
                Our team of experts works diligently to deliver high-quality results, keeping you updated throughout the process.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
                <span className="text-emerald-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Delivery & Support</h3>
              <p className="text-gray-600">
                We deliver the final product and provide ongoing support to ensure your continued success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Answers to common questions about our services
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">How do I choose the right service package for my business?</h3>
              <p className="text-gray-600">
                We recommend starting with a consultation where our experts can assess your specific needs and recommend the most suitable package. You can also compare the features of each tier to determine which aligns best with your requirements and budget.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Can I upgrade my package later if my needs change?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your package at any time. We understand that business needs evolve, and we're flexible in accommodating changes to ensure you always have the right level of service.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">What is the typical timeline for project completion?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on the scope and complexity. During the initial consultation, we'll provide a detailed timeline with milestones. Our Silver and Gold packages offer faster delivery times compared to the Bronze package.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Do you offer custom solutions beyond the listed packages?</h3>
              <p className="text-gray-600">
                Absolutely! We understand that every business is unique, and we're happy to create custom solutions tailored to your specific requirements. Contact us to discuss your needs, and we'll develop a personalized proposal.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">What support do you provide after project completion?</h3>
              <p className="text-gray-600">
                All our packages include post-delivery support, with the level of support varying by tier. Bronze includes basic support, Silver offers premium support with faster response times, and Gold provides 24/7 priority support. We also offer maintenance packages for ongoing support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-emerald-100 mb-10"
            >
              Contact us today to discuss your project and how we can help you achieve your business goals.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-emerald-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="px-8 py-4 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-emerald-600 transition-colors duration-300"
              >
                Request a Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;