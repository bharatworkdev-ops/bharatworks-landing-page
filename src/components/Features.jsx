import React from "react";
import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiTrendingUp,
  FiCheckCircle,
  FiShield,
  FiBell,
  FiSearch,
  FiCode,
  FiLayers,
} from "react-icons/fi";

const Features = ({ role }) => {
  const featureList = [
    {
      title: "Direct Booking",
      icon: <FiLayers />,
      desc: "Easily book labours or agents for your construction, industrial, or domestic needs.",
      target: "employer",
    },
    {
      title: "Location-based Matching",
      icon: <FiSearch />,
      desc: "Find verified daily wage workers available immediately near your site.",
      target: "employer",
    },
    {
      title: "Quick Onboarding",
      icon: <FiCode />,
      desc: "Simple and fast registration for both workers and employers.",
      target: "both",
    },
    {
      title: "Real-time Availability",
      icon: <FiTrendingUp />,
      desc: "Check the real-time availability of workers in your local area for instant help.",
      target: "employer",
    },
    {
      title: "Job Notifications",
      icon: <FiBell />,
      desc: "Receive instant alerts for new job postings near you.",
      target: "labour",
    },
    {
      title: "Secure Communication",
      icon: <FiMessageSquare />,
      desc: "Chat directly with employers or workers to finalize details securely.",
      target: "both",
    },
    {
      title: "Verified Profiles",
      icon: <FiShield />,
      desc: "Trust who you connect with through verified IDs and work history reviews.",
      target: "both",
    },
    {
      title: "Work Tracker",
      icon: <FiCheckCircle />,
      desc: "Keep track of your past jobs, earnings, and employer ratings over time.",
      target: "labour",
    },
  ];

  // Filter features based on the selected role
  const displayFeatures = featureList.filter(f => f.target === 'both' || f.target === role);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-screen">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-action/5 to-transparent skew-x-12 transform origin-top blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-action font-semibold uppercase tracking-wider text-sm mb-2">
              Features
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Everything you need to <br /> 
              {role === 'employer' ? "manage your workforce" : "manage your daily work"}
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-5/12 mt-6 md:mt-0 text-text-secondary"
          >
            <p>
              BharatWork provides all the tools you need to seamlessly connect, negotiate, and work securely. Built exactly for your needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="group glass p-6 rounded-2xl border border-border-light hover:border-action/50 relative overflow-hidden cursor-default transition-all duration-300"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-action/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="text-action text-3xl mb-5 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
