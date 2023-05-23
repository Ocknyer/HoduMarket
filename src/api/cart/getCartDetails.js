import { accessInstance } from "../axios-api";

const getCartDetails = async (cart_item_id) => {
  const res = await accessInstance.get(`/cart/${cart_item_id}`);
  return res.data;
};

export default getCartDetails;
