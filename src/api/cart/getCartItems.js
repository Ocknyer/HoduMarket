import { accessInstance } from '../axios-api';

const getCartItems = async () => {
  const res = await accessInstance.get('/cart');
  return res.data;
};

export default getCartItems;
