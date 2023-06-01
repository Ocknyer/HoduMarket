import { instance } from '../axios-api';

const postDoubleCheck = async (username: string) => {
  const res = await instance.post('/accounts/signup/valid/username/', username);
  return res.data;
};

export default postDoubleCheck;
