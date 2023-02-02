import { HeaderWrapper, IconWrapper } from "./styled";
import logo from "../../assets/img/Logo-hodu.png";
import cart from "../../assets/img/icon-shopping-cart.svg";
import mypage from "../../assets/img/icon-user.svg";
import sellerCenter from "../../assets/img/icon-shopping-bag.svg";
import Button from "../common/Button/Button";

const Header = ({ userType }) => {
  console.log(userType);

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
        {userType === "BUYER" ? (
          <>
            <IconWrapper>
              <img src={cart} alt="" /> 장바구니
            </IconWrapper>
            <IconWrapper>
              <img src={mypage} alt="" /> 마이페이지
            </IconWrapper>
          </>
        ) : (
          <>
            <IconWrapper>
              <img src={mypage} alt="" /> 마이페이지
            </IconWrapper>
            <Button>
              <img src={sellerCenter} alt="" />
              판매자 센터
            </Button>
          </>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
