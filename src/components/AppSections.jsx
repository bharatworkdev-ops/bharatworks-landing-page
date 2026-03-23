import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaHardHat,
  FaPlusCircle,
  FaRupeeSign,
  FaClipboardCheck,
  FaSearchLocation,
  FaWallet,
  FaStar,
  FaBell,
  FaChartLine,
  FaShieldAlt,
  FaHistory,
} from "react-icons/fa";

const AppSections = ({ role, onLogin }) => {
  const employerFeatures = [
    {
      icon: <FaPlusCircle />,
      title: "Post Jobs Instantly",
      description: "Create job postings in seconds with detailed requirements, location, and budget. Reach hundreds of verified workers instantly.",
    },
    {
      icon: <FaSearchLocation />,
      title: "Find Verified Workers",
      description: "Browse through KYC-verified labour profiles with ratings, reviews, and skill certifications near your location.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Secure Payments",
      description: "Pay workers directly through the app with transaction records. No cash handling, complete payment transparency.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Track Projects",
      description: "Monitor work progress, attendance, and completion status. Keep all your construction projects organized in one place.",
    },
    {
      icon: <FaChartLine />,
      title: "Budget Management",
      description: "Track expenses across multiple projects. Get insights into labour costs and manage your budget efficiently.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Verified & Trusted",
      description: "All workers are background-verified. Access work history and employer reviews before hiring.",
    },
  ];

  const labourFeatures = [
    {
      icon: <FaBriefcase />,
      title: "Find Jobs Near You",
      description: "Discover daily wage jobs in your area. Get notified about opportunities that match your skills and location.",
    },
    {
      icon: <FaWallet />,
      title: "Receive Direct Payments",
      description: "Get paid directly into your bank account or wallet. No middleman, no delays, no payment disputes.",
    },
    {
      icon: <FaStar />,
      title: "Build Your Profile",
      description: "Accumulate ratings and reviews from employers. A strong profile means more job opportunities and better pay.",
    },
    {
      icon: <FaBell />,
      title: "Job Alerts",
      description: "Receive instant notifications for new jobs in your area. Never miss an earning opportunity.",
    },
    {
      icon: <FaHistory />,
      title: "Work History",
      description: "Track all your completed jobs, total earnings, and work days. Access your complete employment record anytime.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Verified",
      description: "Your profile is verified and protected. Work only with genuine employers and verified job postings.",
    },
  ];

  if (!role) return null;

  return (
    <section id="apps" className="py-24 relative overflow-hidden bg-gradient-to-b from-card to-screen">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-action/10 rounded-full filter blur-[80px] opacity-50"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#ff9800]/10 rounded-full filter blur-[80px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-action font-semibold uppercase tracking-wider text-sm mb-3">
            {role === 'employer' ? 'Employer Portal' : 'Labour Portal'}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {role === 'employer' ? 'Powerful Tools for Hiring' : 'Everything You Need to Earn'}
          </h3>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {role === 'employer' 
              ? "BharatWork provides tailored experiences to easily manage hiring, attendance, and payouts."
              : "Discover opportunities, manage your incoming wages, and build trust within the ecosystem."}
          </p>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {role === 'employer' ? (
            <motion.div
              key="employer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="md:col-span-2 lg:col-span-3 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-r from-action/20 to-action/5 rounded-3xl p-8 border border-action/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-action/20 rounded-2xl hidden sm:block">
                      <FaBriefcase className="text-4xl text-action" />
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                        Employer Platform Overview
                      </h4>
                      <p className="text-text-secondary text-lg leading-relaxed mb-4">
                        Post jobs, hire verified workers, and manage your projects all in one place.
                        The Employer Portal gives you complete control over your hiring process with
                        transparent payments and real-time tracking.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-action/20 rounded-full text-action font-semibold text-sm">
                          Post Jobs
                        </span>
                        <span className="px-4 py-2 bg-action/20 rounded-full text-action font-semibold text-sm">
                          Hire Workers
                        </span>
                        <span className="px-4 py-2 bg-action/20 rounded-full text-action font-semibold text-sm">
                          Track Projects
                        </span>
                        <span className="px-4 py-2 bg-action/20 rounded-full text-action font-semibold text-sm">
                          Secure Payments
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {employerFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="group glass p-6 rounded-2xl border border-border-light hover:border-action/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-action/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-action/20 transition-all duration-300">
                    <div className="text-action text-2xl">{feature.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="labour"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="md:col-span-2 lg:col-span-3 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-r from-[#ff9800]/20 to-[#ff9800]/5 rounded-3xl p-8 border border-[#ff9800]/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-[#ff9800]/20 rounded-2xl hidden sm:block">
                      <FaHardHat className="text-4xl text-[#ff9800]" />
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                        Worker Platform Overview
                      </h4>
                      <p className="text-text-secondary text-lg leading-relaxed mb-4">
                        Find daily wage jobs near you, get paid directly, and build your
                        work reputation. The Labour Portal empowers workers with direct access
                        to opportunities and secure payments.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-[#ff9800]/20 rounded-full text-[#ff9800] font-semibold text-sm">
                          Find Jobs
                        </span>
                        <span className="px-4 py-2 bg-[#ff9800]/20 rounded-full text-[#ff9800] font-semibold text-sm">
                          Get Paid Direct
                        </span>
                        <span className="px-4 py-2 bg-[#ff9800]/20 rounded-full text-[#ff9800] font-semibold text-sm">
                          Build Profile
                        </span>
                        <span className="px-4 py-2 bg-[#ff9800]/20 rounded-full text-[#ff9800] font-semibold text-sm">
                          Track Earnings
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {labourFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="group glass p-6 rounded-2xl border border-border-light hover:border-[#ff9800]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#ff9800]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#ff9800]/20 transition-all duration-300">
                    <div className="text-[#ff9800] text-2xl">{feature.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
             <button
               onClick={onLogin}
               className="inline-flex items-center justify-center gap-3 bg-action hover:bg-[#e66000] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1 text-lg"
             >
               {role === 'employer' ? <FaBriefcase /> : <FaHardHat />}
               Access Interactive Web App
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppSections;
