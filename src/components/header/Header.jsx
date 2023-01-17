import { HeaderWrapper, IconWrapper } from "./styled";
import logo from "../../assets/img/Logo-hodu.png";
import cart from "../../assets/img/icon-shopping-cart.svg";
import mypage from "../../assets/img/icon-user.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="호두마켓 로고" className="logo" />
      <form>
        <input
          className="inp-search"
          type="text"
          placeholder="상품을 검색해보세요!"
        />
        <button className="btn-search" type="button"></button>
      </form>
      <div className="icon-group">
        <IconWrapper>
          <img src={cart} alt="" /> 장바구니
        </IconWrapper>
        <IconWrapper>
          <img src={mypage} alt="" /> 마이페이지
        </IconWrapper>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
