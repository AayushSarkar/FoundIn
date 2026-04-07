import express from "express";
import {
  createFunding,
  getAllFunding,
  getFundingById,
} from "../controllers/funding.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js"; // ✅ FIXED

const router = express.Router();

router.post("/", verifyToken, createFunding);

router.get("/", getAllFunding);
router.get("/:id", getFundingById);

export default router;