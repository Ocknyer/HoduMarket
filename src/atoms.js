import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userTypeValue = atom({
  key: 'login_type',
  default: 'BUYER',
  effects_UNSTABLE: [persistAtom],
});

export const searchProducts = atom({
  key: 'search_data',
  default: [],
});

export const quantity = atom({
  key: 'product_qauntity',
  default: 1,
});

export const cartItems = atom({
  key: 'cart_items',
  default: [],
});
