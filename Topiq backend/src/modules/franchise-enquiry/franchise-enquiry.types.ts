import { EnquiryStatus } from "../../constants";

export interface IFranchiseEnquiry {
  name: string;

  mobile: string;

  email?: string;

  city: string;

  district: string;

  state: string;

  business: string;

  investment: string;

  location: string;

  message?: string;

  status?: EnquiryStatus;

  isDeleted?: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}