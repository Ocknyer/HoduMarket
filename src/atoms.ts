import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userTypeValue = atom<string>({
  key: 'login_type',
  default: 'BUYER',
  effects_UNSTABLE: [persistAtom],
});

export const searchProducts = atom<[]>({
  key: 'search_data',
  default: [],
});

export const onSearch = atom<boolean>({
  key: 'on_search',
  default: false,
});

export const modalIsOpen = atom<boolean>({
  key: 'modal_is_open',
  default: false,
});

export const cartItemId = atom<number>({
  key: 'cart_item_id',
  default: 0,
});
