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

export const totalPaymentPrice = atom({
  key: 'total_payment_price',
  default: 0,
});

export const totalShippingFee = atom({
  key: 'total_shipping_fee',
  default: 0,
});

export const cartItems = atom({
  key: 'cart_items',
  default: [],
});
