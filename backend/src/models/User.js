import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["normal", "entrepreneur", "investor"],
    required: true
  },

  name: {
    type: String
  },
  
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  organization: {
    name: String,
    email: String,
    details: String
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
