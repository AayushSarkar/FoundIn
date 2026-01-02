import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import {
  saveDashboardDetails,
  getDashboardDetails
} from "../controllers/dashboardDetails.controller.js";

const router = express.Router();

// Create / Update dashboard details
router.post(
  "/details",
  verifyToken,
  authorizeRoles("entrepreneur"),
  saveDashboardDetails
);

// Fetch dashboard details
router.get(
  "/details",
  verifyToken,
  authorizeRoles("entrepreneur"),
  getDashboardDetails
);

export default router;
