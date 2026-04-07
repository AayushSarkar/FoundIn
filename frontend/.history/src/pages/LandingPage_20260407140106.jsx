import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import meetingAnimation from "../assets/Meeting.json";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/70 sticky top-0 z-50 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">FoundIn</h1>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#about" className="hover:text-blue-600">About</a>
        </div>

        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-16">

        {/* TEXT */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Discover, Build & Grow Ideas with{" "}
            <span className="text-blue-600">FoundIn</span>
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            A complete ecosystem for students, innovators, mentors, and investors — all in one place.
          </p>

          <div className="flex gap-4">
            <Link to="/signup">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 shadow-md">
                Get Started
              </button>
            </Link>

            <button className="px-6 py-3 border border-gray-400 rounded-xl text-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        {/* LOTTIE */}
        <div className="w-[300px] md:w-[420px]">
          <Lottie animationData={meetingAnimation} loop={true} />
        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="px-10 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            { title: "Learning Hub", desc: "Access curated startup & tech resources." },
            { title: "Idea Collaboration", desc: "Share ideas and build together." },
            { title: "Mentor Connect", desc: "Get guidance from industry experts." },
            { title: "Investor Access", desc: "Pitch your ideas to investors." },
            { title: "AI Suggestions", desc: "Smart recommendations for growth." },
            { title: "Team Builder", desc: "Find the perfect team members." },
          ].map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-blue-100 shadow-lg hover:shadow-blue-200"
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h4>

              <p className="text-gray-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">

          <h3 className="text-3xl font-bold mb-6">
            About FoundIn
          </h3>

          <p className="text-lg text-gray-700 mb-8">
            FoundIn is a next-generation startup ecosystem designed to empower
            students and innovators by connecting them with the right resources,
            mentors, and opportunities. Whether you have an idea or are looking
            to join one — FoundIn helps you build, grow, and succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {["Innovation", "Collaboration", "Growth"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md"
              >
                <h4 className="font-semibold text-blue-600 text-lg">
                  {item}
                </h4>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-10 py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to start your journey?
        </h3>

        <p className="text-gray-600 mb-6">
          Join FoundIn today and turn your ideas into reality.
        </p>

        <Link to="/signup">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Join Now
          </button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 FoundIn. All rights reserved.
      </footer>

    </div>
  );
}