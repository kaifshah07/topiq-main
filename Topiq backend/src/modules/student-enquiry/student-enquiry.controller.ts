import { Request, Response } from "express";
import { StudentEnquiryService } from "./student-enquiry.service";
import { ApiResponse } from "../../utils/ApiResponse";

export class StudentEnquiryController {
  static async create(req: Request, res: Response) {
    const enquiry = await StudentEnquiryService.create(req.body);

    return new ApiResponse(
      res,
      201,
      enquiry,
      "Student enquiry submitted successfully."
    ).send();
  }
}