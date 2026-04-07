import Funding from "../models/Funding.js";

// CREATE
export const createFunding = async (req, res) => {
  try {
    const funding = new Funding(req.body);
    await funding.save();
    res.status(201).json(funding);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
export const getAllFunding = async (req, res) => {
  try {
    const data = await Funding.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
export const getFundingById = async (req, res) => {
  try {
    const data = await Funding.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};