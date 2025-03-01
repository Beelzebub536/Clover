import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Palette, Database, BarChart, Users, Clock, DollarSign } from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    {
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh (Remote Available)',
      description: 'We are looking for a skilled Frontend Developer with experience in React, Vue, or Angular to join our growing team.',
      requirements: [
        'Proficient in HTML, CSS, and JavaScript',
        'Experience with React, Vue, or Angular',
        'Knowledge of responsive design principles',
        'Understanding of UI/UX design principles',
        'Good problem-solving skills',
        'Excellent communication skills'
      ],
      responsibilities: [
        'Develop and maintain client websites and web applications',
        'Collaborate with designers to implement UI/UX designs',
        'Ensure cross-browser compatibility and responsiveness',
        'Optimize applications for maximum speed and scalability',
        'Participate in code reviews and team discussions'
      ],
      icon: <Code className="w-8 h-8 text-emerald-600" />
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh (Remote Available)',
      description: 'We are seeking a creative UI/UX Designer to create amazing user experiences for our clients digital products.',
      requirements: [
        'Proficient in design tools like Figma, Adobe XD, or Sketch',
        'Strong portfolio demonstrating UI/UX design skills',
        'Understanding of user-centered design principles',
        'Knowledge of web and mobile design standards',
        'Ability to create wireframes, prototypes, and user flows',
        'Good communication and presentation skills'
      ],
      responsibilities: [
        'Create user-centered designs for websites and applications',
        'Develop wireframes, prototypes, and user flows',
        'Collaborate with developers to implement designs',
        'Conduct user research and usability testing',
        'Stay updated with the latest design trends and technologies'
      ],
      icon: <Palette className="w-8 h-8 text-emerald-600" />
    },
    {
      title: 'Data Entry Specialist',
      type: 'Full-time / Part-time',
      location: 'Dhaka, Bangladesh (Remote Available)',
      description: 'We are looking for detail-oriented Data Entry Specialists to join our team and help with various data processing tasks.',
      requirements: [
        'Fast and accurate typing skills',
        'Attention to detail',
        'Basic computer skills',
        'Knowledge of Microsoft Office Suite',
        'Ability to work independently',
        'Good time management skills'
      ],
      responsibilities: [
        'Enter data into various systems and databases',
        'Verify and validate data for accuracy',
        'Maintain data confidentiality and security',
        'Generate reports as needed',
        'Identify and resolve data discrepancies'
      ],
      icon: <Database className="w-8 h-8 text-emerald-600" />
    },
    {
      title: 'Digital Marketing Specialist',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh (Remote Available)',
      description: 'We are seeking a Digital Marketing Specialist to help our clients grow their online presence and reach their target audience.',
      requirements: [
        'Experience in digital marketing strategies',
        'Knowledge of SEO, SEM, and social media marketing',
        'Familiarity with marketing analytics tools',
        'Understanding of content marketing principles',
        'Good communication and writing skills',
        'Analytical mindset'
      ],
      responsibilities: [
        'Develop and implement digital marketing strategies',
        'Manage social media accounts and campaigns',
        'Create and optimize content for SEO',
        'Monitor and analyze campaign performance',
        'Generate reports and provide insights to clients'
      ],
      icon: <BarChart className="w-8 h-8 text-emerald-600" />
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'We offer competitive compensation packages based on skills and experience.',
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Flexible Work Hours',
      description: 'Enjoy flexible working hours to maintain a healthy work-life balance.',
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Remote Work Options',
      description: 'Work from home or our office in Dhaka, with full remote options available.',
      icon: <Briefcase className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, training, and career advancement paths.',
      icon: <Users className="w-6 h-6 text-emerald-600" />
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
              Join Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-emerald-100"
            >
              Explore exciting career opportunities at Clover Soft Inc.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Why Join Us Section */}
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
              Why Join Clover Soft Inc.?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Be part of a dynamic team that values innovation, collaboration, and growth
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-emerald-600 font-bold">50+ Team Members</div>
                <div className="text-gray-600 text-sm">And Growing!</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Work Culture</h3>
              <p className="text-gray-600 mb-6">
                At Clover Soft Inc., we believe in creating an environment where creativity thrives, innovation is encouraged, and every team member feels valued and supported. We're not just colleagues; we're a family that works together to achieve excellence.
              </p>
              <p className="text-gray-600 mb-6">
                We embrace diversity and inclusion, bringing together professionals from various backgrounds and experiences to create a rich and dynamic work environment. This diversity of thought and perspective enables us to approach challenges creatively and deliver innovative solutions to our clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Current Openings Section */}
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
              Current Openings
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore our available positions and find the perfect fit for your skills and career goals
            </motion.p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex items-center mb-4 md:mb-0 md:mr-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mr-4">
                        {job.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 md:ml-auto">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <a 
                        href="#application-form" 
                        className="px-6 py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors duration-300 inline-block"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Form Section */}
      <section id="application-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                Apply Now
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600"
              >
                Fill out the form below to apply for a position at Clover Soft Inc.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Position Applying For *</label>
                      <select 
                        id="position" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      >
                        <option value="">Select a position</option>
                        {jobOpenings.map((job, index) => (
                          <option key={index} value={job.title}>{job.title}</option>
                        ))}
                        <option value="Other">Other (Specify in cover letter)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="portfolio" className="block text-gray-700 font-medium mb-2">Portfolio/LinkedIn/GitHub URL</label>
                    <input 
                      type="url" 
                      id="portfolio" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="https://"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">Cover Letter *</label>
                    <textarea 
                      id="coverLetter" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Tell us why you're interested in this position and why you'd be a good fit"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Resume/CV *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <input 
                        type="file" 
                        id="resume" 
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      <label 
                        htmlFor="resume" 
                        className="cursor-pointer text-emerald-600 hover:text-emerald-700"
                      >
                        <span className="block mb-2">Click to upload your resume/CV</span>
                        <span className="text-sm text-gray-500">PDF, DOC, or DOCX (Max 5MB)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" 
                        required
                      />
                      <span className="ml-2 text-gray-700">I consent to Clover Soft Inc. processing my personal data for recruitment purposes *</span>
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors duration-300"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact HR Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Have Questions?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 mb-10"
            >
              Contact our HR team for any inquiries about our hiring process or available positions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10">
                <div className="text-center">
                  <div className="text-emerald-600 font-bold mb-1">Email</div>
                  <a href="mailto:careers@cloversoft.com" className="text-gray-700 hover:text-emerald-600">careers@cloversoft.com</a>
                </div>
                <div className="text-center">
                  <div className="text-emerald-600 font-bold mb-1">Phone</div>
                  <a href="tel:+8801234567890" className="text-gray-700 hover:text-emerald-600">+880 1234 567890</a>
                </div>
                <div className="text-center">
                  <div className="text-emerald-600 font-bold mb-1">Office Hours</div>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;