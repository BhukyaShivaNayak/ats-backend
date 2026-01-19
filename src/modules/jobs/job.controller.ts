import { Request, Response } from "express";
import { createJob } from "./job.service";

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
