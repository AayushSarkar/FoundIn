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

  organizationDetails: {
    type: String,
    required: true
  },

  textData: [textDataSchema],

  tableData: [tableDataSchema]

}, { timestamps: true });

export default mongoose.model("DashboardDetails", dashboardDetailsSchema);
