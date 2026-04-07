import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import meetingAnimation from "../assets/Meeting.json";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-green-600">StartupSphere</h1>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Features</a>
          <a href="#" className="hover:text-green-600">About</a>
        </div>

        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-xl hover:bg-green-50">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-6">
            Build, Connect & Grow Your Startup 🚀
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            One platform for ideas, mentors, and investors.
          </p>

          <Link to="/signup">
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl text-lg hover:bg-green-700">
              Get Started
            </button>
          </Link>
        </div>

        <div className="w-[400px] md:w-[500px]">
  <Lottie animationData={meetingAnimation} loop={true} />
</div>
      </section>

      {/* FEATURES */}
      <section className="px-10 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">
          Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Learning Hub",
            "Idea Collaboration",
            "Mentor Connect",
            "Investor Access",
            "AI Suggestions",
            "Team Builder"
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl shadow-md border"
            >
              <h4 className="text-xl font-semibold">{feature}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 StartupSphere
      </footer>
    </div>
  );
}