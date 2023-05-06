import { instance } from '../axios-api';

const search = async (productName) => {
  const res = await instance.get(`/products/?search=${productName}`);
  return res.data;
};

export default search;
