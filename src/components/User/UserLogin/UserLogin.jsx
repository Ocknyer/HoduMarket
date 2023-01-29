import logo from "../../../assets/img/Logo-hodu.png";
import {
  LoginSection,
  LoginWrapper,
} from "../../../components/User/UserLogin/styled";
import Button from "../../../components/common/Button/Button";
import { Link } from "react-router-dom";
import UserTab from "../UserTab/UserTab";

const UserLogin = ({ userType, formData, onChange }) => {
  return (
    <LoginWrapper>
      <img src={logo} alt="호두마켓 로고" />
      <UserTab userType={userType}>
        <button type="button" onClick={handleUserType}>
          구매회원 로그인
        </button>
        <button type="button" onClick={handleUserType}>
          판매회원 로그인
        </button>
      </UserTab>
      <LoginSection>
        <input type="type" id="id" placeholder="아이디" />
        <input type="password" id="password" placeholder="비밀번호" />
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
