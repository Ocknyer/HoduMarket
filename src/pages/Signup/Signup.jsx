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
  const [usernameMsg, setUsernameMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

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

    postSignUpBuyer(inputValue)
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

    postDoubleCheck({ username })
      .then((data) => {
        setUsernameMsg(data.Success);
      })
      .catch((error) => {
        if (error.request.response.includes('사용 중인')) {
          setUsernameMsg('이미 사용 중인 아이디입니다.');
        }
      });
  };

  const passwordCheck = () => {
    console.log(password, password2);
    if (password !== password2) {
      setPasswordMsg('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordMsg('비밀번호가 일치합니다.');
    }
  };

  console.log(passwordMsg);

  return (
    <>
      <UserSignUp
        userType={userType}
        onClick={handleUserType}
        onChange={handleData}
        onSubmit={handleSignUp}
        onDoubleCheck={handleDoubleCheck}
        usernameMsg={usernameMsg}
        passwordMsg={passwordMsg}
        passwordCheck={passwordCheck}
      ></UserSignUp>
    </>
  );
};

export default Signup;
