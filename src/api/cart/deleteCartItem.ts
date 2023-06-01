import { accessInstance } from '../axios-api';

const deleteCartItem = async (cart_item_id: number) => {
  const res = await accessInstance.delete(`/cart/${cart_item_id}`);
  return res.data;
};

export default deleteCartItem;
