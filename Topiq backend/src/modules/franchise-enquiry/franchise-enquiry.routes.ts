import { Router } from "express";

import { FranchiseEnquiryController } from "./franchise-enquiry.controller";

import { franchiseEnquirySchema } from "./franchise-enquiry.validation";

import { validate } from "../../middleware/validate";

import { asyncHandler } from "../../utils/asyncHandler";

const router = Router();

router.post(

"/",

validate(franchiseEnquirySchema),

asyncHandler(FranchiseEnquiryController.create)

);

export default router;