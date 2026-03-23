import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Layouts
import EmployerLayout from "./layouts/EmployerLayout";
import LabourLayout from "./layouts/LabourLayout";

// Pages
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

// Original landing page components (for reference/home)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppSections from "./components/AppSections";
import DownloadSection from "./components/DownloadSection";
import About from "./components/About";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import EmployerDashboard from "./pages/employer/EmployerDashboard";
import LabourDashboard from "./pages/labour/LabourDashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />

          {/* Employer Routes */}
          <Route path="/employer" element={<EmployerLayout />}>
            <Route path="auth/login" element={<LoginPage />} />
            <Route path="auth/signup" element={<SignupPage />} />
            <Route path="auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="dashboard" element={<EmployerDashboard />} />
            <Route index element={<Navigate to="/employer/auth/login" replace />} />
          </Route>

          {/* Labour Routes */}
          <Route path="/labour" element={<LabourLayout />}>
            <Route path="auth/login" element={<LoginPage />} />
            <Route path="auth/signup" element={<SignupPage />} />
            <Route path="auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="dashboard" element={<LabourDashboard />} />
            <Route index element={<Navigate to="/labour/auth/login" replace />} />
          </Route>

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
