import logo from "../../assets/img/Logo-hodu.png";
import { LoginSection, LoginWrapper } from "./styled";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginWrapper>
      <img src={logo} alt="" />
      <div className="btn-wrapper">
        <button type="button">구매회원 로그인</button>
        <button type="button">판매회원 로그인</button>
      </div>
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

export default Login;
