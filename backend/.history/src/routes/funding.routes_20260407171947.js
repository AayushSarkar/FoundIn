import express from "express";
import {
  createFunding,
  getAllFunding,
  getFundingById,
} from "../controllers/funding.controller.js";
import { verifyToken } from "../middleware/auth.js"; // 👈 ADD THIS

const router = express.Router();

// ✅ Apply middleware here
router.post("/", verifyToken, createFunding);

router.get("/", getAllFunding);
router.get("/:id", getFundingById);

export default router;