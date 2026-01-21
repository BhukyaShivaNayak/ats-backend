import { Router } from "express";
import { createJobHandler , getActiveJobsHandler ,getJobByCodeHandler , closeJobHandler , updateJobHandler } from "./job.controller";

const router = Router();

router.post("/", createJobHandler);
router.get("/", getActiveJobsHandler);
router.get("/:jobCode", getJobByCodeHandler);
router.patch("/:jobCode/close", closeJobHandler);

router.patch("/:jobCode", updateJobHandler);


export default router;






