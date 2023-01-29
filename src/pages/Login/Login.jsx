import UserLogin from "../../components/User/UserLogin/UserLogin";
import useForm from "../../hooks/useForm";

const Login = () => {
  const { formData, onChangeHandler } = useForm({
    username: "",
    password: "",
    login_type: "",
  });

  const userType = formData.login_type;

  return (
    <UserLogin
      userType={userType}
      formData={formData}
      onChange={onChangeHandler}
    />
  );
};

export default Login;
