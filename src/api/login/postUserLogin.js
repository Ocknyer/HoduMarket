import { instance } from "../axios-api";

const postUserLogin = async (formData) => {
  const res = await instance.post("/accounts/login/", formData);
  return res.data;
};

export default postUserLogin;
