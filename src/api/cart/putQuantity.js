import { accessInstance } from '../axios-api';

const putQuantity = async (itemData) => {
  const { cart_item_id, product_id, quantity, is_active } = itemData;

  const res = await accessInstance.put(`/cart/${cart_item_id}/`, {
    product_id,
    quantity,
    is_active,
  });
  return res.data;
};

export default putQuantity;
