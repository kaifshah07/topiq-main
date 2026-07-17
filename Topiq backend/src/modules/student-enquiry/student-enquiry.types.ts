import { EnquiryStatus } from "../../constants";

export interface IStudentEnquiry {
  studentName: string;
  parentName?: string;

  mobile: string;
  email?: string;

  class: string;

  exam?: string;
  medium?: string;
  learningMode?: string;

  city?: string;
  message?: string;

  status?: EnquiryStatus;

  isDeleted?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}