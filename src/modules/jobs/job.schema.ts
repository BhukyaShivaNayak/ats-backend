import { z } from "zod";

export  const createJobSchema = z.object({
  body: z.object({
    jobTitle: z.string().min(3),
    location: z.string(),
    compensation: z.string(),
    experience: z.string(),
    industry: z.string(),
    recruiter: z.string(),
    openingDate: z.string(),
    expiryDate: z.string(),

    clientName: z.string().optional(),
    department: z.string().optional(),
    jobRole: z.string().optional(),
    salaryType: z.enum(["FIXED", "RANGE"]).optional(),
    seniorityLevel: z.string().optional(),
    hiringManager: z.string().optional(),
  }),
});


export const updateJobSchema = z.object({
  body: z.object({
    jobTitle: z.string().min(3).optional(),
    location: z.string().optional(),
    compensation: z.string().optional(),
    experience: z.string().optional(),
    industry: z.string().optional(),
    recruiter: z.string().optional(),
    openingDate: z.string().optional(),
    expiryDate: z.string().optional(),

    clientName: z.string().optional(),
    department: z.string().optional(),
    jobRole: z.string().optional(),
    salaryType: z.enum(["FIXED", "RANGE"]).optional(),
    seniorityLevel: z.string().optional(),
    hiringManager: z.string().optional(),
  }),
});

