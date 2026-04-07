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
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ FIXED SLIDER HANDLER
  const handleSlider = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

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
      alert("Funding Round Created");

      fetchFundings();

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

        <h1 className="text-3xl font-semibold">
          Start a Funding Round
        </h1>

        {/* EXISTING */}
        <div className="grid md:grid-cols-2 gap-6">
          {fundings.map((f) => (
            <div key={f._id} className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold">{f.problemStatement}</h3>
              <p className="text-sm text-gray-500">{f.impactSummary}</p>
              <div className="flex justify-between mt-3">
                <span>₹ {f.fundingAmount}</span>
                <span>{f.equityOffered}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="bg-white border rounded-2xl p-6 space-y-6">

          <h2 className="text-xl font-semibold">
            Create Funding Round
          </h2>

          {/* SLIDERS */}
          <div className="space-y-6">

            {/* CONFIDENCE */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="font-medium">Confidence</label>
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
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="font-medium">Equity</label>
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