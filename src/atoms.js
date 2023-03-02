import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userTypeValue = atom({
  key: 'login_type',
  default: 'BUYER',
  effects_UNSTABLE: [persistAtom],
});
