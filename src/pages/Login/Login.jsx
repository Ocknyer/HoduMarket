import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userTypeValue } from "../../atoms";
import UserLogin from "../../components/User/UserLogin/UserLogin";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: "",
    login_type: "",
  });

  const { username, password, login_type } = input;

  const [userType, setUserType] = useRecoilState(userTypeValue);

  const handleData = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const handleUserType = () => {
    setUserType("SELLER");
    console.log(userType);
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <UserLogin
      userType={userType}
      onTypeChange={handleUserType}
      onChange={handleData}
      onSubmit={handleLogin}
      re
    />
  );
};

export default Login;
