import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getFundings, createFunding } from "../services/api";

export default function FundingPage() {
  const [fundings, setFundings] = useState([]);

  const [form, setForm] = useState({
    problemStatement: "",
    aboutProblem: "",
    impactSummary: "",
    confidenceLevel: 5,
    fundingStage: "Idea",
    fundingAmount: "",
    equityOffered: 10,
    teamSize: "",
    techStack: "",
    expectedTimeline: "",
    website: "",
    linkedin: "",
    twitter: "",
    github: "",
  });

  // FETCH FUNDINGS
  useEffect(() => {
    fetchFundings();
  }, []);

  const fetchFundings = async () => {
    try {
      const data = await getFundings();

      if (Array.isArray(data)) setFundings(data);
      else if (Array.isArray(data.fundings)) setFundings(data.fundings);
      else if (Array.isArray(data.data)) setFundings(data.data);
      else setFundings([]);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SLIDER FIX
  const handleSlider = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  // SUBMIT
  const handleSubmit = async () => {
    try {
      const payload = {
        ...form,
        techStack: form.techStack
          ? form.techStack.split(",").map((t) => t.trim())
          : [],
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

      // RESET
      setForm({
        problemStatement: "",
        aboutProblem: "",
        impactSummary: "",
        confidenceLevel: 5,
        fundingStage: "Idea",
        fundingAmount: "",
        equityOffered: 10,
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
                No funding rounds yet
              </p>
            ) : (
              fundings.map((f) => (
                <div
                  key={f._id}
                  className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg">
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
                      {f.equityOffered}% Equity
                    </span>
                  </div>

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

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-8">

  {/* HEADER */}
  <div>
    <h2 className="text-2xl font-semibold text-gray-800">
      Create Funding Round
    </h2>
    <p className="text-sm text-gray-500 mt-1">
      Structured details help investors evaluate faster
    </p>
  </div>

  {/* ================= PROBLEM ================= */}
  <div className="space-y-4">
    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
      Problem
    </h3>

    <textarea
      name="problemStatement"
      placeholder="What problem are you solving?"
      value={form.problemStatement}
      onChange={handleChange}
      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
    />

    <textarea
      name="impactSummary"
      placeholder="Why does it matter?"
      value={form.impactSummary}
      onChange={handleChange}
      className="w-full border border-gray-300 p-3 rounded-lg"
    />
  </div>

  {/* ================= FUNDING ================= */}
  <div className="space-y-4">
    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
      Funding
    </h3>

    <div className="grid md:grid-cols-2 gap-5">

      {/* AMOUNT */}
      <div>
        <label className="text-xs text-gray-500">Amount (₹)</label>
        <input
          name="fundingAmount"
          value={form.fundingAmount}
          onChange={handleChange}
          placeholder="e.g. 5,00,000"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg"
        />
      </div>

      {/* STAGE */}
      <div>
        <label className="text-xs text-gray-500">Stage</label>
        <select
          name="fundingStage"
          value={form.fundingStage}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-lg"
        >
          <option>Idea</option>
          <option>MVP</option>
          <option>Pre-Seed</option>
          <option>Seed</option>
          <option>Series A</option>
        </select>
      </div>

    </div>
  </div>

  {/* ================= SLIDERS ================= */}
  <div className="space-y-6">

    {/* CONFIDENCE */}
    <div>
      <div className="flex justify-between text-sm">
        <span className="font-medium">Confidence</span>
        <span>{form.confidenceLevel}/10</span>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>Idea</span>
        <span>Validated</span>
        <span>Strong</span>
      </div>

      <input
        type="range"
        min="1"
        max="10"
        value={form.confidenceLevel}
        onChange={(e) =>
          handleSlider("confidenceLevel", e.target.value)
        }
        className="w-full accent-blue-600"
      />
    </div>

    {/* EQUITY */}
    <div>
      <div className="flex justify-between text-sm">
        <span className="font-medium">Equity</span>
        <span>{form.equityOffered}%</span>
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>Low</span>
        <span>Balanced</span>
        <span>High</span>
      </div>

      <input
        type="range"
        min="1"
        max="50"
        value={form.equityOffered}
        onChange={(e) =>
          handleSlider("equityOffered", e.target.value)
        }
        className="w-full accent-indigo-600"
      />
    </div>

  </div>

  {/* ================= TEAM ================= */}
  <div className="space-y-4">
    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
      Team & Execution
    </h3>

    <div className="grid md:grid-cols-2 gap-5">

      {/* TEAM SIZE */}
      <select
        name="teamSize"
        value={form.teamSize}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded-lg"
      >
        <option value="">Team Size</option>
        <option>Solo Founder</option>
        <option>2-3 Members</option>
        <option>4-6 Members</option>
        <option>6+ Members</option>
      </select>

      {/* TIMELINE */}
      <select
        name="expectedTimeline"
        value={form.expectedTimeline}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded-lg"
      >
        <option value="">Execution Timeline</option>
        <option>1-3 months</option>
        <option>3-6 months</option>
        <option>6-12 months</option>
        <option>1+ year</option>
      </select>

    </div>
  </div>

  {/* ================= TECH ================= */}
  <div>
    <label className="text-xs text-gray-500">
      Tech Stack (comma separated)
    </label>
    <input
      name="techStack"
      value={form.techStack}
      onChange={handleChange}
      placeholder="React, Node, AI"
      className="w-full border border-gray-300 px-4 py-2 rounded-lg"
    />
  </div>

  {/* ================= LINKS ================= */}
  <div className="grid md:grid-cols-2 gap-4">
    <input name="website" placeholder="Website" onChange={handleChange} className="border p-2 rounded-lg" />
    <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} className="border p-2 rounded-lg" />
    <input name="twitter" placeholder="Twitter" onChange={handleChange} className="border p-2 rounded-lg" />
    <input name="github" placeholder="GitHub" onChange={handleChange} className="border p-2 rounded-lg" />
  </div>

  {/* BUTTON */}
  <button
    onClick={handleSubmit}
    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
  >
    Launch Funding Round
  </button>

</div>

      </div>
    </Layout>
  );
}