import Instance, { createFormData } from "./instance";

export const getCategories = () => {
  return Instance.get("/posts/categories");
};
