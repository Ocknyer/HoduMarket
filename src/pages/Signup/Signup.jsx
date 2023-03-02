import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import postDoubleCheck from '../../api/login/postDoubleCheck';
import { postSignUpBuyer } from '../../api/login/postSignUp';
import { userTypeValue } from '../../atoms';
import UserSignUp from '../../components/User/UserSignUp/UserSignUp';

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useRecoilState(userTypeValue);
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
    password2: '',
    phone_number: '',
    name: '',
  });

  const { username, password, password2, phone_number, name } =
    inputValue;

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleUserType = (e) => {
    e.target.id === 'BUYER'
      ? setUserType('BUYER')
      : setUserType('SELLER');
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    postSignUpBuyer({
      username,
      password,
      password2,
      phone_number,
      name,
    })
      .then((data) => {
        console.log(data);
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDoubleCheck = (e) => {
    e.preventDefault();

    postDoubleCheck({ username });
  };

  return (
    <>
      <UserSignUp
        userType={userType}
        onClick={handleUserType}
        onChange={handleData}
        onSubmit={handleSignUp}
        onDoubleCheck={handleDoubleCheck}
      ></UserSignUp>
    </>
  );
};

export default Signup;
