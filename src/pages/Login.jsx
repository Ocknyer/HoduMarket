import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import postUserLogin from '../api/login/postUserLogin';
import { userTypeValue } from '../atoms';
import UserLogin from '../components/User/UserLogin';

const Login = () => {
  const navigate = useNavigate();
  const [tempUserType, setTempUserType] = useState('BUYER');
  const setUserType = useSetRecoilState(userTypeValue);

  const [errorMsg, setErrorMsg] = useState('');
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputValue;

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleUserType = (e) => {
    e.target.id === 'BUYER' ? setTempUserType('BUYER') : setTempUserType('SELLER');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    postUserLogin({
      username,
      password,
      login_type: tempUserType,
    })
      .then((data) => {
        localStorage.setItem('token', data.token);
        setUserType(tempUserType === 'BUYER' ? 'BUYER' : 'SELLER');
        navigate('/');
      })
      .catch((error) => {
        if (error.request.status === 401) {
          setErrorMsg('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      });
  };

  return (
    <UserLogin
      tempUserType={tempUserType}
      onClick={handleUserType}
      onChange={handleData}
      onSubmit={handleLogin}
      errorMsg={errorMsg}
    />
  );
};

export default Login;
