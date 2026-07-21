import api from "./api";

export const submitStudentEnquiry = async (data) => {
  const response = await api.post("/student-enquiry", data);
  return response.data;
};