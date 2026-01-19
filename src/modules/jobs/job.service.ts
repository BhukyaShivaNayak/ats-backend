import { JobModel } from "./job.model";



const generateJobCode = async () => {
  const count = await JobModel.countDocuments();
  return `JOB-${new Date().getFullYear()}-${String(count + 1).padStart(6, "0")}`;
};

export const createJob = async (payload: any) => {
  const jobCode = await generateJobCode();

  const job = await JobModel.create({
    ...payload,
    jobCode,
    openingDate: new Date(payload.openingDate),
    expiryDate: new Date(payload.expiryDate),
  });

  return job;
};
