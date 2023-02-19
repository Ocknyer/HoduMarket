import logo from '../../../assets/img/Logo-hodu.png';
import Button from '../../common/Button/Button';
import UserTab from '../UserTab/UserTab';
import { InputBox, SignupForm, SignUpWrapper } from './styled';

const UserSignUp = ({ userType, onClick }) => {
  return (
    <SignUpWrapper>
      <img src={logo} alt='호두마켓 로고' />
      <UserTab userType={userType}>
        <button type='button' id='BUYER' onClick={onClick}>
          구매회원 로그인
        </button>
        <button type='button' id='SELLER' onClick={onClick}>
          판매회원 로그인
        </button>
      </UserTab>
      <SignupForm>
        <InputBox>
          <label>아이디</label>
          <input type='text' className='id-inp' />
          <Button
            size='sm'
            width='122px'
            type='button'
            className='valid-btn'
          >
            중복확인
          </Button>
        </InputBox>
        <InputBox>
          <label>비밀번호</label>
          <input type='text' className='pw-inp' />
        </InputBox>
        <InputBox>
          <label>비밀번호 재확인</label>
          <input type='text' className='pwv-inp' />
        </InputBox>
        <InputBox>
          <label>이름</label>
          <input type='text' className='name-inp' />
        </InputBox>
        <InputBox>
          <label>휴대폰번호</label>
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </InputBox>
        <InputBox>
          <label>이메일</label>
          <input type='text' />@
          <input type='text' />
        </InputBox>
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
