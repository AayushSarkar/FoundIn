import mongoose from "mongoose";

const phaseSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
});

const fundingSchema = new mongoose.Schema(
  {
    // 🔥 IMPORTANT: Link funding to user
    userId: {
      type: String,
      required: true,
    },

    problemStatement: {
      type: String,
      required: true,
    },

    aboutProblem: String,

    impactSummary: String,

    confidenceLevel: {
      type: Number,
      min: 0,
      max: 10,
    },

    fundingStage: {
      type: String,
      enum: ["Idea", "Seed", "Series A", "Series B", "Growth"],
      default: "Idea",
    },

    fundingAmount: {
      type: Number,
      required: true,
    },

    equityOffered: {
      type: Number,
      min: 0,
      max: 100,
    },

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