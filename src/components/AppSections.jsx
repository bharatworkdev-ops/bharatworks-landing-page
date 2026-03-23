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
  FaArrowRight,
} from "react-icons/fa";

const AppSections = ({ role, onLogin }) => {
  const employerFeatures = [
    {
      icon: <FaPlusCircle />,
      title: "Post Jobs Instantly",
      description: "Create job postings in seconds with detailed requirements, location, and budget.",
    },
    {
      icon: <FaSearchLocation />,
      title: "Find Verified Workers",
      description: "Browse through KYC-verified labour profiles with ratings and reviews.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Secure Payments",
      description: "Pay workers directly through the app with transaction records.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Track Projects",
      description: "Monitor work progress, attendance, and completion status.",
    },
    {
      icon: <FaChartLine />,
      title: "Budget Management",
      description: "Track expenses across multiple projects with labour cost insights.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Verified & Trusted",
      description: "All workers are background-verified with work history access.",
    },
  ];

  const labourFeatures = [
    {
      icon: <FaBriefcase />,
      title: "Find Jobs Near You",
      description: "Discover daily wage jobs in your area with instant notifications.",
    },
    {
      icon: <FaWallet />,
      title: "Direct Payments",
      description: "Get paid directly into your bank account with no middleman.",
    },
    {
      icon: <FaStar />,
      title: "Build Your Profile",
      description: "Accumulate ratings and reviews for better job opportunities.",
    },
    {
      icon: <FaBell />,
      title: "Job Alerts",
      description: "Receive instant notifications for new jobs in your area.",
    },
    {
      icon: <FaHistory />,
      title: "Work History",
      description: "Track all your completed jobs, earnings, and work days.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Verified",
      description: "Work only with genuine employers and verified job postings.",
    },
  ];

  if (!role) return null;

  const isEmployer = role === 'employer';
  const features = isEmployer ? employerFeatures : labourFeatures;
  const accentColor = isEmployer ? "action" : "amber-500";
  const gradientFrom = isEmployer ? "from-action" : "from-amber-500";
  const gradientTo = isEmployer ? "to-gradient-end" : "to-orange-500";

  return (
    <section id="apps" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-card via-screen to-card">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-0 w-96 h-96 bg-${accentColor}/10 rounded-full filter blur-[120px] opacity-50`}></div>
        <div className={`absolute bottom-1/4 right-0 w-96 h-96 bg-${isEmployer ? 'gradient-end' : 'orange-500'}/10 rounded-full filter blur-[120px] opacity-50`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${accentColor}/10 border border-${accentColor}/20 mb-6`}>
            <span className={`w-2 h-2 rounded-full bg-${accentColor}`}></span>
            <span className={`text-${accentColor} font-semibold text-sm tracking-wider uppercase`}>
              {isEmployer ? 'Employer Portal' : 'Worker Portal'}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            {isEmployer ? (
              <>Powerful Tools for{" "}<span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>Hiring</span></>
            ) : (
              <>Everything You Need to{" "}<span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>Earn</span></>
            )}
          </h3>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {isEmployer
              ? "BharatWork provides tailored experiences to easily manage hiring, attendance, and payouts."
              : "Discover opportunities, manage your incoming wages, and build trust within the ecosystem."}
          </p>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Overview Card */}
            <div className="md:col-span-2 lg:col-span-3 mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradientFrom}/10 ${gradientTo}/5 border border-${accentColor}/20 p-8 lg:p-10`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-${accentColor}/10 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2`}></div>

                <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white text-3xl shadow-xl`}>
                    {isEmployer ? <FaBriefcase /> : <FaHardHat />}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-2xl lg:text-3xl font-bold text-text-primary mb-3">
                      {isEmployer ? 'Employer Platform Overview' : 'Worker Platform Overview'}
                    </h4>
                    <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                      {isEmployer
                        ? "Post jobs, hire verified workers, and manage your projects all in one place. Complete control over your hiring process with transparent payments."
                        : "Find daily wage jobs near you, get paid directly, and build your work reputation. Empowering workers with direct access to opportunities."}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(isEmployer
                      ? ["Post Jobs", "Hire Workers", "Track Projects", "Secure Payments"]
                      : ["Find Jobs", "Get Paid Direct", "Build Profile", "Track Earnings"]
                    ).map((tag) => (
                      <span key={tag} className={`px-4 py-2 rounded-full bg-${accentColor}/10 text-${accentColor} font-semibold text-sm border border-${accentColor}/20`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature Cards */}
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.08 }}
                className="group relative bg-white rounded-2xl border border-border-medium/50 overflow-hidden card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom}/5 ${gradientTo}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white text-2xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-action transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        {isEmployer && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button
              onClick={onLogin}
              className={`group inline-flex items-center gap-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
            >
              <FaBriefcase />
              Access Interactive Web App
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AppSections;
