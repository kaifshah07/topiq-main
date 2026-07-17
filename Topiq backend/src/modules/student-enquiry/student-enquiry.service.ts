import StudentEnquiryModel from "./student-enquiry.model";
import { IStudentEnquiry } from "./student-enquiry.types";
import { MailService } from "../../services/mail/mail.service";

export class StudentEnquiryService {
  static async create(data: IStudentEnquiry) {
    const enquiry = await StudentEnquiryModel.create(data);

    await MailService.sendStudentEnquiryEmail(enquiry);

    return enquiry;
  }
}