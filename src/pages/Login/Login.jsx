import { useState } from "react";
import { useRecoilState } from "recoil";
import { userTypeValue } from "../../atoms";
import UserLogin from "../../components/User/UserLogin/UserLogin";

const Login = () => {
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
  };

  const handleUserType = () => {
    setUserType("SELLER");
    console.log(userType);
  };

  return (
    <UserLogin
      userType={userType}
      formData={input}
      onTypeChange={handleUserType}
      onChange={handleData}
    />
  );
};

export default Login;
