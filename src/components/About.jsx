  import React from "react";
  import { motion } from "framer-motion";
  import { FaUsers, FaLightbulb, FaRobot, FaRocket } from "react-icons/fa";

  const About = () => {
    const cards = [
      {
        title: "Direct Connections",
        icon: <FaUsers className="text-3xl text-action" />,
        description:
          "Eliminate the middleman. Employers connect directly with local agents and daily wage workers.",
        delay: 0.1,
      },
      {
        title: "Verified Workers",
        icon: <FaRocket className="text-3xl text-action" />,
        description:
          "Find reliable and thoroughly verified manual labours to ensure consistent progress for your projects.",
        delay: 0.2,
      },
      {
        title: "Smart Matching",
        icon: <FaRobot className="text-3xl text-action" />,
        description:
          "Our intelligent system instantly connects you with the right employers or manual workers based on location and real-time availability.",
        delay: 0.3,
      },
      {
        title: "Transparent Pricing",
        icon: <FaLightbulb className="text-3xl text-action" />,
        description:
          "Negotiate and agree on clear terms with zero hidden fees. Fair wages for honest work.",
        delay: 0.4,
      },
    ];

    return (
      <section id="about" className="py-24 relative overflow-hidden bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-action font-semibold tracking-wide uppercase text-sm mb-2">
                About BharatWork
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                Empowering India's <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-action to-action">
                  Workforce
                </span>
              </h3>
              <div className="max-w-4xl mx-auto mt-6">
                <p className="text-text-secondary text-lg leading-relaxed mb-8 text-center px-4">
                  The Indian unorganized labor sector has faced inefficiencies, unfair middleman commissions, and lack of trust for decades. 
                  <strong className="text-text-primary"> BharatWork was built to change this.</strong>
                </p>

                {/* Point-by-point Motive Breakdown */}
                <div className="text-left bg-screen p-8 md:p-10 rounded-[2rem] border border-border-light shadow-xl mt-8">
                  <h4 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-8 border-b border-border-light pb-4">
                    Why Use BharatWork?
                  </h4>
                  
                  <ul className="space-y-8">
                    <li className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-action/10 flex items-center justify-center shrink-0 border border-action/20 mt-1">
                        <span className="text-action font-bold text-xl">1</span>
                      </div>
                      <div>
                        <strong className="text-text-primary text-xl block mb-2">Eradicating Middlemen & Exploitation</strong>
                        <span className="text-text-secondary leading-relaxed block text-base">
                          For decades, daily wage workers have lost a significant portion of their earnings to unorganized agents. BharatWork connects labours and employers directly, ensuring that workers get fair, transparent compensation for their hard work.
                        </span>
                      </div>
                    </li>

                    <li className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-success-green/10 flex items-center justify-center shrink-0 border border-success-green/20 mt-1">
                        <span className="text-success-green font-bold text-xl">2</span>
                      </div>
                      <div>
                        <strong className="text-text-primary text-xl block mb-2">Instant, Verified Hiring</strong>
                        <span className="text-text-secondary leading-relaxed block text-base">
                          Finding reliable manual labor or verified agents on short notice is a massive hurdle. Our platform guarantees access to KYC-verified profiles with ratings and real-time availability, completely removing the guesswork from hiring.
                        </span>
                      </div>
                    </li>

                    <li className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-text-primary/5 flex items-center justify-center shrink-0 border border-text-primary/10 mt-1">
                        <span className="text-text-primary font-bold text-xl">3</span>
                      </div>
                      <div>
                        <strong className="text-text-primary text-xl block mb-2">Two Tailored App Experiences</strong>
                        <span className="text-text-secondary leading-relaxed block text-base">
                          By providing a dedicated <strong>Employer App</strong> (for posting jobs & tracking projects) and a dedicated <strong>Labour App</strong> (for discovering work & securing wages), we ensure tools are perfectly optimized for each user's exact needs.
                        </span>
                      </div>
                    </li>

                    <li className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-action/10 flex items-center justify-center shrink-0 border border-action/20 mt-1">
                        <span className="text-action font-bold text-xl">4</span>
                      </div>
                      <div>
                        <strong className="text-text-primary text-xl block mb-2">Organizing the Unorganized Sector</strong>
                        <span className="text-text-secondary leading-relaxed block text-base">
                          Our motive is to bring dignity, transparency, and digital efficiency to the foundation of India's workforce, providing them with the technological tools previously reserved only for corporate sectors.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="bg-screen p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-border-light hover:border-action/40 group relative overflow-hidden shadow-sm"
              >
                {/* Background Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-action/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 shadow-sm border border-border-light group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-3 tracking-tight">
                  {card.title}
                </h4>
                <p className="text-text-secondary leading-relaxed text-sm group-hover:text-text-primary transition-colors">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default About;
