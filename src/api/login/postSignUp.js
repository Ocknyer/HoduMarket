import { instance } from '../axios-api';

export const postSignUpBuyer = async (formData) => {
  const res = await instance.post('/accounts/signup/', formData);
  return res.data;
};

export const postSignUpSeller = async (formData) => {
  const res = await instance.post(
    '/accounts/signup_seller/',
    formData
  );
  return res.data;
};
