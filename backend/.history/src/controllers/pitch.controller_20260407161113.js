import Pitch from "../models/Pitch.js";

export const createPitch = async (req, res) => {
  try {
    const pitch = new Pitch(req.body);
    await pitch.save();
    res.status(201).json(pitch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllPitch = async (req, res) => {
  try {
    const { userId } = req.query;

    const pitches = await Pitch.find({ userId });

    res.json(pitches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};