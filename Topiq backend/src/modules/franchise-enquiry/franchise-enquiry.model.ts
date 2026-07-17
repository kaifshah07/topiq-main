import { Schema, model } from "mongoose";
import { EnquiryStatus } from "../../constants";
import { IFranchiseEnquiry } from "./franchise-enquiry.types";

const franchiseEnquirySchema = new Schema<IFranchiseEnquiry>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    district: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    business: {
      type: String,
      required: true,
      trim: true,
    },

    investment: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
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

const FranchiseEnquiryModel = model<IFranchiseEnquiry>(
  "FranchiseEnquiry",
  franchiseEnquirySchema
);

export default FranchiseEnquiryModel;