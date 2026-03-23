import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBriefcase, FaUsers, FaShieldAlt, FaStar,
  FaArrowRight, FaLock, FaMobileAlt, FaHandshake,
  FaCalendarCheck, FaChartBar, FaQuestionCircle
} from "react-icons/fa";
import logo from "../../assets/hero-mockup.png";

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState("tour"); // tour, guide, safety

  const appScreens = [
    {
      title: "Post & Manage Jobs",
      description: "Post full-time or daily-wage requirements and get applicants instantly.",
      image: "📋",
      color: "from-blue-500 to-indigo-500",
      content: (
        <div className="p-4 bg-slate-900 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xs text-text-secondary">Project: Apex Mall</div>
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center"><FaBriefcase className="text-xs text-blue-400" /></div>
          </div>
          <div className="grow flex flex-col gap-3 justify-center">
            <div className="bg-slate-800 p-3 rounded-xl border border-border-light border-l-4 border-l-blue-500">
              <div className="text-xs font-bold">Tile Masons Required</div>
              <div className="text-[10px] text-text-secondary">5 Positions • ₹900/day</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[9px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">3 Applicants</span>
                <span className="text-[9px] text-text-secondary">Active</span>
              </div>
            </div>
            <button className="mt-1 w-full py-2 bg-blue-500 hover:bg-blue-600 text-[10px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1">
              + Post New Job
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Review & Hire",
      description: "Verify workers through ratings and direct histories with safe payouts.",
      image: "🤝",
      color: "from-purple-500 to-indigo-600",
      content: (
        <div className="p-4 bg-slate-900 h-full flex flex-col justify-center gap-4">
          <div className="bg-slate-800 p-3 rounded-xl flex items-center justify-between border border-border-light">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">👷</div>
               <div>
                 <div className="text-[10px] font-bold">Ramesh Kumar</div>
                 <div className="text-[8px] text-text-secondary">Verified Mason</div>
               </div>
             </div>
             <div className="text-sm font-black text-amber-400 flex items-center gap-1">4.9 <FaStar className="text-[10px]" /></div>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl flex items-center justify-between border border-border-light">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">👷</div>
               <div>
                 <div className="text-[10px] font-bold">Sumit Singh</div>
                 <div className="text-[8px] text-text-secondary">Helper</div>
               </div>
             </div>
             <div className="text-sm font-black text-amber-400 flex items-center gap-1">4.6 <FaStar className="text-[10px]" /></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Dashboard Top header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-8 mb-12 border border-border-light relative overflow-hidden"
      >
         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent"></div>
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
           <div className="flex items-center gap-4">
             <img src={logo} alt="BharatWork" className="w-12 h-12 rounded-xl object-cover shadow-lg" />
             <div>
               <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full mb-3 flex items-center gap-2">
                 <FaBriefcase /> Employer Dashboard
               </span>
               <h2 className="text-3xl font-bold text-text-primary mb-2">Welcome Back, Construction Corp</h2>
               <p className="text-text-secondary text-sm">Reviewing workspace transparent audits & verified teams.</p>
             </div>
           </div>
           
           <div className="flex gap-4">
             <div className="bg-screen p-4 rounded-2xl border border-border-light flex flex-col text-center min-w-[120px]">
               <div className="text-xs text-text-secondary">Total Hires</div>
               <div className="text-xl font-bold text-blue-400">42</div>
             </div>
             <div className="bg-screen p-4 rounded-2xl border border-border-light flex flex-col text-center min-w-[120px]">
               <div className="text-xs text-text-secondary">Active Jobs</div>
               <div className="text-xl font-bold text-action">3</div>
             </div>
           </div>
         </div>
      </motion.div>

      {/* Quick Tabs */}
      <div className="flex justify-center mb-8 gap-4 border-b border-border-light max-w-md mx-auto">
         {["tour", "guide", "safety"].map((tab) => (
           <button
             key={tab}
             onClick={() => setActiveTab(tab)}
             className={`pb-3 px-4 text-sm font-bold capitalize transition-all relative ${
               activeTab === tab ? "text-blue-500" : "text-text-secondary hover:text-text-primary"
             }`}
           >
             {tab === "tour" ? "Dashboard Tour" : tab === "guide" ? "Hiring Guide" : "Safe Payouts"}
             {activeTab === tab && (
               <motion.div layoutId="activeTabUnderlineEmployer" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
             )}
           </button>
         ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "tour" && (
          <motion.div 
            key="tour"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <FaMobileAlt className="text-blue-500 text-xl" /> App Screenshot Tour
              </h3>
              <p className="text-text-secondary mb-8 text-sm leading-relaxed">
                Review how BharatWork delivers absolute control on construction and workspace manpower requests locally.
              </p>
              
              <div className="space-y-6">
                {appScreens.map((screen, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="p-5 rounded-2xl bg-card border border-border-light hover:border-blue-500/30 transition-all cursor-pointer flex gap-5 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-black">
                      {screen.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">{screen.title}</h4>
                      <p className="text-xs text-text-secondary">{screen.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-[240px] h-[480px] bg-slate-950 rounded-[40px] border-4 border border-slate-800 shadow-2xl p-1 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-xl z-20"></div>
                <div className="w-full h-full rounded-[35px] overflow-hidden border border-slate-800 relative">
                  {appScreens[0].content} {/* Use first screen as preview */}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "guide" && (
          <motion.div 
            key="guide"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <FaQuestionCircle className="text-blue-500 text-xl" /> How to use?
              </h3>
              
              <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-5 before:w-0.5 before:bg-border-light">
                {[
                  { step: "1", title: "Post Job Requirement", text: "Brief candidate skills needed inside your workspace node." },
                  { step: "2", title: "Verify Applicants", text: "Match with correct certifications and live history audit logs." },
                  { step: "3", title: "Hire Instantly", text: "Direct contracts transparent to both party interfaces." },
                  { step: "4", title: "Secure Checkout", text: "Mark direct daily attendance and route safe swift escrow release." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 relative z-10">
                     <div className="w-10 h-10 rounded-full bg-blue-500 text-text-primary text-sm font-black flex items-center justify-center shrink-0 border-4 border-screen">
                       {item.step}
                     </div>
                     <div>
                       <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                       <p className="text-xs text-text-secondary leading-relaxed">{item.text}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <FaChartBar className="text-blue-500 text-xl" /> How will it help?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <FaShieldAlt />, title: "Zero Agent Cuts", text: "Cut Middlemen nodes entirely from your budgeting workflows." },
                  { icon: <FaLock />, title: "Live Attendance", text: "Keep track of exact staffing counts dynamically inside map." },
                  { icon: <FaHandshake />, title: "Swift Payments", text: "Direct escrow payout releases securely tied onto payouts." },
                  { icon: <FaCalendarCheck />, title: "Safe Compliance", text: "Audit trail detailing worker safety and digital logs." }
                ].map((ben, idx) => (
                   <div key={idx} className="p-4 rounded-xl bg-card border border-border-light">
                     <div className="text-blue-500 text-xl mb-3">{ben.icon}</div>
                     <h4 className="font-bold text-xs text-text-primary mb-1">{ben.title}</h4>
                     <p className="text-[10px] text-text-secondary leading-snug">{ben.text}</p>
                   </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "safety" && (
          <motion.div 
            key="safety"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-8 rounded-3xl border border-border-light relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <FaLock className="text-3xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Safe Payouts & Transparent Escrow</h3>
                <p className="text-xs text-text-secondary">Zero budget leak audit transparency</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
               <div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                     BharatWork delivers absolute buffer against budget leakages. Traditional contracts lose upwards of <strong className="text-red-500">20%</strong> into ghost worker counts or middlemen fees.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                     All payments routed through BharatWork hit high compliance node validations. Payout logs guarantee:
                  </p>
                  <ul className="space-y-2 text-xs text-text-secondary">
                     <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Digital Timestamp Attendance Approval</li>
                     <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Multi-factor Direct Payout confirmations</li>
                     <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Live escrow dashboards showing holding locks</li>
                  </ul>
               </div>
               
               <div className="p-6 rounded-2xl bg-slate-900 border border-border-light flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border-light">
                     <span className="text-xs text-text-primary font-bold">Safe Deposit Roll</span>
                     <span className="text-blue-400 text-xs font-bold leading-none">Secured</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-xs text-text-secondary">Active Escrow Holdings</span>
                     <span className="text-lg font-bold text-text-primary">₹1,24,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-xs text-text-secondary">Workers Waiting payout</span>
                     <span className="text-sm font-bold text-blue-400">18 Workers</span>
                  </div>
                  <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 font-bold rounded-xl text-xs transition-colors mt-2">
                     Manage Escrow Deposits
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployerDashboard;
