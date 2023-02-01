import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import postUserLogin from "../../api/login/postUserLogin";
import { userTypeValue } from "../../atoms";
import UserLogin from "../../components/User/UserLogin/UserLogin";

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useRecoilState(userTypeValue);

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { username, password } = input;

  console.log(username, password);

  const handleData = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const handleUserType = (e) => {
    e.target.id === "BUYER"
      ? setUserType("BUYER")
      : setUserType("SELLER");
  };

  console.log(input);

  const handleLogin = (e) => {
    e.preventDefault();
    postUserLogin({
      username: username,
      password: password,
      login_type: userType,
    })
      .then((data) => {
        console.log(data);
        navigate("/");
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
