import Instance, { createFormData } from "./instance";

export const getPosts = () => {
  return Instance.get("/posts");
};
