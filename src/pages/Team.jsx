import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ahmed Rahman',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in the IT industry, Ahmed founded Clover Soft Inc. with a vision to provide world-class IT services from Bangladesh. He oversees the company\'s strategic direction and growth.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'ahmed@cloversoft.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Fatima Khan',
      role: 'CTO',
      bio: 'Fatima leads our technical team with her expertise in software architecture and emerging technologies. She ensures that our solutions are innovative, scalable, and aligned with industry best practices.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      email: 'fatima@cloversoft.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Rahul Dev',
      role: 'Creative Director',
      bio: 'Rahul brings his artistic vision and creative expertise to lead our design team. With a background in fine arts and digital design, he ensures that our visual solutions are both aesthetically pleasing and functional.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'rahul@cloversoft.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Web Developer',
      bio: 'Priya specializes in front-end development and user experience design. She leads our web development team, creating responsive and intuitive websites that deliver exceptional user experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
      email: 'priya@cloversoft.com',
      linkedin: 'https://linkedin.com',
      twitter: null
    },
    {
      name: 'Kamal Hossain',
      role: 'Senior 3D Artist',
      bio: 'Kamal is our 3D modeling expert with a passion for creating lifelike digital assets. His work spans from architectural visualizations to character modeling for games and animations.',
      imageUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'kamal@cloversoft.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Nadia Islam',
      role: 'Digital Marketing Manager',
      bio: 'Nadia leads our digital marketing efforts with her expertise in SEO, social media, and content strategy. She helps our clients increase their online visibility and reach their target audience effectively.',
      imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'nadia@cloversoft.com',
      linkedin: 'https://linkedin.com',
      twitter: null
    },
    {
      name: 'Omar Ali',
      role: 'Software Engineer',
      bio: 'Omar specializes in backend development and database architecture. He builds robust and scalable systems that power our clients applications and websites.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      email: 'omar@cloversoft.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Tania Begum',
      role: 'UI/UX Designer',
      bio: 'Tania combines her artistic talent with user-centered design principles to create intuitive and visually appealing interfaces. She works closely with our development team to bring designs to life.',
      imageUrl: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
      email: 'tania@cloversoft.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
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
              Meet Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-emerald-100"
            >
              The talented professionals behind Clover Soft Inc.'s success
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
                email={member.email}
                linkedin={member.linkedin}
                twitter={member.twitter}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Our Team Culture
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-4"
              >
                At Clover Soft Inc., we believe that our team is our greatest asset. We foster a culture of collaboration, innovation, and continuous learning, where every team member is encouraged to share ideas and contribute to our collective success.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-4"
              >
                We value diversity and inclusion, bringing together professionals from various backgrounds and experiences to create a rich and dynamic work environment. This diversity of thought and perspective enables us to approach challenges creatively and deliver innovative solutions to our clients.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600"
              >
                Our team members are not just colleagues but a family that supports each other's growth and celebrates each other's successes. We work hard, but we also make time for team-building activities, knowledge-sharing sessions, and fun events that strengthen our bonds and keep us motivated.
              </motion.p>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team meeting" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team celebration" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team workshop" 
                  className="rounded-lg shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
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
              Our Achievements
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Recognitions and milestones that mark our journey of excellence
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-emerald-600 font-bold text-xl mb-2">Best IT Service Provider 2023</div>
              <p className="text-gray-600">
                Awarded by the Bangladesh IT Association for our exceptional service quality and client satisfaction.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-emerald-600 font-bold text-xl mb-2">500+ Projects Completed</div>
              <p className="text-gray-600">
                Successfully delivered over 500 projects across various industries and technologies.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-emerald-600 font-bold text-xl mb-2">Innovation Award 2022</div>
              <p className="text-gray-600">
                Recognized for our innovative approach to solving complex business challenges through technology.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-emerald-600 font-bold text-xl mb-2">20+ Countries Served</div>
              <p className="text-gray-600">
                Expanded our services to clients in over 20 countries across North America, Europe, and Asia.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-emerald-600 font-bold text-xl mb-2">Top Employer 2023</div>
              <p className="text-gray-600">
                Named one of the top employers in the IT sector for our employee-friendly policies and work culture.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-emerald-600 font-bold text-xl mb-2">95% Client Retention</div>
              <p className="text-gray-600">
                Maintained a high client retention rate, reflecting our commitment to client satisfaction and quality service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
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
              Join Our Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-emerald-100 mb-10"
            >
              We're always looking for talented individuals who are passionate about technology and innovation. Explore our current openings and become part of our growing team.
            </motion.p>
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              href="/career" 
              className="px-8 py-4 bg-white text-emerald-600 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              View Open Positions
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;