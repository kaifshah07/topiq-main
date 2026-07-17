import { Router } from "express";

import { StudentEnquiryController } from "./student-enquiry.controller";

import { studentEnquirySchema } from "./student-enquiry.validation";

import { asyncHandler } from "../../utils/asyncHandler";

import { validate } from "../../middleware/validate";

const router = Router();

router.post(
  "/",
  validate(studentEnquirySchema),
  asyncHandler(StudentEnquiryController.create)
);

export default router;