import mongoose from "mongoose";

const pitchSchema = new mongoose.Schema(
  {
    userId: {
      type: String, // simple for now (no JWT yet)
      required: true,
    },

    startupName: String,
    tagline: String,
    description: String,
    industry: String,
    stage: String,
    fundingRequired: Number,
    equityOffered: Number,
    location: String,
  },
  { timestamps: true }
);

export default mongoose.model("Pitch", pitchSchema);