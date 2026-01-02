import express from "express";
import { login,register,logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// LOGOUT routes
router.post("/logout", logout);
router.get("/logout", logout);

export default router;
