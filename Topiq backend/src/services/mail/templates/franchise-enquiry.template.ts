import { IFranchiseEnquiry } from "../../../modules/franchise-enquiry/franchise-enquiry.types";

export const franchiseEnquiryTemplate = (
  enquiry: IFranchiseEnquiry
): string => {
  return `
    <h2>🏢 New Franchise Enquiry</h2>

    <table border="1" cellpadding="10" cellspacing="0">
      <tr><td><b>Name</b></td><td>${enquiry.name}</td></tr>
      <tr><td><b>Mobile</b></td><td>${enquiry.mobile}</td></tr>
      <tr><td><b>Email</b></td><td>${enquiry.email ?? "-"}</td></tr>
      <tr><td><b>City</b></td><td>${enquiry.city}</td></tr>
      <tr><td><b>District</b></td><td>${enquiry.district}</td></tr>
      <tr><td><b>State</b></td><td>${enquiry.state}</td></tr>
      <tr><td><b>Current Business</b></td><td>${enquiry.business}</td></tr>
      <tr><td><b>Investment</b></td><td>${enquiry.investment}</td></tr>
      <tr><td><b>Preferred Location</b></td><td>${enquiry.location}</td></tr>
      <tr><td><b>Message</b></td><td>${enquiry.message ?? "-"}</td></tr>
    </table>
  `;
};