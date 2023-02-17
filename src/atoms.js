import { atom } from 'recoil';

export const userTypeValue = atom({
  key: 'login_type',
  default: 'BUYER',
});
