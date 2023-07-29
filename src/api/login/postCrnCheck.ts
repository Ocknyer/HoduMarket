import { instance } from '../axios-api';

const postCrnCheck = async (company_registration_number: string) => {
  const res = await instance.post('/accounts/signup/valid/company_registration_number/', company_registration_number);
  return res.data;
};

export default postCrnCheck;
