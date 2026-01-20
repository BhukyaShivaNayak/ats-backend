import { Request, Response } from "express";
import { createJob , getActiveJobs } from "./job.service";

export const createJobHandler = async (req: Request, res: Response) => {
  try {
    const job = await createJob(req.body);

    res.status(201).json({
      success: true,
      data: job,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



export const getActiveJobsHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const jobs = await getActiveJobs();

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
    });
  }
};
