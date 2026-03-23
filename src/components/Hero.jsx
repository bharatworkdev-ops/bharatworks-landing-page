import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaHardHat } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";
import app1 from "../assets/app1.jpeg";
import app2 from "../assets/app2.jpeg";
import app3 from "../assets/app3.jpeg";

const Hero = ({ role, onLogin }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const content = {
    employer: {
      badge: "For Employers & Contractors",
      title: "Build Your Workforce.",
      subtitle: "Hire verified daily-wage workers, manage your projects, and route zero-middleman payouts safely using BharatWork.",
      btnText: "Start Hiring Now",
      icon: <FaBriefcase className="text-2xl" />
    },
    labour: {
      badge: "For Workers & Agents",
      title: "Secure Your Livelihood.",
      subtitle: "Find verified daily-wage jobs, connect directly with contractors, and get safe payouts to your bank account.",
      btnText: "Find Work Now",
      icon: <FaHardHat className="text-2xl text-white" />
    }
  }[role];

  if (!content) return null;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh] bg-screen"
    >
      {/* Premium Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-action/15 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-action/15 rounded-full mix-blend-screen filter blur-[120px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-5 py-2 rounded-full border border-action/30 bg-card/40 backdrop-blur-md mb-6 shadow-sm">
              <span className="gradient-primary font-bold text-sm tracking-widest uppercase">
                {content.badge}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-action to-[#ff9800]">BharatWork</span><br />
              {content.title}
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl leading-relaxed font-light"
            >
              {content.subtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex w-full sm:w-auto flex-col sm:flex-row gap-5 mb-4">
              <button
                onClick={onLogin}
                className="group flex items-center justify-center sm:justify-start gap-4 bg-gradient-to-r from-action to-[#ff9800] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-action/40 hover:-translate-y-1"
              >
                <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                  {content.icon}
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xl">{content.btnText}</div>
                </div>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-2 text-sm text-text-secondary font-medium">
              <MdAndroid className="text-xl text-action" />
              <span>Mobile Apps coming soon</span>
            </motion.div>
          </motion.div>

          {/* Hero Image Mockup Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="relative w-full flex justify-center xl:justify-end mt-16 xl:mt-0"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[500px] h-[450px] sm:h-[550px] flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-action/40 to-transparent rounded-full blur-[100px] -z-10 animate-pulse"></div>
              
              {/* Left Image */}
              <motion.img
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                src={app2}
                alt="BharatWork Feature"
                className="absolute left-0 sm:-left-4 md:-left-8 top-12 sm:top-20 w-[150px] sm:w-[200px] h-auto rounded-[2rem] shadow-2xl border-4 border-card -rotate-12 opacity-95 transition-all duration-300"
              />
              
              {/* Right Image */}
              <motion.img
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                src={app3}
                alt="BharatWork Feature"
                className="absolute right-0 sm:-right-4 md:-right-8 top-12 sm:top-20 w-[150px] sm:w-[200px] h-auto rounded-[2rem] shadow-2xl border-4 border-card rotate-12 opacity-95 transition-all duration-300"
              />

              {/* Center Image */}
              <motion.img
                whileHover={{ scale: 1.05, y: -10 }}
                src={app1}
                alt="BharatWork Experience"
                className="relative z-20 w-[180px] sm:w-[240px] h-auto rounded-[2rem] shadow-[0_20px_50px_rgba(230,126,34,0.3)] border-4 border-card transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
