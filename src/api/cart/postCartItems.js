import { accessInstance } from '../axios-api';

const postCartItems = async (productData) => {
  const res = await accessInstance.post(`/cart/`, productData);
  return res.data;
};

export default postCartItems;
