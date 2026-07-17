import { Router } from "express";
import healthRoutes from "./health.routes";
import studentEnquiryRoutes from "../modules/student-enquiry/student-enquiry.routes";
import franchiseEnquiryRoutes from "../modules/franchise-enquiry/franchise-enquiry.routes";

const router = Router();

router.use("/health", healthRoutes);

router.use("/student-enquiry", studentEnquiryRoutes);
router.use("/franchise-enquiry",franchiseEnquiryRoutes);

export default router;