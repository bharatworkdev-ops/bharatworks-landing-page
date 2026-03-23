import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Aarav S.",
      role: "Student Entreprenuer",
      image: "https://i.pravatar.cc/150?img=11",
      content:
        "Found my technical co-founder within a week of joining. The AI matching actually works, avoiding the spam of typical professional networks.",
      rating: 5,
    },
    {
      name: "Priya M.",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=5",
      content:
        "The best place to discover early-stage projects that need design help. It's like Dribbble meets YCombinator for the Indian ecosystem.",
      rating: 5,
    },
    {
      name: "Rohan D.",
      role: "Angel Investor",
      image: "https://i.pravatar.cc/150?img=12",
      content:
        "I use BharatWork to track breakout projects from university campuses. The verified profiles give me confidence in who I'm speaking with.",
      rating: 4,
    },
  ];

  return (
    <section className="py-24 bg-[#050d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-action font-semibold tracking-wide uppercase text-sm mb-2">
              Wall of Love
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-text-primary">
              Don't just take our word for it
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="glass p-8 rounded-2xl border border-border-light hover:border-primary/30 transition-colors flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-action">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? "opacity-100" : "opacity-30"}
                  />
                ))}
              </div>

              <blockquote className="text-text-secondary flex-grow mb-8 text-lg leading-relaxed italic">
                "{review.content}"
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="text-text-primary font-bold">{review.name}</div>
                  <div className="text-sm text-text-secondary">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
