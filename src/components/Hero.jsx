import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaHardHat, FaPlay, FaStar, FaUsers, FaShieldAlt } from "react-icons/fa";
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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  const content = {
    employer: {
      badge: "For Employers & Contractors",
      title: "Build Your",
      highlight: "Workforce",
      subtitle: "Hire verified daily-wage workers, manage your projects, and route zero-middleman payouts safely using BharatWork.",
      btnText: "Start Hiring Now",
      icon: <FaBriefcase className="text-xl" />,
      stats: [
        { icon: <FaUsers />, value: "50K+", label: "Verified Workers" },
        { icon: <FaShieldAlt />, value: "100%", label: "Secure Payments" },
        { icon: <FaStar />, value: "4.9", label: "App Rating" },
      ]
    },
    labour: {
      badge: "For Workers & Agents",
      title: "Secure Your",
      highlight: "Livelihood",
      subtitle: "Find verified daily-wage jobs, connect directly with contractors, and get safe payouts to your bank account.",
      btnText: "Find Work Now",
      icon: <FaHardHat className="text-xl text-white" />,
      stats: [
        { icon: <FaUsers />, value: "10K+", label: "Daily Jobs" },
        { icon: <FaShieldAlt />, value: "24hr", label: "Payment" },
        { icon: <FaStar />, value: "4.8", label: "Worker Rating" },
      ]
    }
  }[role];

  if (!content) return null;

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden flex items-center min-h-screen"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-screen via-white to-screen"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-action/20 via-orange-400/10 to-transparent rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gradient-end/20 via-amber-400/10 to-transparent rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-action/5 to-gradient-end/5 rounded-full filter blur-[150px]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#EA580C 1px, transparent 1px), linear-gradient(90deg, #EA580C 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 xl:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-action/20 shadow-lg mb-8">
              <span className="w-2 h-2 rounded-full bg-action animate-pulse"></span>
              <span className="gradient-primary font-bold text-sm tracking-wider uppercase">
                {content.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] mb-6 tracking-tight"
            >
              {content.title}{" "}
              <span className="relative inline-block">
                <span className="gradient-text-hero">{content.highlight}</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" className="opacity-40"/>
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-text-secondary mb-10 max-w-xl leading-relaxed"
            >
              {content.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#download"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-action to-gradient-end text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-action/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {content.icon}
                  </span>
                  {content.btnText}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-end to-action opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <button className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-text-primary border-2 border-border-medium hover:border-action hover:text-action transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center group-hover:bg-action group-hover:text-white transition-colors">
                  <FaPlay className="text-sm ml-0.5" />
                </span>
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
              {content.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-action/10 to-gradient-end/10 flex items-center justify-center text-action">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mobile App Notice */}
            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3 text-sm text-text-secondary bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full inline-flex border border-border-light">
              <MdAndroid className="text-xl text-action" />
              <span>Mobile Apps coming soon on <span className="font-semibold text-text-primary">Android & iOS</span></span>
            </motion.div>
          </motion.div>

          {/* Hero Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.2 }}
            className="relative order-1 xl:order-2"
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-action/30 via-orange-400/20 to-amber-400/30 rounded-full blur-[80px] -z-10"></div>

              {/* Phone Frame */}
              <div className="relative">
                {/* Left Phone */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -5, zIndex: 30 }}
                  className="absolute left-0 top-8 w-[45%] z-10"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <img
                      src={app2}
                      alt="BharatWork Feature"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Right Phone */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5, zIndex: 30 }}
                  className="absolute right-0 top-8 w-[45%] z-10"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <img
                      src={app3}
                      alt="BharatWork Feature"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Center Phone (Main) */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -10 }}
                  className="relative z-20 mx-auto w-[55%]"
                >
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(234,88,12,0.25)] border-4 border-white bg-white">
                    <img
                      src={app1}
                      alt="BharatWork Experience"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-action/10 to-transparent"></div>

                    {/* Screen Indicator */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-800 rounded-full"></div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -left-8 top-1/3 bg-white rounded-2xl shadow-xl p-3 border border-border-light"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-action to-gradient-end flex items-center justify-center text-white">
                        <FaUsers className="text-sm" />
                      </div>
                      <div>
                        <div className="text-xs text-text-secondary">Active Now</div>
                        <div className="font-bold text-text-primary">2,451</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Success Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-3 border border-border-light"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                        <FaShieldAlt className="text-sm" />
                      </div>
                      <div>
                        <div className="text-xs text-text-secondary">Verified</div>
                        <div className="font-bold text-text-primary">100%</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
