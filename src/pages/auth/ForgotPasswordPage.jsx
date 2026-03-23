import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated password reset - replace with actual API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="glass rounded-3xl p-8 md:p-10 border border-border-light">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-2xl bg-action/10 flex items-center justify-center mx-auto mb-4"
                >
                  <FaEnvelope className="text-3xl text-action" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                  Forgot Password?
                </h2>
                <p className="text-text-secondary">
                  No worries! Enter your email and we'll send you reset
                  instructions.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="text-text-placeholder" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border-light bg-input text-text-primary placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-action/30 focus:border-action transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-action hover:bg-[#d6761c] text-text-primary font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-action/20 hover:shadow-action/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-text-primary/30 border-t-text-primary rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-success-green/10 flex items-center justify-center mx-auto mb-6"
              >
                <FaCheckCircle className="text-5xl text-success-green" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Check Your Email
              </h2>
              <p className="text-text-secondary mb-8">
                We've sent password reset instructions to{" "}
                <span className="text-text-primary font-medium">{email}</span>
              </p>
              <p className="text-sm text-text-secondary">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-action font-semibold hover:underline"
                >
                  try again
                </button>
              </p>
            </div>
          )}

          {/* Back to Login */}
          <div className="mt-8 pt-6 border-t border-border-light">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <FaArrowLeft className="text-sm" />
              Back to Sign In
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;
