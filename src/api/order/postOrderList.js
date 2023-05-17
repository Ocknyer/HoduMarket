import { accessInstance } from '../axios-api';

const postOrderList = async () => {
  const res = await accessInstance.post('/order');
  return res.data;
};

export default postOrderList;
