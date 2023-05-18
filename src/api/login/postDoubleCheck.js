import { instance } from "../axios-api";

const postDoubleCheck = async (username) => {
  const res = await instance.post("/accounts/signup/valid/username/", username);
  return res.data;
};

export default postDoubleCheck;
