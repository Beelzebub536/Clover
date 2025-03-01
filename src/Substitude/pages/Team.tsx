import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';

const Team = () => {
  const teamMembers = [
    {
      name: "Ahmed Rahman",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in the IT industry, Ahmed leads Clover Soft with vision and expertise.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      email: "ahmed@cloversoft.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Fatima Khan",
      role: "CTO",
      bio: "Fatima oversees all technical aspects of the company, ensuring we stay at the cutting edge of technology.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      email: "fatima@cloversoft.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Rahul Sharma",
      role: "Lead Developer",
      bio: "Rahul leads our development team, specializing in web and mobile application development.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      email: "rahul@cloversoft.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer",
      bio: "Priya creates beautiful and intuitive user interfaces that enhance user experience across all our projects.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      email: "priya@cloversoft.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Mohammad Ali",
      role: "3D Modeling Expert",
      bio: "Mohammad specializes in creating stunning 3D models and animations for various industries.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      email: "mohammad@cloversoft.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Aisha Begum",
      role: "Digital Marketing Manager",
      bio: "Aisha leads our digital marketing efforts, helping clients increase their online presence and reach.",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      email: "aisha@cloversoft.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Rajiv Kumar",
      role: "Project Manager",
      bio: "Rajiv ensures all projects are delivered on time and within budget while maintaining quality standards.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      email: "rajiv@cloversoft.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      name: "Nadia Islam",
      role: "HR Manager",
      bio: "Nadia oversees our human resources department, ensuring we attract and retain top talent.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      email: "nadia@cloversoft.com",
      linkedin: "https://linkedin.com"
    }
  ];

  const achievements = [
    {
      title: "Best IT Service Provider 2023",
      description: "Awarded by Bangladesh IT Association for excellence in service delivery."
    },
    {
      title: "Top 10 Fastest Growing IT Companies",
      description: "Recognized by Tech Asia Magazine for our rapid growth and innovation."
    },
    {
      title: "Excellence in 3D Modeling",
      description: "Won the International Design Award for our work in architectural visualization."
    },
    {
      title: "Best Workplace Culture",
      description: "Recognized for creating an inclusive and innovative work environment."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
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
              className="text-xl text-blue-100"
            >
              The talented professionals behind Clover Soft's success
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
                image={member.image}
                email={member.email}
                linkedin={member.linkedin}
                twitter={member.twitter}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
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
              Recognition of our commitment to excellence and innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-emerald-500"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
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
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-emerald-100 mb-8"
            >
              We're always looking for talented individuals to join our growing team. Check out our current openings and become part of our success story.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              href="/career"
              className="inline-block px-8 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-100 transition-colors duration-300"
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