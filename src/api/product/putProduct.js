import { accessInstance } from "../axios-api";

const putProduct = async (product_id, itemData) => {
  const res = await accessInstance.put(`/products/${product_id}/`, itemData);
  return res.data;
};

export default putProduct;
