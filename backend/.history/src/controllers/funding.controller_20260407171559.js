import Funding from "../models/Funding.js";

// ✅ CREATE FUNDING (FIXED)
export const createFunding = async (req, res) => {
  try {
    const funding = new Funding({
      ...req.body,
      userId: req.user.id, // ⭐ MOST IMPORTANT FIX
    });

    await funding.save();

    res.status(201).json({
      message: "Funding created successfully",
      funding,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ✅ GET ALL FUNDING (OPTIONAL: only logged-in user's data)
export const getAllFunding = async (req, res) => {
  try {
    const data = await Funding.find({ userId: req.user.id }); // ⭐ filter by user
    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ✅ GET SINGLE FUNDING (secure)
export const getFundingById = async (req, res) => {
  try {
    const data = await Funding.findOne({
      _id: req.params.id,
      userId: req.user.id, // ⭐ security
    });

    if (!data) {
      return res.status(404).json({
        message: "Funding not found",
      });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};