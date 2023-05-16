import logo from '../../../assets/img/Logo-hodu.png';
import { LoginForm } from '../../../components/User/UserLogin/styled';
// import Button from '../../../components/common/Button/Button';
import { Link } from 'react-router-dom';
import UserTab from '../UserTab/UserTab';
import { Box, Button, TextField, Typography } from '@mui/material';

const UserLogin = ({
  userType,
  onClick,
  onChange,
  onSubmit,
  errorMsg,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '550px',
        m: '100px auto',
        alignItems: 'center',
      }}
    >
      <Link to={'/'}>
        <img
          src={logo}
          alt='호두마켓 로고'
          style={{ marginBottom: '70px' }}
        />
      </Link>
      <UserTab userType={userType}>
        <button type='button' id='BUYER' onClick={onClick}>
          구매회원 로그인
        </button>
        <button type='button' id='SELLER' onClick={onClick}>
          판매회원 로그인
        </button>
      </UserTab>
      <LoginForm onSubmit={onSubmit} errorMsg={errorMsg}>
        <TextField
          type='type'
          id='id'
          name='username'
          onChange={onChange}
          placeholder='아이디'
          required
          sx={{
            mb: '6px',
          }}
        />
        <TextField
          type='password'
          id='password'
          name='password'
          onChange={onChange}
          placeholder='비밀번호'
          required
          sx={{
            mb: errorMsg ? '0' : '36px',
          }}
        />
        {errorMsg ? (
          <Typography
            variant='h5'
            component='p'
            color='text.red'
            m='26px 0'
          >
            {errorMsg}
          </Typography>
        ) : null}
        <Button
          variant='contained'
          width='100%'
          size='large'
          type='submit'
          // color='white'
        >
          로그인
        </Button>
      </LoginForm>
      <Box>
        <Link
          to='/signup'
          style={{
            color: '#333',
            marginRight: '16px',
          }}
        >
          회원가입
        </Link>
        |
        <Link
          to='/'
          style={{
            color: '#333',
            marginLeft: '16px',
          }}
        >
          비밀번호 찾기
        </Link>
      </Box>
    </Box>
  );
};

export default UserLogin;
