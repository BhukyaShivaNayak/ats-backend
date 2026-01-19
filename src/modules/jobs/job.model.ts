import mongoose, { Schema, Document } from "mongoose";

export interface JobDocument extends Document {
  jobTitle: string;
  jobCode: string;

  location: string;
  compensation: string;
  experience: string;
  industry: string;
  recruiter: string;
  openingDate: Date;
  expiryDate: Date;
  status: "ACTIVE" | "DRAFT" | "CLOSED";

  clientName?: string;
  department?: string;
  jobRole?: string;
  salaryType?: string;
  seniorityLevel?: string;
  hiringManager?: string;
}

const JobSchema = new Schema<JobDocument>(
  {
    jobTitle: { type: String, required: true },
   jobCode: { type: String, required: true, unique: true },

    location: { type: String, required: true },
    compensation: { type: String, required: true },
    experience: { type: String, required: true },
    industry: { type: String, required: true },
    recruiter: { type: String, required: true },
    openingDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },

    status: {
      type: String,
      enum: ["ACTIVE", "DRAFT", "CLOSED"],
      default: "ACTIVE",
    },

    clientName: String,
    department: String,
    jobRole: String,
    salaryType: String,
    seniorityLevel: String,
    hiringManager: String,
  },
  { timestamps: true }
);

export const JobModel = mongoose.model<JobDocument>("Job", JobSchema);
