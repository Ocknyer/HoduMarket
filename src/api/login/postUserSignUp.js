import { instance } from '../axios-api';

const postUserSignUp = async (formData) => {
  const res = await instance.post('/accounts/login/', formData);
  return res.data;
};

export default postUserSignUp;
