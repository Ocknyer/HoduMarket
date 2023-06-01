import { accessInstance } from '../axios-api';

const deleteSellerProduct = async (product_id: number) => {
  const res = await accessInstance.delete(`/products/${product_id}`);
  return res.data;
};

export default deleteSellerProduct;
