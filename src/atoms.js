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

export const modalIsOpen = atom({
  key: 'modal_is_open',
  default: false,
});

export const cartItemId = atom({
  key: 'cart_item_id',
  default: 0,
});
