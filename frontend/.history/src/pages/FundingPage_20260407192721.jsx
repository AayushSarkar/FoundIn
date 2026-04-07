import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getFundings, createFunding } from "../services/api";

export default function FundingPage() {
  const [fundings, setFundings] = useState([]);

  const [form, setForm] = useState({
    problemStatement: "",
    aboutProblem: "",
    impactSummary: "",
    confidenceLevel: "",
    fundingStage: "",
    fundingAmount: "",
    equityOffered: "",
    teamSize: "",
    techStack: "",
    expectedTimeline: "",
    website: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  // 🔥 FETCH FUNDINGS (WITH TOKEN)
  useEffect(() => {
    fetchFundings();
  }, []);

  const fetchFundings = async () => {
    try {
      const data = await getFundings();
      console.log("FUNDINGS:", data);

      // ✅ HANDLE ALL CASES
      if (Array.isArray(data)) {
        setFundings(data);
      } else if (Array.isArray(data.fundings)) {
        setFundings(data.fundings);
      } else if (Array.isArray(data.data)) {
        setFundings(data.data);
      } else {
        setFundings([]);
      }

    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  // 🔥 INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SUBMIT
  const handleSubmit = async () => {
    try {
      const payload = {
        ...form,
        techStack: form.techStack.split(",").map((t) => t.trim()),
        links: {
          website: form.website,
          linkedin: form.linkedin,
          twitter: form.twitter,
          github: form.github,
        },
        phasesOfWork: [],
      };

      await createFunding(payload);

      alert("Funding Round Created 🚀");

      fetchFundings();

      // RESET FORM
      setForm({
        problemStatement: "",
        aboutProblem: "",
        impactSummary: "",
        confidenceLevel: "",
        fundingStage: "",
        fundingAmount: "",
        equityOffered: "",
        teamSize: "",
        techStack: "",
        expectedTimeline: "",
        website: "",
        linkedin: "",
        twitter: "",
        github: "",
      });

    } catch (err) {
      console.log(err);
      alert("Error creating funding round");
    }
  };

  return (
    <Layout>
      <div className="space-y-10">

        {/* HEADER */}
        <h1 className="text-3xl font-semibold">
          Start a Funding Round
        </h1>

        {/* ================= EXISTING ================= */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Existing Funding Rounds
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {fundings.length === 0 ? (
              <p className="text-gray-500">
                No funding rounds yet 🚀
              </p>
            ) : (
              fundings.map((f) => (
                <div
                  key={f._id}
                  className="relative bg-white p-6 rounded-2xl border border-gray-100 
                  shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                >
                  {/* 🔥 TOP GLOW BAR */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>

                  <h3 className="font-semibold text-lg text-gray-800">
                    {f.problemStatement}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    {f.impactSummary}
                  </p>

                  <div className="flex justify-between mt-4 text-sm font-medium">
                    <span className="text-green-600">
                      ₹ {f.fundingAmount}
                    </span>
                    <span>
                      Equity: {f.equityOffered}%
                    </span>
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {f.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}

          </div>
        </div>

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Create Funding Round
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Fill in the details to present your startup to investors
          </p>
        </div>

        {/* ================= PROBLEM ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">

          <h2 className="text-lg font-semibold text-gray-800">
            Problem & Vision
          </h2>

          <div className="space-y-4">

            <div>
              <label className="text-sm font-medium text-gray-600">
                Problem Statement
              </label>
              <textarea
                name="problemStatement"
                value={form.problemStatement}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                About Problem
              </label>
              <textarea
                name="aboutProblem"
                value={form.aboutProblem}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Impact Summary
              </label>
              <textarea
                name="impactSummary"
                value={form.impactSummary}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

          </div>
        </div>

        {/* ================= FUNDING ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6">

          <h2 className="text-lg font-semibold text-gray-800">
            Funding Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-600">Funding Amount</label>
              <input
                name="fundingAmount"
                value={form.fundingAmount}
                onChange={handleChange}
                placeholder="₹ e.g. 500000"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Funding Stage</label>
              <select
                name="fundingStage"
                value={form.fundingStage}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg"
              >
                <option>Idea</option>
                <option>MVP</option>
                <option>Pre-Seed</option>
                <option>Seed</option>
                <option>Series A</option>
              </select>
            </div>

          </div>

          {/* SLIDERS */}
          <div className="space-y-5">

            <div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Confidence Level</span>
                <span>{form.confidenceLevel}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={form.confidenceLevel}
                onChange={(e) =>
                  handleSlider("confidenceLevel", e.target.value)
                }
                className="w-full accent-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Equity Offered</span>
                <span>{form.equityOffered}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={form.equityOffered}
                onChange={(e) =>
                  handleSlider("equityOffered", e.target.value)
                }
                className="w-full accent-indigo-500"
              />
            </div>

          </div>
        </div>

        {/* ================= TEAM ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">

          <h2 className="text-lg font-semibold text-gray-800">
            Team & Execution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-600">Team Size</label>
              <select
                name="teamSize"
                value={form.teamSize}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg"
              >
                <option value="">Select</option>
                <option>1-2</option>
                <option>3-5</option>
                <option>6-10</option>
                <option>10+</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Timeline</label>
              <select
                name="expectedTimeline"
                value={form.expectedTimeline}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg"
              >
                <option value="">Select</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>6-12 months</option>
                <option>1+ year</option>
              </select>
            </div>

          </div>

          <div>
            <label className="text-sm text-gray-600">Tech Stack</label>
            <input
              name="techStack"
              value={form.techStack}
              onChange={handleChange}
              placeholder="React, Node, AI..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            />
          </div>

        </div>

        {/* ================= SOCIAL ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">

          <h2 className="text-lg font-semibold text-gray-800">
            Online Presence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="website" placeholder="Website" onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="twitter" placeholder="Twitter" onChange={handleChange} className="border p-3 rounded-lg" />
            <input name="github" placeholder="GitHub" onChange={handleChange} className="border p-3 rounded-lg" />
          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Launch Funding Round
        </button>

      </div>
   
      </div>
    </Layout>
  );
}