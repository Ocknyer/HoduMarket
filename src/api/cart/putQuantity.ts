import { accessInstance } from '../axios-api';

const putQuantity = async (cart_item_id: number, itemData: {}) => {
  const res = await accessInstance.put(`/cart/${cart_item_id}/`, itemData);
  return res.data;
};

export default putQuantity;
