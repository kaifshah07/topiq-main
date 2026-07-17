import FranchiseEnquiryModel from "./franchise-enquiry.model";
import { IFranchiseEnquiry } from "./franchise-enquiry.types";
import { MailService } from "../../services/mail/mail.service";

export class FranchiseEnquiryService {

    static async create(data:IFranchiseEnquiry){

        const enquiry =
        await FranchiseEnquiryModel.create(data);

        await MailService.sendFranchiseEnquiryEmail(enquiry);

        return enquiry;

    }

}