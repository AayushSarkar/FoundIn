import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

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

  // 🔥 FETCH EXISTING FUNDINGS
  useEffect(() => {
    fetchFundings();
  }, []);

  const fetchFundings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/funding/");
      setFundings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SUBMIT
  const handleSubmit = async () => {
    try {
      const payload = {
        ...form,
        techStack: form.techStack.split(","),
        links: {
          website: form.website,
          linkedin: form.linkedin,
          twitter: form.twitter,
          github: form.github,
        },
        phasesOfWork: [], // optional
      };

      await axios.post("http://localhost:5000/api/funding/", payload);

      alert("Funding Round Created 🚀");
      fetchFundings();

      // reset form
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

        {/* 🔥 HEADER */}
        <h1 className="text-3xl font-semibold">
          Start a Funding Round
        </h1>

        {/* ================= EXISTING ROUNDS ================= */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Existing Funding Rounds
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {fundings.map((f) => (
              <div
                key={f._id}
                className="bg-white p-6 rounded-2xl shadow border hover:shadow-xl transition"
              >
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
            ))}
          </div>
        </div>

        {/* ================= CREATE FORM ================= */}
        <div className="bg-white p-8 rounded-2xl shadow border space-y-6">

          <h2 className="text-xl font-semibold">
            Create New Funding Round
          </h2>

          {/* TEXT AREAS */}
          <textarea
            name="problemStatement"
            placeholder="Problem Statement"
            value={form.problemStatement}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="aboutProblem"
            placeholder="About Problem"
            value={form.aboutProblem}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="impactSummary"
            placeholder="Impact Summary"
            value={form.impactSummary}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* NUMBERS */}
          <div className="grid md:grid-cols-3 gap-4">
            <input name="confidenceLevel" placeholder="Confidence (1-10)" value={form.confidenceLevel} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="fundingAmount" placeholder="Funding Amount" value={form.fundingAmount} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="equityOffered" placeholder="Equity %" value={form.equityOffered} onChange={handleChange} className="border p-2 rounded-lg" />
          </div>

          {/* MORE */}
          <div className="grid md:grid-cols-3 gap-4">
            <input name="teamSize" placeholder="Team Size" value={form.teamSize} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="fundingStage" placeholder="Stage (Idea, Seed...)" value={form.fundingStage} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="expectedTimeline" placeholder="Timeline" value={form.expectedTimeline} onChange={handleChange} className="border p-2 rounded-lg" />
          </div>

          {/* TECH STACK */}
          <input
            name="techStack"
            placeholder="Tech Stack (comma separated)"
            value={form.techStack}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          {/* LINKS */}
          <div className="grid md:grid-cols-2 gap-4">
            <input name="website" placeholder="Website" value={form.website} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="linkedin" placeholder="LinkedIn" value={form.linkedin} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="twitter" placeholder="Twitter" value={form.twitter} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="github" placeholder="GitHub" value={form.github} onChange={handleChange} className="border p-2 rounded-lg" />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            🚀 Start Funding Round
          </button>

        </div>

      </div>
    </Layout>
  );
}