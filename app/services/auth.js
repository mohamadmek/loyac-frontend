import Instance, { createFormData } from "./instance";

export const loginApi = (body) => {
  return Instance.post("/auth/login", body);
};

export const registerApi = (body) => {
  return Instance.post("/auth/register", body);
};
