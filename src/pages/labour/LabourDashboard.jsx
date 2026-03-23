import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHardHat, FaWallet, FaCheckCircle, FaStar,
  FaArrowRight, FaShieldAlt, FaMobileAlt, FaHandshake,
  FaCalendarCheck, FaChartLine, FaQuestionCircle
} from "react-icons/fa";
import logo from "../../assets/hero-mockup.png";

const LabourDashboard = () => {
  const [activeTab, setActiveTab] = useState("tour"); // tour, guide, agent

  const appScreens = [
    {
      title: "Home & Jobs",
      description: "Find daily wage jobs near you with instant booking and direct contact.",
      image: "🏠", // representative icon/content
      color: "from-orange-500 to-red-500",
      content: (
        <div className="p-4 bg-slate-900 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xs text-text-secondary">Location: Mumbai</div>
            <div className="w-6 h-6 rounded-full bg-action/20 flex items-center justify-center"><FaHardHat className="text-xs text-action" /></div>
          </div>
          <div className="grow flex flex-col gap-3 justify-center">
            <div className="bg-slate-800 p-3 rounded-xl border border-border-light">
              <div className="text-xs font-bold">Mason (Rajmistri)</div>
              <div className="text-[10px] text-text-secondary">₹800/day • 5 days</div>
              <button className="mt-2 w-full py-1 bg-action text-[10px] font-bold rounded-lg">Apply Now</button>
            </div>
            <div className="bg-slate-800 p-3 rounded-xl border border-border-light opacity-60">
              <div className="text-xs font-bold">Helper (Loader)</div>
              <div className="text-[10px] text-text-secondary">₹500/day • 1 day</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Reputation & Wallet",
      description: "Build your digital profile with ratings, view earnings and track absolute transparency.",
      image: "💼",
      color: "from-green-500 to-teal-500",
      content: (
        <div className="p-4 bg-slate-900 h-full flex flex-col justify-center gap-4">
          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/10 p-4 rounded-xl border border-green-500/20 text-center">
            <div className="text-[10px] text-text-secondary">Total Earnings</div>
            <div className="text-2xl font-black text-green-400">₹45,800</div>
            <div className="flex justify-center items-center gap-1 text-[10px] text-green-400 mt-1">
              <FaCheckCircle className="text-[8px]" /> Paid to Bank
            </div>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">⭐</div>
              <div>
                <div className="text-[10px] font-bold">Self Rating</div>
                <div className="text-[8px] text-text-secondary">Based on 14 jobs</div>
              </div>
            </div>
            <div className="text-sm font-black text-amber-400 flex items-center gap-1">4.8 <FaStar className="text-[10px]" /></div>
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
         <div className="absolute inset-0 bg-gradient-to-r from-action/5 via-transparent to-transparent"></div>
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
           <div className="flex items-center gap-4">
             <img src={logo} alt="BharatWork" className="w-12 h-12 rounded-xl object-cover shadow-lg" />
             <div>
               <span className="inline-block px-3 py-1 bg-action/10 text-action text-xs font-semibold rounded-full mb-3 flex items-center gap-2">
                 <FaHardHat /> Worker Dashboard
               </span>
               <h2 className="text-3xl font-bold text-text-primary mb-2">Welcome Back, Ajay</h2>
               <p className="text-text-secondary text-sm">Empowering you with transparent wages and zero middleman cuts.</p>
             </div>
           </div>
           
           <div className="flex gap-4">
             <div className="bg-screen p-4 rounded-2xl border border-border-light flex flex-col text-center min-w-[120px]">
               <div className="text-xs text-text-secondary">Earnings</div>
               <div className="text-xl font-bold text-green-400">₹8,400</div>
             </div>
             <div className="bg-screen p-4 rounded-2xl border border-border-light flex flex-col text-center min-w-[120px]">
               <div className="text-xs text-text-secondary">Jobs</div>
               <div className="text-xl font-bold text-action">12</div>
             </div>
           </div>
         </div>
      </motion.div>

      {/* Quick Tabs */}
      <div className="flex justify-center mb-8 gap-4 border-b border-border-light max-w-md mx-auto">
         {["tour", "guide", "agent"].map((tab) => (
           <button
             key={tab}
             onClick={() => setActiveTab(tab)}
             className={`pb-3 px-4 text-sm font-bold capitalize transition-all relative ${
               activeTab === tab ? "text-action" : "text-text-secondary hover:text-text-primary"
             }`}
           >
             {tab === "tour" ? "App Tour" : tab === "guide" ? "How to Use" : "Agent Portal"}
             {activeTab === tab && (
               <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-action" />
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
                <FaMobileAlt className="text-action text-xl" /> App Screenshot Tour
              </h3>
              <p className="text-text-secondary mb-8 text-sm leading-relaxed">
                Take a look at how easy it is to secure your livelihood with the BharatWork smartphone application. Everything connects on-the-go.
              </p>
              
              <div className="space-y-6">
                {appScreens.map((screen, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="p-5 rounded-2xl bg-card border border-border-light hover:border-action/30 transition-all cursor-pointer flex gap-5 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center text-action font-black">
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
                  {appScreens[0].content} {/* Use first screen as preview mockup */}
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
                <FaQuestionCircle className="text-action text-xl" /> How to use the app?
              </h3>
              
              <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-5 before:w-0.5 before:bg-border-light">
                {[
                  { step: "1", title: "Download App", text: "Download the BharatWork app from the Play Store." },
                  { step: "2", title: "Free Registration", text: "Fill in your details, skillsets, and address details." },
                  { step: "3", title: "KYC Verification", text: "Add your Aadhar Details for full verification and trust index." },
                  { step: "4", title: "Apply for Jobs", text: "View available jobs with exact wage offers nearby and apply." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 relative z-10">
                     <div className="w-10 h-10 rounded-full bg-action text-text-primary text-sm font-black flex items-center justify-center shrink-0 border-4 border-screen">
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
                <FaChartLine className="text-action text-xl" /> How will it help you?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <FaShieldAlt />, title: "Digital ID", text: "Build a rated profile to earn more reputation over time." },
                  { icon: <FaWallet />, title: "Direct Payouts", text: "Get daily wages routed direct to your bank nodes securely." },
                  { icon: <FaHandshake />, title: "Fair Dealings", text: "Zero middlemen means you receive the exact rate posted." },
                  { icon: <FaCalendarCheck />, title: "Stay Insured", text: "Get eligible for corporate benefits matching on attendance." }
                ].map((ben, idx) => (
                   <div key={idx} className="p-4 rounded-xl bg-card border border-border-light">
                     <div className="text-action text-xl mb-3">{ben.icon}</div>
                     <h4 className="font-bold text-xs text-text-primary mb-1">{ben.title}</h4>
                     <p className="text-[10px] text-text-secondary leading-snug">{ben.text}</p>
                   </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "agent" && (
          <motion.div 
            key="agent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-8 rounded-3xl border border-border-light relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-action/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-action/10 flex items-center justify-center">
                <FaHandshake className="text-3xl text-action" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Agent Transparency Dashboard</h3>
                <p className="text-xs text-text-secondary">Understanding agents / middlemen on BharatWork</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-screen border border-border-light">
                <div className="font-bold text-sm mb-1">Total Workers Managed</div>
                <div className="text-3xl font-black text-text-primary">124</div>
                <p className="text-[10px] text-text-secondary mt-1">Under registered contractors</p>
              </div>
              <div className="p-5 rounded-xl bg-screen border border-border-light">
                <div className="font-bold text-sm mb-1">Commission Transparency</div>
                <div className="text-3xl font-black text-green-400">0% Cut</div>
                <p className="text-[10px] text-text-secondary mt-1">All wages go to you</p>
              </div>
              <div className="p-5 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <div className="font-bold text-sm mb-1">Active Contractor</div>
                <div className="text-lg font-bold text-orange-400">Baldev Contractor</div>
                <div className="flex items-center gap-1 text-amber-500 text-xs mt-1">4.5 <FaStar /></div>
              </div>
            </div>

            <div className="bg-slate-900/40 p-5 rounded-xl border border-border-light">
              <h4 className="font-bold text-sm mb-2 text-text-primary">What is the "Agent" Section in BharatWork?</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Traditionally, agents (Thekadars) act as middlemen taking massive wage cuts.
                <strong className="text-action"> BharatWork disrupts this.</strong> 
                Agents on our platform are verified supervisors responsible for securing larger scale commercial projects. 
                They submit the cost directly, and the exact wage they enter is what routes to your digital profile with <strong className="text-green-400">0% platform middleman deductions</strong>. All transaction lines are logged making exploitation impossible.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LabourDashboard;
