import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Navbar = ({ role, onReset, onLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Features", href: "/#features" },
    { name: "Platform", href: "/#apps" },
    { name: "About Us", href: "/about" },
    { name: "Connect Us", href: "/about#contact" },
  ];

  const roleLabels = {
    employer: "Employer Portal",
    labour: "Worker Portal"
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/70 backdrop-blur-xl border-b border-border-light shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Switcher */}
          <div className="flex items-center gap-4">
            <a href="#home" className="text-2xl font-extrabold tracking-tight text-text-primary flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-action to-[#ff9800] flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform">
                <span className="text-xl">B</span>
              </div>
              <span className="hidden sm:inline">
                Bharat<span className="text-action">Work</span>
              </span>
            </a>
            
            {role && (
              <div className="flex items-center gap-2">
                <span className="text-border-light h-6 border-l hidden sm:block"></span>
                <span className="px-3 py-1 bg-action/10 text-action text-[10px] uppercase tracking-widest font-bold rounded-full">
                  {roleLabels[role]}
                </span>
              </div>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-action transition-colors text-sm font-semibold tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 border-l border-border-light pl-8">
              <button
                onClick={onReset}
                className="flex items-center gap-2 text-text-secondary font-bold hover:text-action transition-colors text-sm"
              >
                <FiArrowLeft /> Switch Role
              </button>
              <button
                 onClick={onLogin}
                 className="group flex items-center justify-center gap-2 bg-action text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                 <span>Login as {role === 'employer' ? 'Employer' : 'Labour'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-3xl border-b border-border-light overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-action text-xl font-bold w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-px bg-border-light my-2"></div>
              <button
                onClick={() => {
                  onReset();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 text-text-secondary font-bold text-lg w-full text-center"
              >
                <FiArrowLeft /> Switch Role
              </button>
              <button
                onClick={() => {
                  onLogin();
                  setMobileMenuOpen(false);
                }}
                className="bg-action text-white px-8 py-4 rounded-xl font-bold w-full text-center text-xl mt-2 shadow-lg"
              >
                Login as {role === 'employer' ? 'Employer' : 'Worker'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
