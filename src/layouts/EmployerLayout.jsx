import React from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBriefcase, FaArrowLeft, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const EmployerLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, clearRole } = useAuth();

  const isAuthPage = location.pathname.includes("/auth/");

  const handleLogout = () => {
    logout();
    clearRole();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-screen via-card to-screen">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass border-b border-border-light sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Back */}
            <div className="flex items-center gap-4">
              {!isAuthPage && (
                <button
                  onClick={() => navigate("/")}
                  className="p-2 hover:bg-action/10 rounded-lg transition-colors text-text-secondary hover:text-text-primary"
                >
                  <FaArrowLeft className="text-lg" />
                </button>
              )}
              <Link
                to="/"
                className="flex items-center gap-2 text-xl font-bold text-text-primary"
              >
                <div className="w-10 h-10 rounded-lg bg-action/10 flex items-center justify-center">
                  <FaBriefcase className="text-action text-xl" />
                </div>
                <span className="hidden sm:inline">
                  Bharat<span className="text-action">Work</span>
                </span>
                <span className="sm:hidden">BW</span>
              </Link>
            </div>

            {/* Role Badge */}
            <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full bg-action/10 border border-action/20">
                <span className="text-action font-semibold text-sm flex items-center gap-2">
                  <FaBriefcase className="text-xs" />
                  Employer
                </span>
              </div>

              {/* Logout Button - Only show when authenticated */}
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-action/10 rounded-lg transition-colors text-text-secondary hover:text-action"
                title="Logout"
              >
                <FaSignOutAlt className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      {!isAuthPage && (
        <footer className="border-t border-border-light py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-secondary text-sm">
                &copy; {new Date().getFullYear()} BharatWork. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-text-secondary">
                <a href="#" className="hover:text-action transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-action transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-action transition-colors">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default EmployerLayout;
