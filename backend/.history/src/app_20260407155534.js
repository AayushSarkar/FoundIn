import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

import fundingRoutes from "./routes/funding.routes.js";
import pitchRoutes from "./routes/pitch.routes.js";

app.use("/api/funding", fundingRoutes);
app.use("/api/pitch", pitchRoutes);


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

export default app;
