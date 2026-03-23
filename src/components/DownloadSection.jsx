import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple, FaBriefcase, FaHardHat, FaArrowRight } from "react-icons/fa";

const DownloadSection = ({ role, onLogin }) => {
  if (!role) return null;

  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden bg-screen"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-action/5 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12 text-center">
        <h2 className="text-action font-semibold uppercase tracking-wider text-sm mb-2">
           Get Started
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
           {role === 'employer' ? 'Ready to Hire?' : 'Ready to Work?'}
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg mb-4">
           Start connecting instantly via our Web Portal, or download the app.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {role === 'employer' && (
          <motion.div
            id="download-employer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center border border-border-light shadow-xl bg-card rounded-[2rem] relative overflow-hidden group flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-action to-[#ff9800]"></div>
            <div className="w-24 h-24 rounded-3xl bg-action/5 border border-action/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaBriefcase className="text-5xl text-action" />
            </div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">For Employers & Contractors</h3>
            <p className="text-text-secondary mb-10 max-w-xl text-lg">
              Seamlessly hire verified labours and agents. Post jobs, track projects, and scale your workforce on demand.
            </p>
            <div className="flex flex-col gap-4 w-full md:w-3/4">
              <button 
                onClick={onLogin}
                className="w-full flex items-center justify-center gap-3 bg-action text-white px-6 py-4 rounded-xl font-bold hover:bg-[#e66000] transition-all hover:-translate-y-1 shadow-md text-lg"
              >
                <span>Access Web Portal</span>
                <FaArrowRight />
              </button>
              <div className="flex gap-4 mt-2">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-border-light/50 text-text-secondary px-4 py-3 rounded-xl font-semibold hover:bg-border-light/80 transition-colors text-sm">
                  <FaGooglePlay className="text-lg" />
                  <span>Play Store</span>
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-border-light/50 text-text-secondary px-4 py-3 rounded-xl font-semibold hover:bg-border-light/80 transition-colors text-sm">
                  <FaApple className="text-lg" />
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {role === 'labour' && (
          <motion.div
            id="download-labour"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center border border-border-light shadow-xl bg-card rounded-[2rem] relative overflow-hidden group flex flex-col items-center hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-action to-[#ff9800]"></div>
            <div className="w-24 h-24 rounded-3xl bg-action/5 border border-action/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FaHardHat className="text-5xl text-action" />
            </div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">For Workers & Agents</h3>
            <p className="text-text-secondary mb-10 max-w-xl text-lg">
              Find reliable jobs easily. Connect directly with verified employers, negotiate terms, and secure daily wages into your bank.
            </p>
            <div className="flex flex-col gap-4 w-full md:w-3/4">
              <button 
                onClick={onLogin}
                className="w-full flex items-center justify-center gap-3 bg-action text-white px-6 py-4 rounded-xl font-bold hover:bg-[#e66000] transition-all hover:-translate-y-1 shadow-md text-lg"
              >
                <span>Access Web Portal</span>
                <FaArrowRight />
              </button>
              <div className="flex gap-4 mt-2">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-border-light/50 text-text-secondary px-4 py-3 rounded-xl font-semibold hover:bg-border-light/80 transition-colors text-sm">
                  <FaGooglePlay className="text-lg" />
                  <span>Play Store</span>
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-border-light/50 text-text-secondary px-4 py-3 rounded-xl font-semibold hover:bg-border-light/80 transition-colors text-sm">
                  <FaApple className="text-lg" />
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DownloadSection;
