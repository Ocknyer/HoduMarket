import { instance } from '../axios-api';

const postDoubleCheck = async (username) => {
  try {
    const res = await instance.post(
      '/accounts/signup/valid/username/',
      username
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default postDoubleCheck;
