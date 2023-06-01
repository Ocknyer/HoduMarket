import { accessInstance } from '../axios-api';
import { getProductDetail } from '../axios-api';

const getCartItems = async () => {
  const cartItemDetails = [];
  const res: [] = (await accessInstance.get('/cart')).data.results;
  const filterItem = await Promise.all(res.map((item: any) => getProductDetail(item.product_id)));

  cartItemDetails.push(...res);

  const resultArray = cartItemDetails.map((item: {}, idx) => {
    return { ...item, ...filterItem[idx] };
  });

  return resultArray;
};

export default getCartItems;
