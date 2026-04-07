import Pitch from "../models/Pitch.js";

// CREATE
export const createPitch = async (req, res) => {
  try {
    const pitch = new Pitch(req.body);
    await pitch.save();
    res.status(201).json(pitch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
export const getAllPitch = async (req, res) => {
  try {
    const data = await Pitch.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
export const getPitchById = async (req, res) => {
  try {
    const data = await Pitch.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};