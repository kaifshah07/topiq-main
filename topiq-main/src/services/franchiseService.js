import api from "./api";

export const submitFranchiseEnquiry = async (data) => {
  const response = await api.post("/franchise-enquiry", data);
  return response.data;
};