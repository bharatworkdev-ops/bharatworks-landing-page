import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-border-light rounded-xl mb-4 overflow-hidden bg-black/20 backdrop-blur-sm transition-colors hover:bg-screen">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium text-lg text-text-primary">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-action"
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-text-secondary leading-relaxed border-t border-border-light pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is BharatWork free?",
      answer:
        "Yes, the core features of BharatWork including networking, project discovery, and messaging are completely free for students and early-stage founders. We may introduce premium features for enterprises and advanced job postings in the future.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We employ industry-standard encryption for all data at rest and in transit. Your private messages are end-to-end encrypted, and you have full control over what parts of your profile are public.",
    },
    {
      question: "How can I download the APK?",
      answer:
        "You can download the secure, signed APK directly from our Download section. Ensure you enable 'Install from Unknown Sources' in your Android settings to install it manually. This version is functionally identical to the Play Store build.",
    },
    {
      question: "Who can join BharatWork?",
      answer:
        "While we focus on Indian college students, early professionals, startup founders, developers, and creators, anyone passionate about building and innovation is welcome to join our community.",
    },
    {
      question: "Is it available outside India?",
      answer:
        "Currently, BharatWork is optimized for the Indian innovation ecosystem, including localized events and startup discovery. However, the app can be downloaded globally via the App Store and Play Store for international collaboration.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#0a121d] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-action font-semibold tracking-wide uppercase text-sm mb-2">
              Got Questions?
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-text-primary">
              Frequently Asked Questions
            </h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
