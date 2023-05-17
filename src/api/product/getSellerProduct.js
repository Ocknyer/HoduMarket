import { accessInstance } from '../axios-api';

const getSellerProduct = async () => {
  const res = await accessInstance.get('/seller');
  return res.data.results;
};

export default getSellerProduct;
