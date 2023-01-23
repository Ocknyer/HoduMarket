import logo from "../../../assets/img/Logo-hodu.png";
import {
  LoginSection,
  LoginWrapper,
} from "../../../components/User/UserLogin/styled";
import Button from "../../../components/common/Button/Button";
import { Link } from "react-router-dom";
import UserTab from "../UserTab/UserTab";

const UserLogin = () => {
  return (
    <LoginWrapper>
      <img src={logo} alt="" />
      <UserTab />
      <LoginSection>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <Button width="100%" size="md">
          로그인
        </Button>
      </LoginSection>
      <div className="link-wrapper">
        <Link to="/signup">회원가입</Link>|
        <Link to="/">비밀번호 찾기</Link>
      </div>
    </LoginWrapper>
  );
};

export default UserLogin;
