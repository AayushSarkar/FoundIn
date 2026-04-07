import mongoose from "mongoose";

const phaseSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
});

const fundingSchema = new mongoose.Schema(
  {
    problemStatement: String,
    aboutProblem: String,
    impactSummary: String,
    confidenceLevel: Number,

    fundingStage: String,
    fundingAmount: Number,
    equityOffered: Number,

    teamSize: Number,
    techStack: [String],
    expectedTimeline: String,

    phasesOfWork: [phaseSchema],

    links: {
      website: String,
      linkedin: String,
      twitter: String,
      github: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Funding", fundingSchema);