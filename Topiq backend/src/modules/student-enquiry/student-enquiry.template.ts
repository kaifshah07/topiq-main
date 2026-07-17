import { IStudentEnquiry } from "./student-enquiry.types";

export const studentEnquiryTemplate = (
  enquiry: IStudentEnquiry
): string => {
  return `
    <h2>📚 New Student Enquiry</h2>

    <table border="1" cellpadding="10" cellspacing="0">
      <tr><td><b>Student Name</b></td><td>${enquiry.studentName}</td></tr>
      <tr><td><b>Parent Name</b></td><td>${enquiry.parentName ?? "-"}</td></tr>
      <tr><td><b>Mobile</b></td><td>${enquiry.mobile}</td></tr>
      <tr><td><b>Email</b></td><td>${enquiry.email ?? "-"}</td></tr>
      <tr><td><b>Class</b></td><td>${enquiry.class}</td></tr>
      <tr><td><b>Exam</b></td><td>${enquiry.exam ?? "-"}</td></tr>
      <tr><td><b>Medium</b></td><td>${enquiry.medium ?? "-"}</td></tr>
      <tr><td><b>Learning Mode</b></td><td>${enquiry.learningMode ?? "-"}</td></tr>
      <tr><td><b>City</b></td><td>${enquiry.city ?? "-"}</td></tr>
      <tr><td><b>Message</b></td><td>${enquiry.message ?? "-"}</td></tr>
    </table>
  `;
};