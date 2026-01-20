import { Router } from "express";
import { createJobHandler , getActiveJobsHandler } from "./job.controller";

const router = Router();

router.post("/", createJobHandler);
router.get("/", getActiveJobsHandler);

export default router;






