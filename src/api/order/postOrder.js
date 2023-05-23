import { accessInstance } from '../axios-api';

const postOrder = async (orderData) => {
  const res = await accessInstance.post('/order/', orderData);
  return res.data;
};

export default postOrder;
