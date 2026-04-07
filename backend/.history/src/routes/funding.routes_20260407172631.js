import express from "express";
import {
  createFunding,
  getAllFunding,
  getFundingById,
} from "../controllers/funding.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

// ✅ ALL routes protected (IMPORTANT)
router.post("/", verifyToken, createFunding);
router.get("/", verifyToken, getAllFunding);
router.get("/:id", verifyToken, getFundingById);

export default router;