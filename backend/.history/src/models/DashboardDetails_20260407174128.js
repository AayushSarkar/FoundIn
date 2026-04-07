import mongoose from "mongoose";

const textDataSchema = new mongoose.Schema({
  title: String,
  description: String
}, { _id: false });

const tableDataSchema = new mongoose.Schema({
  column1: String,
  column2: String,
  column3: String
}, { _id: false });

const organizationDetailsSchema = new mongoose.Schema({
  shortDescription: String,
  longDescription: String,
  problemStatement: String,
  solutionOverview: String,
  targetAudience: String,
  businessModel: String,
  traction: String,
  stage: String,
  industry: String,
}, { _id: false });

const dashboardDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  organizationName: {
    type: String,
    required: true
  },

  // ✅ FIXED HERE
  organizationDetails: {
    type: organizationDetailsSchema,
    required: true
  },

  textData: [textDataSchema],

  tableData: [tableDataSchema],

  isSetupCompleted: {
    type: Boolean,
    default: false
  },

  foundedYear: Number,

  website: String,

  socialLinks: {
    linkedin: String,
    twitter: String,
    instagram: String
  }

}, { timestamps: true });

export default mongoose.model("DashboardDetails", dashboardDetailsSchema);