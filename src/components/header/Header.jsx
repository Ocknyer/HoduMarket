import { HeaderWrapper, InnerWrapper } from "./styled";
import logo from "../../assets/img/Logo-hodu.png";
import cart from "../../assets/img/icon-shopping-cart.svg";
import cartGreen from "../../assets/img/icon-shopping-cart-2.svg";
import mypage from "../../assets/img/icon-user.svg";
import sellerCenter from "../../assets/img/icon-shopping-bag.svg";
import Button from "../common/Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import search from "../../api/search/search";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchProducts } from "../../atoms";
import { Box } from "@mui/material";

const Header = ({ userType }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useRecoilState(searchProducts);

  const handleData = (e) => {
    setInputValue(e.target.value);
  };

  const handleSellerCenter = () => {
    navigate("/sellercenter/salesproduct");
  };

  const searchProduct = () => {
    search(inputValue)
      .then((data) => {
        setSearchData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      search(inputValue)
        .then((data) => {
          setSearchData(data.results);
          console.log(searchData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const iconWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "center",
    fontSize: "12px",
    color: "text.grey",
  };

  return (
    <HeaderWrapper>
      {!location.pathname.includes("/sellercenter") ? (
        <InnerWrapper>
          <Link to="/">
            <img src={logo} alt="호두마켓 로고" className="logo" />
          </Link>
          <form>
            <input
              className="inp-search"
              type="text"
              placeholder="상품을 검색해보세요!"
              onInput={handleData}
              onKeyDown={onSubmitSearch}
            />
            <button
              className="btn-search"
              type="button"
              onClick={searchProduct}
            ></button>
          </form>
          <div className="icon-group">
            {userType === "BUYER" ? (
              <>
                <Link to="/cart">
                  <Box sx={iconWrapper}>
                    <img
                      src={location.pathname === "/cart" ? cartGreen : cart}
                      alt=""
                    />
                    장바구니
                  </Box>
                </Link>
                {!token ? (
                  <Link to="/login">
                    <Box sx={iconWrapper}>
                      <img src={mypage} alt="" /> 로그인
                    </Box>
                  </Link>
                ) : (
                  <Link to="/mypage">
                    <Box sx={iconWrapper}>
                      <img src={mypage} alt="" /> 마이페이지
                    </Box>
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to="/mypage">
                  <Box sx={iconWrapper}>
                    <img src={mypage} alt="" /> 마이페이지
                  </Box>
                </Link>
                <Button onClick={handleSellerCenter}>
                  <img src={sellerCenter} alt="" />
                  판매자 센터
                </Button>
              </>
            )}
          </div>
        </InnerWrapper>
      ) : (
        <InnerWrapper>
          <Link to="/">
            <img src={logo} alt="호두마켓 로고" className="logo-seller" />
          </Link>
          <h1 className="tit-seller-center">판매자 센터</h1>
        </InnerWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
