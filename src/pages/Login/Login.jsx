import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userTypeValue } from "../../atoms";
import UserLogin from "../../components/User/UserLogin/UserLogin";

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useRecoilState(userTypeValue);

  const [input, setInput] = useState({
    username: "",
    password: "",
    login_type: userType,
  });

  const { username, password, login_type } = input;

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

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <UserLogin
      userType={userType}
      onClick={handleUserType}
      onChange={handleData}
      onSubmit={handleLogin}
      value={input}
    />
  );
};

export default Login;
