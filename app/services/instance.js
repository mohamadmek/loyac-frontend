import axios from "axios";

const baseUrl = "http://192.168.1.105:5000/api";

const Instance = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  // headers: {
  //   Accept: "application/json",
  //   Accept: "application/x-www-form-urlencoded",
  // },
});

export const createFormData = () => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  return formData;
};

export default Instance;
