import logo from '../../../assets/img/Logo-hodu.png';
import UserTab from '../UserTab/UserTab';
import { SignUpWrapper } from './styled';

const UserSignUp = ({ onClick }) => {
  return (
    <SignUpWrapper>
      <img src={logo} alt='호두마켓 로고' />
      <UserTab>
        <button type='button' id='BUYER' onClick={onClick}>
          구매회원 로그인
        </button>
        <button type='button' id='SELLER' onClick={onClick}>
          판매회원 로그인
        </button>
      </UserTab>
    </SignUpWrapper>
  );
};

export default UserSignUp;
