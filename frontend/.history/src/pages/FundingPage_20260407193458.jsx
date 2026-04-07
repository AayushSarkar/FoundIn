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

        {/* ================= FORM ================= */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">

          <h2 className="text-xl font-semibold">
            Create Funding Round
          </h2>

          {/* PROBLEM */}
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

          {/* FUNDING */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="fundingAmount"
              placeholder="Funding Amount"
              value={form.fundingAmount}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />

            <select
              name="fundingStage"
              value={form.fundingStage}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            >
              <option>Idea</option>
              <option>MVP</option>
              <option>Pre-Seed</option>
              <option>Seed</option>
              <option>Series A</option>
            </select>
          </div>

          {/* SLIDERS */}
          <div className="space-y-6">

            {/* CONFIDENCE */}
            <div>
              <div className="flex justify-between">
                <span>Confidence</span>
                <span>{form.confidenceLevel}/10</span>
              </div>

              <div className="flex justify-between text-xs text-black">
                <span>Idea</span>
                <span>Validation</span>
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
              <div className="flex justify-between">
                <span>Equity</span>
                <span>{form.equityOffered}%</span>
              </div>

              <div className="flex justify-between text-xs text-black">
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

          {/* TEAM */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="teamSize"
              placeholder="Team Size"
              value={form.teamSize}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />

            <input
              name="expectedTimeline"
              placeholder="Timeline"
              value={form.expectedTimeline}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />
          </div>

          {/* TECH */}
          <input
            name="techStack"
            placeholder="Tech Stack"
            value={form.techStack}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />

          {/* LINKS */}
          <div className="grid md:grid-cols-2 gap-4">
            <input name="website" placeholder="Website" onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="twitter" placeholder="Twitter" onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="github" placeholder="GitHub" onChange={handleChange} className="border p-2 rounded-lg" />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Launch Funding Round
          </button>

        </div>

      </div>
    </Layout>
  );
}