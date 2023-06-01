import { accessInstance } from '../axios-api';

const postSellerProduct = async (productData: {}) => {
  const res = await accessInstance.post(`/products/`, productData);
  return res.data;
};

export default postSellerProduct;
