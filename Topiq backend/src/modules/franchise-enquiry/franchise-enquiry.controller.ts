import { Request, Response } from "express";

import { FranchiseEnquiryService } from "./franchise-enquiry.service";

import { ApiResponse } from "../../utils/ApiResponse";

export class FranchiseEnquiryController{

    static async create(req:Request,res:Response){

        const enquiry =
        await FranchiseEnquiryService.create(req.body);

        return new ApiResponse(

            res,

            201,

            enquiry,

            "Franchise enquiry submitted successfully."

        ).send();

    }

}