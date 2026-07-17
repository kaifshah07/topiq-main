import { Schema, model } from "mongoose";
import { EnquiryStatus } from "../../constants";
import { IStudentEnquiry } from "./student-enquiry.types";

const studentEnquirySchema = new Schema<IStudentEnquiry>(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    parentName: {
      type: String,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    class: {
      type: String,
      required: true,
    },

    exam: {
      type: String,
    },

    medium: {
      type: String,
    },

    learningMode: {
      type: String,
    },

    city: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: Object.values(EnquiryStatus),
      default: EnquiryStatus.NEW,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StudentEnquiryModel = model<IStudentEnquiry>(
  "StudentEnquiry",
  studentEnquirySchema
);

export default StudentEnquiryModel;