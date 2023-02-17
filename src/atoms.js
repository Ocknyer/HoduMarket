import { atom } from 'recoil';

export const userTypeValue = atom({
  key: 'login_type',
  default: 'BUYER',
});

export const quantityValue = atom({
  key: 'quantity',
  default: 1,
});
