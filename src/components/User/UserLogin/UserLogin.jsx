import logo from "../../../assets/img/Logo-hodu.png";
import {
  LoginForm,
  LoginWrapper,
} from "../../../components/User/UserLogin/styled";
import Button from "../../../components/common/Button/Button";
import { Link } from "react-router-dom";
import UserTab from "../UserTab/UserTab";

const UserLogin = ({ userType, onClick, onChange, onSubmit }) => {
  return (
    <LoginWrapper>
      <img src={logo} alt="호두마켓 로고" />
      <UserTab userType={userType}>
        <button type="button" id="BUYER" onClick={onClick}>
          구매회원 로그인
        </button>
        <button type="button" id="SELLER" onClick={onClick}>
          판매회원 로그인
        </button>
      </UserTab>
      <LoginForm onSubmit={onSubmit}>
        <input
          type="type"
          id="id"
          name="username"
          onChange={onChange}
          placeholder="아이디"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          placeholder="비밀번호"
          required
        />
        <Button width="100%" size="md" type="submit">
          로그인
        </Button>
      </LoginForm>
      <div className="link-wrapper">
        <Link to="/signup">회원가입</Link>|
        <Link to="/">비밀번호 찾기</Link>
      </div>
    </LoginWrapper>
  );
};

export default UserLogin;
