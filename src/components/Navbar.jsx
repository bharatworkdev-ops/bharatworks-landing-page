import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight, FiArrowLeft, FiHome, FiGrid, FiLayers, FiInfo, FiPhone } from "react-icons/fi";

const Navbar = ({ role, onReset, onLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", icon: <FiHome />, id: "home" },
    { name: "Features", href: "/#features", icon: <FiGrid />, id: "features" },
    { name: "Platform", href: "/#apps", icon: <FiLayers />, id: "apps" },
    { name: "About", href: "/about", icon: <FiInfo />, id: "about" },
    { name: "Contact", href: "/about#contact", icon: <FiPhone />, id: "contact" },
  ];

  const roleLabels = {
    employer: "Employer Portal",
    labour: "Worker Portal"
  };

  const roleColors = {
    employer: "from-action to-gradient-end",
    labour: "from-amber-500 to-orange-500"
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-border-medium/50 shadow-lg shadow-action/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo & Role Badge */}
            <div className="flex items-center gap-4">
              <a href="#home" className="flex items-center gap-3 group">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${role ? roleColors[role] : 'from-action to-gradient-end'} flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                  <span className="text-xl font-bold">B</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold text-text-primary">
                    Bharat<span className="text-action">Work</span>
                  </span>
                </div>
              </a>

              {role && (
                <>
                  <span className="hidden sm:block text-border-medium h-6 w-px bg-current"></span>
                  <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${roleColors[role]}/10 border border-action/20`}>
                    <span className="text-[11px] uppercase tracking-widest font-bold text-action">
                      {roleLabels[role]}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeLink === link.id
                      ? "text-action"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {activeLink === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-action/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              {role ? (
                <>
                  <button
                    onClick={onReset}
                    className="flex items-center gap-2 px-4 py-2 text-text-secondary font-semibold hover:text-action transition-colors"
                  >
                    <FiArrowLeft className="text-sm" />
                    Switch
                  </button>
                  <button
                    onClick={onLogin}
                    className="group flex items-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-action/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Login
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              ) : (
                <a
                  href="#features"
                  className="group flex items-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-action/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Started
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-border-light"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX size={20} className="text-text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu size={20} className="text-text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-action/10 border border-border-light overflow-hidden"
            >
              <div className="p-6">
                {/* Mobile Nav Links */}
                <div className="space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActiveLink(link.id);
                      }}
                      className={`flex items-center gap-4 px-4 py-3 rounded-2xl font-semibold transition-all ${
                        activeLink === link.id
                          ? "bg-action/10 text-action"
                          : "text-text-secondary hover:bg-border-light/50 hover:text-text-primary"
                      }`}
                    >
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        activeLink === link.id ? "bg-action text-white" : "bg-border-light text-text-secondary"
                      }`}>
                        {link.icon}
                      </span>
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border-light my-4"></div>

                {/* Mobile Actions */}
                <div className="space-y-3">
                  {role ? (
                    <>
                      <button
                        onClick={() => {
                          onReset();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-border-medium text-text-secondary font-semibold hover:border-action hover:text-action transition-all"
                      >
                        <FiArrowLeft />
                        Switch Role
                      </button>
                      <button
                        onClick={() => {
                          onLogin();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-4 py-3 rounded-2xl font-bold shadow-lg"
                      >
                        Login as {role === 'employer' ? 'Employer' : 'Worker'}
                        <FiArrowRight />
                      </button>
                    </>
                  ) : (
                    <a
                      href="#features"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-action to-gradient-end text-white px-4 py-3 rounded-2xl font-bold shadow-lg"
                    >
                      Get Started
                      <FiArrowRight />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
