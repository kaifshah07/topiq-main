import { transporter } from "../../config/mail";
import { env } from "../../config/env";
import { IStudentEnquiry } from "../../modules/student-enquiry/student-enquiry.types";
import { studentEnquiryTemplate } from "../../modules/student-enquiry/student-enquiry.template";
import { IFranchiseEnquiry } from "../../modules/franchise-enquiry/franchise-enquiry.types";
import { franchiseEnquiryTemplate } from "./templates/franchise-enquiry.template";

export class MailService {
  static async sendStudentEnquiryEmail(
    enquiry: IStudentEnquiry
  ): Promise<void> {
    await transporter.sendMail({
      from: env.MAIL_FROM,
      to: env.ADMIN_EMAIL,
      subject: "📚 New Student Enquiry",
      html: studentEnquiryTemplate(enquiry),
    });
  }

  static async sendFranchiseEnquiryEmail(
    enquiry: IFranchiseEnquiry
): Promise<void>{

    await transporter.sendMail({

        from: env.MAIL_FROM,

        to: env.ADMIN_EMAIL,

        subject:"🏢 New Franchise Enquiry",

        html: franchiseEnquiryTemplate(enquiry)

    });

}
}

