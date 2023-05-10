import { instance } from '../axios-api';

const deleteCartItem = async (cart_item_id) => {
  const res = await instance.delete(`/cart/${cart_item_id}`);
  return res.data;
};

export default deleteCartItem;
