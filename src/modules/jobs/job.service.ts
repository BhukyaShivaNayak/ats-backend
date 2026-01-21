import { JobModel } from "./job.model";
import { nanoid } from "nanoid";


export const createJob = async (payload: any) => {


  const jobCode = `JOB-${nanoid(8).toUpperCase()}`;
  const job = await JobModel.create({
    ...payload,
    jobCode,
    status: "ACTIVE",
    openingDate: new Date(payload.openingDate),
    expiryDate: new Date(payload.expiryDate),
  });

  return job;
};

export const getActiveJobs = async () => {
  const today = new Date();

  const jobs = await JobModel.find({
    status: "ACTIVE",
    expiryDate: { $gte: today },
  })
    .sort({ createdAt: -1 })
    .lean();

  return jobs;
};

export const getJobByCode = async (jobCode: string) => {
  const job = await JobModel.findOne({ jobCode }).lean();
  return job;
};

export const closeJobByCode = async (jobCode: string) => {
  const job = await JobModel.findOneAndUpdate(
    { jobCode },
    { status: "CLOSED" },
    { new: true }
  );

  return job;
};

export const updateJobByCode = async (
  jobCode: string,
  payload: any
) => {
  if (payload.openingDate) {
    payload.openingDate = new Date(payload.openingDate);
  }

  if (payload.expiryDate) {
    payload.expiryDate = new Date(payload.expiryDate);
  }

  const job = await JobModel.findOneAndUpdate(
    { jobCode },
    { $set: payload },
    { new: true }
  );

  return job;
};
