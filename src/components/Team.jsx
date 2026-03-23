import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarthak Upadhyay",
      role: "Founder & CEO",
      description: "Visionary behind BharatWork. Dedicated to transforming the unorganized labor sector into a streamlined, transparent ecosystem.",
      image: "https://res.cloudinary.com/dgkmzddjv/image/upload/v1774187538/WhatsApp_Image_2026-03-22_at_6.16.21_PM_jk3nex.jpg",
    },
    {
      name: "Tejas Aggarwal",
      role: "Co-Founder & CTO",
      description: "Operational leader ensuring seamless connections between daily wage workers, agents, and enterprise employers nationwide.",
      image: "https://res.cloudinary.com/dgkmzddjv/image/upload/f_auto,q_auto/WhatsApp_Image_2026-03-22_at_6.30.29_PM_idkqfb",
    },
    {
      name: "Ayush Pandey",
      role: "Head of Mobile App",
      description: "Expert in mobile technologies ensuring the Labour and Employer apps run flawlessly on all devices.",
      image: "https://ui-avatars.com/api/?name=Developer&background=27AE60&color=fff&size=150",
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-action font-semibold tracking-wide uppercase text-sm mb-2">
              Our Team
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              The Minds Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-action to-action/80">BharatWork</span>
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
              We are a group of passionate individuals committed to bridging the gap in India's unorganized workforce sector. 
              Our mission is to create a transparent, reliable, and fair ecosystem for everyone.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-border-light hover:border-action/40 group relative overflow-hidden flex flex-col items-center text-center transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-6 border-4 border-card shadow-lg group-hover:scale-105 transition-transform duration-300 object-cover"
              />
              <h4 className="text-xl font-bold text-text-primary mb-1">{member.name}</h4>
              <p className="text-action font-medium text-sm mb-4">{member.role}</p>
              <p className="text-text-secondary text-sm leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
