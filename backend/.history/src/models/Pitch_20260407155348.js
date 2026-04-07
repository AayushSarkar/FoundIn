import mongoose from "mongoose";

const pitchSchema = new mongoose.Schema(
  {
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