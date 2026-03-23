import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#050d14] border-t border-border-light pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 border-b md:border-b-0 border-border-light pb-8 md:pb-0">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-text-primary flex items-center gap-2 mb-6"
            >
              <span className="text-action text-3xl">✦</span>
              BharatWork
            </a>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              India’s Innovation Network for Builders, Founders & Creators.
              Organizing the startup ecosystem one connection at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text-secondary hover:bg-primary hover:text-text-action transition-colors"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text-secondary hover:bg-primary hover:text-text-action transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text-secondary hover:bg-primary hover:text-text-action transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text-secondary hover:bg-primary hover:text-text-action transition-colors"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-text-primary font-bold mb-6 tracking-wide">
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="about"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Download APK
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="text-text-primary font-bold mb-6 tracking-wide">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="team"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-action transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Contact Col */}
          <div>
            <h4 className="text-text-primary font-bold mb-6 text-sm tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:pandeyayush4101@gmail.com"
                  className="flex items-center gap-3 text-text-secondary hover:text-action transition-colors text-sm break-all"
                >
                  <FaEnvelope className="text-lg" />
                  <span>pandeyayush4101@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-text-secondary hover:text-action transition-colors text-sm"
                >
                  <FaPhoneAlt className="text-lg" />
                  <span>+91 9876543210</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} BharatWork Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-secondary">
            <span>Made in India</span>
            <span>✦</span>
            <span>For the World</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
