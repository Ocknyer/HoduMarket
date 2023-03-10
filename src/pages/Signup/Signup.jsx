import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import postDoubleCheck from '../../api/login/postDoubleCheck';
import { postSignUpBuyer } from '../../api/login/postSignUp';
import { userTypeValue } from '../../atoms';
import UserSignUp from '../../components/User/UserSignUp/UserSignUp';

const Signup = () => {
  const initialState = {
    username: '',
    password: '',
    password2: '',
    phone_number: '',
    name: '',
    company_registration_number: '',
    store_name: '',
  };

  const navigate = useNavigate();
  const [userType, setUserType] = useRecoilState(userTypeValue);
  const [usernameMsg, setUsernameMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [errors, setErrors] = useState({ ...initialState });
  const [inputValue, setInputValue] = useState({ ...initialState });
  const [isValid, setIsValid] = useState({
    username: false,
    password: false,
    password2: false,
    phone_number: false,
    name: false,
    company_registration_number: false,
    store_name: false,
  });

  const {
    username,
    password,
    password2,
    phone_number,
    name,
    company_registration_number,
    store_name,
  } = inputValue;

  const regEx = (target, targetName) => {
    if (targetName === 'username') {
      return /^[a-z]+[a-zA-Z0-9]{5,19}$/g.test(target);
    } else if (targetName === 'password') {
      return /^(?=.*[a-z])(?=.*[0-9]).{8,16}$/g.test(target);
    } else if (targetName === 'password2') {
      return target !== password ? false : true;
    } else if (targetName === 'phone_number') {
      return /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/g.test(
        target
      );
    } else if (targetName === 'name') {
      return target === '' ? false : true;
    } else if (targetName === 'company_registration_number') {
      return /^[0-9]{10}$/g.test(target);
    }
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });

    if (!regEx(value, name)) {
      setIsValid({
        ...isValid,
        [name]: true,
      });
      if (name === 'username') {
        setErrors({
          ...errors,
          [name]:
            '6??? ?????? 20??? ????????? ?????? ?????????, ?????????, ????????? ?????? ???????????????.',
        });
      } else if (name === 'password') {
        setErrors({
          ...errors,
          [name]: '??????????????? 8??? ??????, ??????????????? ???????????? ?????????.',
        });
      } else if (name === 'password2' && value !== password) {
        setErrors({
          ...errors,
          [name]: '??????????????? ???????????? ????????????.',
        });
      } else if (name === 'phone_number') {
        setErrors({
          ...errors,
          [name]:
            '?????????????????? 01*?????? ???????????? ?????? 10~11?????? ???????????? ?????????.',
        });
      } else if (
        userType === 'SELLER' &&
        name === 'company_registration_number'
      ) {
        setErrors({
          ...errors,
          [name]: '???????????????????????? 10????????? ???????????? ???????????????.',
        });
      }
    } else {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
    if (userType === 'SELLER') {
    }
  };

  // const handleData = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue({ ...inputValue, [name]: value });
  // };

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
        if (error.request.response.includes('?????? ??????')) {
          setUsernameMsg('?????? ?????? ?????? ??????????????????.');
        }
      });
  };

  const passwordCheck = () => {
    console.log(password, password2);
    if (password !== password2) {
      setPasswordMsg('??????????????? ???????????? ????????????.');
    } else {
      setPasswordMsg('??????????????? ???????????????.');
    }
  };

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
        errors={errors}
        isValid={isValid}
        passwordCheck={passwordCheck}
      ></UserSignUp>
    </>
  );
};

export default Signup;
