import logo from '../../../assets/img/Logo-hodu.png';
import Button from '../../common/Button/Button';
import UserTab from '../UserTab/UserTab';
import { SignupForm, SignUpWrapper } from './styled';

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
      <SignupForm>
        <label>
          아이디
          <input type='text' />
          <Button size='sm' width='122px'>
            중복확인
          </Button>
        </label>
        <label>
          비밀번호
          <input type='text' />
        </label>
        <label>
          비밀번호 재확인
          <input type='text' />
        </label>
        <label>
          이름
          <input type='text' />
        </label>
        <label>
          휴대폰번호
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </label>
        <label>
          이메일
          <input type='text' />@
          <input type='text' />
        </label>
      </SignupForm>
      <input type='checkbox' />
      <p>
        호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
        동의합니다.
      </p>
      <Button size='md' width='480px' bc='#c4c4c4'>
        가입하기
      </Button>
    </SignUpWrapper>
  );
};

export default UserSignUp;
