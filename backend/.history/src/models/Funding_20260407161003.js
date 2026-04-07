import mongoose from "mongoose";

const fundingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    problemStatement: String,
    impactSummary: String,
    fundingAmount: Number,
    equityOffered: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Funding", fundingSchema);