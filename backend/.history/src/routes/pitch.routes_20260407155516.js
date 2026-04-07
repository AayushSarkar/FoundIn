import express from "express";
import {
  createPitch,
  getAllPitch,
  getPitchById,
} from "../controllers/pitch.controller.js";

const router = express.Router();

router.post("/", createPitch);
router.get("/", getAllPitch);
router.get("/:id", getPitchById);

export default router;