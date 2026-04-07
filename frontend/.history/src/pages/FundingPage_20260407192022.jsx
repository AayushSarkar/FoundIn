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

        {/* ================= FORM ================= */}
        <div className="bg-white p-8 rounded-2xl shadow border space-y-6">

          <h2 className="text-xl font-semibold">
            Create New Funding Round
          </h2>

          <textarea name="problemStatement" placeholder="Problem Statement" value={form.problemStatement} onChange={handleChange} className="w-full border p-3 rounded-lg" />
          <textarea name="aboutProblem" placeholder="About Problem" value={form.aboutProblem} onChange={handleChange} className="w-full border p-3 rounded-lg" />
          <textarea name="impactSummary" placeholder="Impact Summary" value={form.impactSummary} onChange={handleChange} className="w-full border p-3 rounded-lg" />

          <div className="grid md:grid-cols-3 gap-4">
            <input name="confidenceLevel" placeholder="Confidence (1-10)" value={form.confidenceLevel} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="fundingAmount" placeholder="Funding Amount" value={form.fundingAmount} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="equityOffered" placeholder="Equity %" value={form.equityOffered} onChange={handleChange} className="border p-2 rounded-lg" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <input name="teamSize" placeholder="Team Size" value={form.teamSize} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="fundingStage" placeholder="Stage" value={form.fundingStage} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="expectedTimeline" placeholder="Timeline" value={form.expectedTimeline} onChange={handleChange} className="border p-2 rounded-lg" />
          </div>

          <input name="techStack" placeholder="Tech Stack (React, Node...)" value={form.techStack} onChange={handleChange} className="w-full border p-2 rounded-lg" />

          <div className="grid md:grid-cols-2 gap-4">
            <input name="website" placeholder="Website" value={form.website} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="linkedin" placeholder="LinkedIn" value={form.linkedin} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="twitter" placeholder="Twitter" value={form.twitter} onChange={handleChange} className="border p-2 rounded-lg" />
            <input name="github" placeholder="GitHub" value={form.github} onChange={handleChange} className="border p-2 rounded-lg" />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Start Funding Round
          </button>

        </div>

      </div>
    </Layout>
  );
}