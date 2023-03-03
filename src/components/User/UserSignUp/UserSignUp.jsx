import logo from '../../../assets/img/Logo-hodu.png';
import Button from '../../common/Button/Button';
import UserTab from '../UserTab/UserTab';
import { InputBox, SignupForm, SignUpWrapper } from './styled';

const UserSignUp = ({
  userType,
  onClick,
  onSubmit,
  onChange,
  onDoubleCheck,
  usernameMsg,
  passwordMsg,
  passwordCheck,
}) => {
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
      <SignupForm onSubmit={onSubmit}>
        <InputBox usernameMsg={usernameMsg}>
          <label>아이디</label>
          <input
            type='text'
            className='id-inp'
            name='username'
            onChange={onChange}
          />
          <Button
            size='sm'
            width='122px'
            type='button'
            className='valid-btn'
            onClick={onDoubleCheck}
          >
            중복확인
          </Button>
          {usernameMsg ? (
            <p className='username-error'>{usernameMsg}</p>
          ) : null}
        </InputBox>
        <InputBox>
          <label>비밀번호</label>
          <input
            type='password'
            className='pw-inp'
            name='password'
            onChange={onChange}
          />
        </InputBox>
        <InputBox passwordMsg={passwordMsg}>
          <label>비밀번호 재확인</label>
          <input
            type='password'
            className='pwv-inp'
            name='password2'
            onChange={onChange}
            onKeyUp={passwordCheck}
          />
          {passwordMsg ? (
            <p className='password-error'>{passwordMsg}</p>
          ) : null}
        </InputBox>
        <InputBox>
          <label>이름</label>
          <input
            type='text'
            className='name-inp'
            name='name'
            onChange={onChange}
          />
        </InputBox>
        <InputBox>
          <label>휴대폰번호</label>
          <input
            type='text'
            className='pn-inp'
            name='phone_number'
            onChange={onChange}
          />
          {/* <input
            type='text'
            className='pn-inp'
            name='phone_number'
            onChange={onChange}
          />
          <input
            type='text'
            className='pn-inp'
            name='phone_number'
            onChange={onChange}
          /> */}
        </InputBox>
        <InputBox>
          <label>이메일</label>
          <input type='text' className='email-inp' />
          <p className='at'>@</p>
          <input type='text' className='email-inp' />
        </InputBox>

        {userType === 'SELLER' ? (
          <>
            <InputBox>
              <label htmlFor='company-num'>사업자 등록번호</label>
              <input type='text' id='company-num' />
              <Button size='sm' width='122px'>
                인증
              </Button>
            </InputBox>
            <InputBox>
              <label htmlFor='store-name'>스토어 이름</label>
              <input type='text' />
            </InputBox>
          </>
        ) : null}
      </SignupForm>
      <div className='check-box'>
        <input type='checkbox' />
        <label className='check-privacy'>
          호두샵의 <span>이용약관</span> 및{' '}
          <span>개인정보처리방침</span>에 대한 내용을 확인하였고
          동의합니다.
        </label>
      </div>
      <Button
        type='submit'
        size='md'
        width='480px'
        bc='#c4c4c4'
        onClick={onSubmit}
      >
        가입하기
      </Button>
    </SignUpWrapper>
  );
};

export default UserSignUp;
