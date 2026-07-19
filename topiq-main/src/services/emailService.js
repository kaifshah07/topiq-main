import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_7ggzsss";
const STUDENT_TEMPLATE_ID = "template_1uxxwn9";
const FRANCHISE_TEMPLATE_ID = "template_yemrqgx";
const PUBLIC_KEY = "m92GxNwbnf2Eud-Yr";

export const sendStudentEnquiry = (data) => {
  return emailjs.send(
    SERVICE_ID,
    STUDENT_TEMPLATE_ID,
    data,
    PUBLIC_KEY
  );
};

export const sendFranchiseEnquiry = (data) => {
  return emailjs.send(
    SERVICE_ID,
    FRANCHISE_TEMPLATE_ID,
    data,
    PUBLIC_KEY
  );
};