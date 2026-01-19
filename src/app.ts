import express, { Application } from "express";
import cors from "cors";

import jobRoutes from  "./modules/jobs/job.routes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "super" });
});

export default app;





