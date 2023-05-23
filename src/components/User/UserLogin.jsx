import logo from '../../assets/img/Logo-hodu.png';
import { Link } from 'react-router-dom';
import UserTab from './UserTab';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

const UserLogin = ({ tempUserType, onClick, onChange, onSubmit, errormsg }) => {
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
        <Box component='img' src={logo} alt='호두마켓 로고' sx={{ marginBottom: '70px' }} />
      </Link>
      <UserTab tempUserType={tempUserType}>
        <button type='button' id='BUYER' onClick={onClick}>
          구매회원 로그인
        </button>
        <button type='button' id='SELLER' onClick={onClick}>
          판매회원 로그인
        </button>
      </UserTab>
      <Paper
        component='form'
        onSubmit={onSubmit}
        errormsg={errormsg ? errormsg : ''}
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          p: '35px 34px',
          mb: '30px',
          border: '1px solid var(--greyC4)',
          backgroundColor: '#fff',
          borderRadius: '10px',
          zIndex: '99',
        }}
      >
        <TextField
          type='type'
          id='id'
          name='username'
          onChange={onChange}
          label='아이디'
          required
          sx={{
            mb: '15px',
          }}
        />
        <TextField
          type='password'
          id='password'
          name='password'
          onChange={onChange}
          label='비밀번호'
          required
          sx={{
            mb: errormsg ? '0' : '36px',
          }}
        />

        {errormsg ? (
          <Typography variant='h5' component='p' color='text.red' m='26px 0'>
            {errormsg}
          </Typography>
        ) : null}

        <Button variant='contained' width='100%' size='large' type='submit' disableElevation>
          로그인
        </Button>
      </Paper>
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
