import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  applicationType: {
    type: String,
    enum: ["School of Ministry", "School of Leadership"],
    required: true,
  },
  // Personal Info (Shared)
  fullName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  homeTown: { type: String, required: true },
  lga: { type: String, required: true },
  state: { type: String, required: true },
  residentialAddress: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  sex: { type: String, required: true },
  maritalStatus: { type: String, required: true },

  // Spiritual History (Ministry specific)
  salvationDatePlace: { type: String },
  baptizedByImmersion: { type: String },
  baptismDate: { type: String },
  baptismChurch: { type: String },
  pastorNamePhone: { type: String },
  churchResponsibility: { type: String },

  // Leadership History (Leadership specific)
  hasLedBefore: { type: String },
  leadWhereWhen: { type: String },
  dominantChallenges: { type: String },
  whyNotLed: { type: String },
  leadershipChallenges: { type: String },

  // Health History (Shared)
  healthIssues: { type: String, required: true },
  healthCondition: { type: String },

  // Educational Qualifications (Shared)
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  courseOfStudy: { type: String, required: true },

  // Expectations (Shared)
  expectations: { type: String, required: true },

  // Payment Info
  paymentReference: { type: String, required: true },
  amountPaid: { type: Number, required: true },
  status: { type: String, default: "pending" }, // pending, approved, rejected
  createdAt: { type: Date, default: Date.now },
});

const Application = mongoose.models.Application || mongoose.model("Application", ApplicationSchema);

export default Application;
