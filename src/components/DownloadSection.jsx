import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple, FaBriefcase, FaHardHat, FaArrowRight, FaRocket } from "react-icons/fa";

const DownloadSection = ({ role, onLogin }) => {
  if (!role) return null;

  const isEmployer = role === 'employer';
  const Icon = isEmployer ? FaBriefcase : FaHardHat;

  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-screen via-card to-screen"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-action/10 rounded-full filter blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action/10 border border-action/20 mb-6">
            <FaRocket className="text-action" />
            <span className="text-action font-semibold text-sm tracking-wider uppercase">Get Started</span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Ready to {isEmployer ? 'Hire' : 'Work'}?
          </h3>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Start connecting instantly via our Web Portal, or download the app when available.
          </p>
        </motion.div>

        {/* Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl border border-border-medium/50 shadow-2xl shadow-action/10 overflow-hidden">
            {/* Top Gradient Bar */}
            <div className="h-2 bg-gradient-to-r from-action to-gradient-end"></div>

            <div className="p-8 md:p-12">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-action to-gradient-end flex items-center justify-center text-white text-5xl shadow-xl mb-8">
                <Icon />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-text-primary text-center mb-4">
                For {isEmployer ? 'Employers & Contractors' : 'Workers & Agents'}
              </h3>

              <p className="text-text-secondary text-center mb-10 max-w-lg mx-auto">
                {isEmployer
                  ? "Seamlessly hire verified labours and agents. Post jobs, track projects, and scale your workforce on demand."
                  : "Find reliable jobs easily. Connect directly with verified employers, negotiate terms, and secure daily wages into your bank."}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4">
                {isEmployer && (
                  <button
                    onClick={onLogin}
                    className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-action to-gradient-end text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Access Web Portal
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                <div className="flex gap-4">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-border-medium text-text-secondary font-semibold hover:border-action hover:text-action transition-all">
                    <FaGooglePlay />
                    <span className="hidden sm:inline">Play Store</span>
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-border-medium text-text-secondary font-semibold hover:border-action hover:text-action transition-all">
                    <FaApple />
                    <span className="hidden sm:inline">App Store</span>
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-border-light">
                <div className="flex justify-center gap-8">
                  {[
                    { label: "Active Users", value: "50K+" },
                    { label: "Success Rate", value: "98%" },
                    { label: "Support", value: "24/7" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                      <div className="text-sm text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
