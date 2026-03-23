import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaClock,
  FaArrowRight,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Employment", "Technology", "Worker Rights", "Success Stories"];

  const blogPosts = [
    {
      id: 1,
      title: "How BharatWork is Transforming India's Labour Market",
      excerpt: "Discover how our platform is connecting over 10,000 verified workers with employers across India, eliminating middlemen and ensuring fair wages.",
      category: "Employment",
      author: "Rajesh Kumar",
      date: "March 15, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1504307651254-35680f256dfd?w=800",
    },
    {
      id: 2,
      title: "Digital Payments for Daily Wage Workers: A Complete Guide",
      excerpt: "Learn how direct digital payments are helping workers receive their wages securely and instantly, without cash handling delays.",
      category: "Technology",
      author: "Priya Sharma",
      date: "March 12, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cf002d30bd7?w=800",
    },
    {
      id: 3,
      title: "Understanding Worker Rights in the Unorganized Sector",
      excerpt: "A comprehensive guide to knowing your rights as a daily wage worker in India's construction and industrial sectors.",
      category: "Worker Rights",
      author: "Amit Patel",
      date: "March 10, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581091226861-ff2dd6101144?w=800",
    },
    {
      id: 4,
      title: "From Labour to Contractor: Success Story of Suresh Yadav",
      excerpt: "How one worker from Mumbai built a team of 50+ labourers and became a successful contractor through BharatWork.",
      category: "Success Stories",
      author: "Neha Desai",
      date: "March 8, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    },
    {
      id: 5,
      title: "5 Tips for Employers Hiring Daily Wage Workers",
      excerpt: "Essential advice for employers on finding, hiring, and managing verified workers for construction and industrial projects.",
      category: "Employment",
      author: "Vikram Singh",
      date: "March 5, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef5e?w=800",
    },
    {
      id: 6,
      title: "KYC Verification: Why It Matters for Worker Trust",
      excerpt: "Understanding the importance of verified profiles and how KYC builds trust between employers and workers.",
      category: "Technology",
      author: "Anita Reddy",
      date: "March 3, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-screen via-card to-screen">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass border-b border-border-light sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-text-primary"
            >
              Bharat<span className="text-action">Work</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-text-secondary hover:text-action transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-text-secondary hover:text-action transition-colors">
                About
              </Link>
              <Link to="/team" className="text-text-secondary hover:text-action transition-colors">
                Team
              </Link>
              <Link to="/blog" className="text-action font-semibold">
                Blog
              </Link>
              <Link
                to="/"
                className="bg-action hover:bg-[#d6761c] text-text-primary px-5 py-2 rounded-full font-medium transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-action to-action">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Insights, news, and stories about India's workforce, technology, and employment
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-text-placeholder" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border-light bg-card text-text-primary placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-action/30 focus:border-action transition-all"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-text-secondary">
                <FaFilter />
                <span>Filter:</span>
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-action text-text-primary"
                      : "glass text-text-secondary hover:border-action/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-text-secondary">
                No articles found. Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group glass rounded-2xl overflow-hidden border border-border-light hover:border-action/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-action/90 text-text-primary text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendar className="text-action" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-action" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-action transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        By <span className="font-medium text-text-primary">{post.author}</span>
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-action font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Read More <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Inline Footer component for blog page
const Footer = () => (
  <footer className="border-t border-border-light py-12 bg-card">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-4">
            Bharat<span className="text-action">Work</span>
          </h3>
          <p className="text-text-secondary text-sm">
            India's trusted labour booking platform connecting employers with verified workers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><Link to="/" className="hover:text-action transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-action transition-colors">About</Link></li>
            <li><Link to="/blog" className="hover:text-action transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4">For Employers</h4>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><Link to="/employer/auth/login" className="hover:text-action transition-colors">Login</Link></li>
            <li><Link to="/employer/auth/signup" className="hover:text-action transition-colors">Sign Up</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text-primary mb-4">For Workers</h4>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li><Link to="/labour/auth/login" className="hover:text-action transition-colors">Login</Link></li>
            <li><Link to="/labour/auth/signup" className="hover:text-action transition-colors">Sign Up</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border-light mt-8 pt-8 text-center text-sm text-text-secondary">
        <p>&copy; {new Date().getFullYear()} BharatWork. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default BlogPage;
