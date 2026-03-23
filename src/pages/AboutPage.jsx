import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaGlobe,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaBolt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCheckCircle,
  FaArrowRight,
  FaMicrophone,
  FaRocket,
  FaLightbulb,
  FaFireAlt,
  FaChartBar,
  FaBrain,
  FaHeart,
  FaCommentDots,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const AboutPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const whyItMatters = [
    { icon: <FaPhoneAlt />, title: "No smartphone? No problem.", desc: "Jobs via simple phone calls" },
    { icon: <FaMapMarkerAlt />, title: "Hyperlocal matching", desc: "Based on real-time demand" },
    { icon: <FaBolt />, title: "Faster hiring", desc: "For businesses and contractors" },
    { icon: <FaShieldAlt />, title: "Trust-driven ecosystem", desc: "For both workers and employers" },
    { icon: <FiGlobe />, title: "Built specifically for India's", desc: "Informal workforce" },
  ];

  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden selection:bg-action/30 selection:text-action">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass border-b border-border-light sticky top-0 z-50 bg-card/70 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-text-primary flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-action to-[#ff9800] flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform">
                <span className="text-xl">B</span>
              </div>
              <span className="hidden sm:inline">
                Bharat<span className="text-action">Work</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-text-secondary hover:text-action transition-colors text-sm font-semibold tracking-wide">Home</Link>
              <Link to="/about" className="text-action text-sm font-bold tracking-wide border-b-2 border-action pb-1">About Us</Link>
              <a href="#contact" className="text-text-secondary hover:text-action transition-colors text-sm font-semibold tracking-wide">Connect Us</a>
              <Link to="/team" className="text-text-secondary hover:text-action transition-colors text-sm font-semibold tracking-wide">Team</Link>
              <Link to="/" className="bg-action text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-card to-screen">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-action/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff9800]/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-action/30 bg-card/40 backdrop-blur-md mb-6 shadow-sm">
              <FaRocket className="text-action" />
              <span className="font-bold text-sm tracking-widest uppercase text-action">About BharatWork</span>
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary mb-8 tracking-tight leading-[1.1]">
              Connecting Labour with Dignity, Employers with {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-action to-[#ff9800]">Reliability</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-light mb-8">
              BharatWork is building India's most accessible and inclusive job ecosystem—designed especially for the next billion workers who are often left behind by traditional hiring platforms.
            </p>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              In a country where millions of skilled workers still rely on word-of-mouth for jobs, we are bridging the gap between opportunity and accessibility using technology that works for everyone—<span className="font-bold text-text-primary">not just smartphone users.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-card border-y border-border-light relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-action/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-action/10 flex items-center justify-center text-action text-2xl shrink-0">
                <FaUsers />
              </div>
              About Us
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              BharatWork is more than a platform—it's a commitment to India's workforce transformation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Story</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Founded in 2025, BharatWork emerged from a simple observation: millions of skilled workers in India remain disconnected from formal employment opportunities.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our founders, having witnessed the challenges of the unorganized sector firsthand, set out to create a solution that bridges the digital divide.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                What started as a vision to connect workers with jobs has evolved into a comprehensive ecosystem that empowers both labor and employers.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Today, we serve as the bridge between opportunity and accessibility, ensuring that every worker, regardless of their access to technology, can find dignified work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-action text-xl mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-primary">Inclusion First</h4>
                    <p className="text-text-secondary">Technology should serve everyone, not just the digitally connected.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-action text-xl mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-primary">Transparency</h4>
                    <p className="text-text-secondary">Clear communication and fair practices for all stakeholders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-action text-xl mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-primary">Innovation</h4>
                    <p className="text-text-secondary">Leveraging AI and voice technology to solve real-world problems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-action text-xl mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-text-primary">Impact</h4>
                    <p className="text-text-secondary">Every decision we make is measured by its effect on workers' lives.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Strip */}
      <section className="py-16 bg-card border-y border-border-light relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-action/5 to-transparent border border-action/20 relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-action/10 rounded-bl-[100px] -z-10"></div>
              <h2 className="text-2xl font-black text-text-primary mb-4 flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center text-action text-xl shrink-0">
                  <FiGlobe />
                </div>
                Our Mission
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To empower every worker in Bharat—whether digitally connected or not—with equal access to job opportunities, fair wages, and dignity of work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-[#ff9800]/5 to-transparent border border-[#ff9800]/20 relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff9800]/10 rounded-bl-[100px] -z-10"></div>
              <h2 className="text-2xl font-black text-text-primary mb-4 flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff9800]/10 flex items-center justify-center text-[#ff9800] text-xl shrink-0">
                  <FaBrain />
                </div>
                Our Vision
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                To become India's default employment infrastructure, powering job access across villages, towns, and cities—ensuring that no worker is left behind due to lack of technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do & AI Voice System */}
      <section className="py-24 relative overflow-hidden bg-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-action/10 flex items-center justify-center text-action text-2xl shrink-0">
                  <FaLightbulb />
                </div>
                What We Do
              </h2>
              <p className="text-xl text-text-primary font-medium mb-6">
                BharatWork is not just another job platform—it's a <span className="text-action">voice-enabled employment network.</span>
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                We enable employers to post jobs effortlessly, and through our AI-powered voice calling system, we reach workers who don't have smartphones or internet access.
              </p>

              <div className="glass p-8 rounded-2xl border-2 border-action/30 relative overflow-hidden bg-card mb-8">
                <div className="absolute top-0 right-0 w-24 h-24 bg-action/10 rounded-bl-[100px]"></div>
                <FaMicrophone className="text-4xl text-action mb-4" />
                <p className="text-text-secondary mb-4 italic">Workers simply receive a call and respond:</p>
                <div className="bg-screen p-4 rounded-xl border-l-4 border-action font-medium text-text-primary text-xl">
                  "Agar aap kaam chahte hain, to 1 dabayein."
                </div>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed">
                This ensures inclusion at scale, bringing informal workers into the formal economy seamlessly.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-gradient-to-b from-card to-screen rounded-[2.5rem] p-10 border border-border-light shadow-2xl relative">
                <h3 className="text-3xl font-extrabold text-text-primary mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-action/10 flex items-center justify-center text-action text-2xl shrink-0">
                    <FaFireAlt />
                  </div>
                  Why BharatWork Matters
                </h3>
                <div className="space-y-6">
                  {whyItMatters.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-action/10 text-action flex items-center justify-center shrink-0 text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-text-primary">{item.title}</h4>
                        <p className="text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-24 bg-card border-y border-border-light relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-action/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-action/10 flex items-center justify-center text-action text-2xl shrink-0">
                <FaChartBar />
              </div>
              The Problem We're Solving
            </h2>

            <div className="grid md:grid-cols-3 gap-8 my-12 text-left">
              <div className="glass p-8 rounded-2xl border-t-4 border-action bg-screen hover:-translate-y-2 transition-transform shadow-lg">
                <div className="text-4xl font-black text-text-primary mb-2">400M+</div>
                <p className="text-text-secondary font-medium">Informal workers in India relying on fragmented networks.</p>
              </div>
              <div className="glass p-8 rounded-2xl border-t-4 border-[#ff9800] bg-screen hover:-translate-y-2 transition-transform shadow-lg">
                <div className="text-4xl font-black text-text-primary mb-2"><span className="text-3xl text-text-secondary">No</span> Web</div>
                <p className="text-text-secondary font-medium">Majority lack access to digital job platforms or smart devices.</p>
              </div>
              <div className="glass p-8 rounded-2xl border-t-4 border-action bg-screen hover:-translate-y-2 transition-transform shadow-lg">
                <div className="text-4xl font-black text-text-primary mb-2"><span className="text-3xl text-text-secondary">Slow</span> Hiring</div>
                <p className="text-text-secondary font-medium">Employers struggle with reliable, fast, and verified hiring.</p>
              </div>
            </div>

            <p className="text-2xl text-text-primary font-medium bg-action/10 py-6 px-8 rounded-2xl inline-block border border-action/20">
              BharatWork solves this by creating a bridge between <span className="text-action">offline workers</span> and <span className="text-action">online opportunities.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built For Impact & Our Promise */}
      <section className="py-24 bg-gradient-to-b from-card to-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="glass p-12 rounded-[3rem] border-2 border-border-light shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-action/10 to-transparent pointer-events-none"></div>
            <div className="w-16 h-16 rounded-2xl bg-action/10 flex items-center justify-center text-action text-3xl mx-auto mb-6">
              <FaHandshake />
            </div>
            <h2 className="text-4xl font-extrabold text-text-primary mb-6">Built For Impact</h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
              We are driven by the belief that:
            </p>
            <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-action to-[#ff9800] mb-8 leading-tight max-w-3xl mx-auto">
              "Opportunity should not depend on the device you own."
            </h3>
            <p className="text-xl text-text-primary font-medium max-w-2xl mx-auto">
              BharatWork is not just a product—it's a movement towards economic inclusion at scale.
            </p>

            <hr className="my-12 border-border-light w-1/2 mx-auto" />

            <div className="w-16 h-16 rounded-2xl bg-action/10 flex items-center justify-center text-action text-3xl mx-auto mb-6">
              <FaCommentDots />
            </div>
            <h2 className="text-3xl font-extrabold text-text-primary mb-6">Our Promise</h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              We believe every conversation can create opportunity. When you reach out, you're not just contacting a company—you're becoming part of a mission to empower millions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connect With Us / Contact Section */}
      <section className="py-24 relative overflow-hidden bg-screen border-t border-border-light" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 rounded-2xl bg-action/10 flex items-center justify-center text-action text-3xl mx-auto mb-6">
              <FaPhoneAlt />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">Connect With Us</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Let's build the future of work in Bharat—together. Whether you're an employer looking to hire, a partner wanting to collaborate, or someone who believes in our mission—we'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-light pb-2 inline-flex items-center gap-2">
                  <FaHandshake className="text-action" /> Get in Touch
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: <FaEnvelope />, label: "General Inquiries", value: "hello@bharatwork.com", href: "mailto:hello@bharatwork.com" },
                    { icon: <FaHandshake />, label: "Partnerships & Collaborations", value: "partnerships@bharatwork.com", href: "mailto:partnerships@bharatwork.com" },
                    { icon: <FaUsers />, label: "For Hiring / Employers", value: "hire@bharatwork.com", href: "mailto:hire@bharatwork.com" },
                    { icon: <FaPhoneAlt />, label: "Support (Workers & Job Seekers)", value: "+91 XXXXX XXXXX", href: null },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-card border border-border-light flex items-center justify-center text-text-secondary group-hover:text-action group-hover:border-action transition-colors shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-text-secondary font-medium uppercase tracking-wider">{item.label}</div>
                        {item.href
                          ? <a href={item.href} className="text-lg text-text-primary font-bold hover:text-action transition-colors">{item.value}</a>
                          : <div className="text-lg text-text-primary font-bold">{item.value}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-light pb-2 inline-flex items-center gap-2">
                  <FaRocket className="text-action" /> Work With Us
                </h3>
                <p className="text-text-secondary mb-4">Want to be part of BharatWork's journey?</p>
                <ul className="mb-6 space-y-2 text-text-primary font-medium">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-action" /> Become a Hiring Partner</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-action" /> Join as a Ground Network Associate</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-action" /> Collaborate as a Government / NGO Partner</li>
                </ul>
                <div className="inline-flex items-center gap-3 bg-action/10 px-6 py-3 rounded-xl border border-action/20">
                  <FaEnvelope className="text-action text-xl" />
                  <a href="mailto:careers@bharatwork.com" className="text-action font-bold hover:underline">careers@bharatwork.com</a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-light pb-2 inline-flex items-center gap-2">
                  <FaMapMarkerAlt className="text-action" /> Our Presence
                </h3>
                <div className="flex items-center gap-4 mb-2">
                  <FaMapMarkerAlt className="text-2xl text-action" />
                  <span className="text-lg text-text-primary font-bold">Lucknow, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary font-medium ml-10">
                  <FiGlobe className="text-action" /> Expanding across Bharat
                </div>
                <p className="text-text-secondary mt-4 leading-relaxed">
                  Headquartered in Lucknow, we're building a nationwide network to serve workers and employers from every corner of India.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Our ground network associates ensure local presence and support in key cities and rural areas.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-light pb-2 inline-flex items-center gap-2">
                  <FaHeart className="text-action" /> Follow Our Journey
                </h3>
                <p className="text-text-secondary mb-4">Stay updated with our latest developments and impact stories.</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-card border border-border-light flex items-center justify-center text-text-secondary hover:text-action hover:border-action transition-colors">
                    <FaGlobe className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-card border border-border-light flex items-center justify-center text-text-secondary hover:text-action hover:border-action transition-colors">
                    <FaPhoneAlt className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-card border border-border-light flex items-center justify-center text-text-secondary hover:text-action hover:border-action transition-colors">
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
                <p className="text-text-secondary mt-4 leading-relaxed">
                  Follow us for updates on new features, success stories, and opportunities to get involved in our mission.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Your support and feedback drive us to create better solutions for India's workforce.
                </p>
              </div>
            </motion.div>

            {/* Quick Connect Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-card glass p-8 md:p-10 rounded-[2rem] border-2 border-border-light shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-action/10 rounded-bl-full pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-action/10 flex items-center justify-center text-action text-xl">
                    <FaBolt />
                  </div>
                  <h3 className="text-3xl font-extrabold text-text-primary">Quick Connect</h3>
                </div>
                <p className="text-text-secondary mb-8">Fill out the form and our team will get back within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      <FaCheckCircle />
                    </div>
                    <h4 className="text-2xl font-bold text-text-primary mb-2">Thank You!</h4>
                    <p className="text-text-secondary">We have received your message and will reach out shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-text-secondary mb-2 uppercase tracking-wide">Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-screen border-2 border-border-light rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-action transition-colors"
                        placeholder="Your full name" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-text-secondary mb-2 uppercase tracking-wide">Phone Number</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-screen border-2 border-border-light rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-action transition-colors"
                          placeholder="+91" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-text-secondary mb-2 uppercase tracking-wide">Email</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-screen border-2 border-border-light rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-action transition-colors"
                          placeholder="you@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-secondary mb-2 uppercase tracking-wide">Your Message</label>
                      <textarea required rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-screen border-2 border-border-light rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-action transition-colors resize-none"
                        placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit"
                      className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-action to-[#ff9800] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-action/40 hover:-translate-y-1 text-lg"
                    >
                      <span>Let's Connect</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="border-t border-border-light py-12 bg-card">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-4">
            Bharat<span className="text-action">Work</span>
          </h3>
          <p className="text-text-secondary text-sm">
            India's most accessible and inclusive job ecosystem, ensuring that no worker is left behind.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-3 text-sm text-text-secondary font-medium">
            <li><Link to="/" className="hover:text-action transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-action transition-colors">About Us</Link></li>
            <li><a href="#contact" className="hover:text-action transition-colors">Connect Us</a></li>
            <li><Link to="/team" className="hover:text-action transition-colors">Team</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4 uppercase tracking-widest text-xs">For Employers</h4>
          <ul className="space-y-3 text-sm text-text-secondary font-medium">
            <li><Link to="/employer/auth/login" className="hover:text-action transition-colors">Login</Link></li>
            <li><Link to="/employer/auth/signup" className="hover:text-action transition-colors">Sign Up</Link></li>
            <li><a href="mailto:hire@bharatwork.com" className="hover:text-action transition-colors">Post Jobs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4 uppercase tracking-widest text-xs">For Workers</h4>
          <ul className="space-y-3 text-sm text-text-secondary font-medium">
            <li><Link to="/labour/auth/login" className="hover:text-action transition-colors">Login</Link></li>
            <li><Link to="/labour/auth/signup" className="hover:text-action transition-colors">Sign Up</Link></li>
            <li><div className="cursor-pointer hover:text-action transition-colors">Support: +91 XXXXX</div></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border-light mt-12 pt-8 text-center text-sm font-medium text-text-secondary">
        <p>&copy; {new Date().getFullYear()} BharatWork. Building for Bharat.</p>
      </div>
    </div>
  </footer>
);

export default AboutPage;
