import { Request, Response } from "express";
import { createJob, getActiveJobs, getJobByCode ,closeJobByCode , updateJobByCode } from "./job.service";


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

export const getJobByCodeHandler = async (
  req: Request,
  res: Response
) => {
  try {
    
    const jobCode = req.params.jobCode as string;

    const job = await getJobByCode(jobCode);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
    });
  }
};


export const closeJobHandler = async (
  req: Request,
  res: Response
) => {
  try {
    
    const jobCode = req.params.jobCode as string;

    const job = await closeJobByCode(jobCode);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job closed successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to close job",
    });
  }
};

export const updateJobHandler = async (
  req: Request,
  res: Response
) => {
  try {
    
    const jobCode = req.params.jobCode as string;

    const job = await updateJobByCode(jobCode, req.body);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update job",
    });
  }
};


