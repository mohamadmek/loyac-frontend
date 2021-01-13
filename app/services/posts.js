import Instance, { createFormData } from "./instance";

export const getPosts = () => {
  return Instance.get("/posts");
};

export const getPostsByID = (id) => {
  return Instance.get("/posts/category/" + id);
};
