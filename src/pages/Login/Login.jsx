import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import postUserLogin from '../../api/login/postUserLogin';
import { userTypeValue } from '../../atoms';
import UserLogin from '../../components/User/UserLogin/UserLogin';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useRecoilState(userTypeValue);
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputValue;

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  const handleUserType = (e) => {
    e.target.id === 'BUYER'
      ? setUserType('BUYER')
      : setUserType('SELLER');

    console.log(userType);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    postUserLogin({
      username,
      password,
      login_type: userType,
    })
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserLogin
      userType={userType}
      onClick={handleUserType}
      onChange={handleData}
      onSubmit={handleLogin}
    />
  );
};

export default Login;
