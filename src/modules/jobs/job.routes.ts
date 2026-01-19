import { Router } from "express";
import { createJobHandler } from "./job.controller";

const router = Router();

router.post("/", createJobHandler);

export default router;
