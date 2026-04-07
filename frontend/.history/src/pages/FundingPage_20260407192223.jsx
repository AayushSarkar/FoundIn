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

        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-4">

  <div className="max-w-5xl mx-auto space-y-8">

    {/* HEADER */}
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800">
        Create Funding Round
      </h1>
      <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        Investor Ready
      </span>
    </div>

    {/* PROBLEM CARD */}
    <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md space-y-5">
      <h2 className="font-semibold text-gray-700 text-lg">
        Problem & Vision
      </h2>

      <textarea
        name="problemStatement"
        placeholder="What problem are you solving?"
        value={form.problemStatement}
        onChange={handleChange}
        className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <textarea
        name="aboutProblem"
        placeholder="Explain deeply..."
        value={form.aboutProblem}
        onChange={handleChange}
        className="w-full bg-gray-50 p-4 rounded-xl"
      />

      <textarea
        name="impactSummary"
        placeholder="Impact & vision"
        value={form.impactSummary}
        onChange={handleChange}
        className="w-full bg-gray-50 p-4 rounded-xl"
      />
    </div>

    {/* FUNDING CARD */}
    <div className="bg-white/70 backdrop-blur-lg border rounded-2xl p-6 shadow-md space-y-6">

      <h2 className="font-semibold text-gray-700 text-lg">
        💰 Funding Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          name="fundingAmount"
          placeholder="₹ Funding Amount"
          value={form.fundingAmount}
          onChange={handleChange}
          className="bg-gray-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          name="fundingStage"
          value={form.fundingStage}
          onChange={handleChange}
          className="bg-gray-50 p-4 rounded-xl"
        >
          <option>Idea</option>
          <option>MVP</option>
          <option>Pre-Seed</option>
          <option>Seed</option>
          <option>Series A</option>
        </select>

      </div>

      {/* SLIDERS WITH MODERN UI */}
      <div className="space-y-5">

        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Confidence</span>
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
          <div className="flex justify-between text-sm text-gray-600 mb-1">
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

    {/* TEAM CARD */}
    <div className="bg-white/70 backdrop-blur-lg border rounded-2xl p-6 shadow-md space-y-5">

      <h2 className="font-semibold text-gray-700 text-lg">
        👥 Team & Execution
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <select
          name="teamSize"
          value={form.teamSize}
          onChange={handleChange}
          className="bg-gray-50 p-4 rounded-xl"
        >
          <option value="">Team Size</option>
          <option>1-2</option>
          <option>3-5</option>
          <option>6-10</option>
          <option>10+</option>
        </select>

        <select
          name="expectedTimeline"
          value={form.expectedTimeline}
          onChange={handleChange}
          className="bg-gray-50 p-4 rounded-xl"
        >
          <option value="">Timeline</option>
          <option>1-3 months</option>
          <option>3-6 months</option>
          <option>6-12 months</option>
          <option>1+ year</option>
        </select>

      </div>

      <input
        name="techStack"
        placeholder="Tech Stack (React, AI...)"
        value={form.techStack}
        onChange={handleChange}
        className="w-full bg-gray-50 p-4 rounded-xl"
      />
    </div>

    {/* SOCIAL CARD */}
    <div className="bg-white/70 backdrop-blur-lg border rounded-2xl p-6 shadow-md space-y-4">

      <h2 className="font-semibold text-gray-700 text-lg">
        🌐 Online Presence
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input placeholder="Website" onChange={handleChange} name="website" className="bg-gray-50 p-3 rounded-xl" />
        <input placeholder="LinkedIn" onChange={handleChange} name="linkedin" className="bg-gray-50 p-3 rounded-xl" />
        <input placeholder="Twitter" onChange={handleChange} name="twitter" className="bg-gray-50 p-3 rounded-xl" />
        <input placeholder="GitHub" onChange={handleChange} name="github" className="bg-gray-50 p-3 rounded-xl" />
      </div>

    </div>

    {/* BUTTON */}
    <button
      onClick={handleSubmit}
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.02] transition"
    >
      Launch Funding Round
    </button>

  </div>
</div>
      </div>
    </Layout>
  );
}