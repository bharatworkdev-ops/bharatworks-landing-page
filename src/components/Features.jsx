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
  FiMapPin,
  FiDollarSign,
  FiUserCheck,
  FiClock,
  FiStar,
} from "react-icons/fi";

const Features = ({ role }) => {
  const featureList = [
    {
      title: "Direct Booking",
      icon: <FiLayers />,
      desc: "Easily book labours or agents for your construction, industrial, or domestic needs.",
      target: "employer",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Location-based Matching",
      icon: <FiMapPin />,
      desc: "Find verified daily wage workers available immediately near your site.",
      target: "employer",
      gradient: "from-orange-600 to-red-500",
    },
    {
      title: "Quick Onboarding",
      icon: <FiCode />,
      desc: "Simple and fast registration for both workers and employers.",
      target: "both",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Real-time Availability",
      icon: <FiClock />,
      desc: "Check the real-time availability of workers in your local area for instant help.",
      target: "employer",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      title: "Job Notifications",
      icon: <FiBell />,
      desc: "Receive instant alerts for new job postings near you.",
      target: "labour",
      gradient: "from-amber-600 to-orange-500",
    },
    {
      title: "Secure Communication",
      icon: <FiMessageSquare />,
      desc: "Chat directly with employers or workers to finalize details securely.",
      target: "both",
      gradient: "from-orange-600 to-amber-500",
    },
    {
      title: "Verified Profiles",
      icon: <FiUserCheck />,
      desc: "Trust who you connect with through verified IDs and work history reviews.",
      target: "both",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Work Tracker",
      icon: <FiCheckCircle />,
      desc: "Keep track of your past jobs, earnings, and employer ratings over time.",
      target: "labour",
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  // Filter features based on the selected role
  const displayFeatures = featureList.filter(f => f.target === 'both' || f.target === role);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-card via-screen to-card">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-action/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-gradient-end/10 to-transparent rounded-full blur-3xl -z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #EA580C 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20 md:flex justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action/10 border border-action/20 mb-6">
              <FiStar className="w-4 h-4 text-action" />
              <span className="text-action font-semibold text-sm tracking-wider uppercase">Features</span>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Everything you need to{" "}
              <span className="gradient-text-hero">
                {role === 'employer' ? "manage your workforce" : "manage your daily work"}
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:w-5/12 mt-6 md:mt-0"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              BharatWork provides all the tools you need to seamlessly connect, negotiate, and work securely. Built exactly for your needs with modern technology.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl border border-border-medium/50 overflow-hidden card-hover"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-action/20 to-gradient-end/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative p-7 h-full flex flex-col">
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-text-primary mb-3 group-hover:text-action transition-colors">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                  {feature.desc}
                </p>

              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-action/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-gradient-to-br from-action/5 to-gradient-end/5 border border-action/10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-action to-gradient-end border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  {i}K+
                </div>
              ))}
            </div>
            <p className="text-text-secondary">
              <span className="font-bold text-text-primary">50,000+</span> workers and employers trust BharatWork
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
