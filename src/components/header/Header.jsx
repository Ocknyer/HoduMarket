import { HeaderWrapper, IconWrapper, InnerWrapper } from './styled';
import logo from '../../assets/img/Logo-hodu.png';
import cart from '../../assets/img/icon-shopping-cart.svg';
import cartGreen from '../../assets/img/icon-shopping-cart-2.svg';
import mypage from '../../assets/img/icon-user.svg';
import sellerCenter from '../../assets/img/icon-shopping-bag.svg';
import Button from '../common/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import search from '../../api/search/search';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchProducts } from '../../atoms';

const Header = ({ userType }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();

  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useRecoilState(searchProducts);

  const handleData = (e) => {
    setInputValue(e.target.value);
  };

  const handleSellerCenter = () => {
    navigate('/sellercenter');
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

  console.log(searchData);

  const onSubmitSearch = (e) => {
    if (e.key === 'Enter') {
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

  return (
    <HeaderWrapper>
      {location.pathname !== '/sellercenter' ? (
        <InnerWrapper>
          <Link to='/'>
            <img src={logo} alt='호두마켓 로고' className='logo' />
          </Link>
          <form>
            <input
              className='inp-search'
              type='text'
              placeholder='상품을 검색해보세요!'
              onInput={handleData}
              onKeyDown={onSubmitSearch}
            />
            <button
              className='btn-search'
              type='button'
              onClick={searchProduct}
            ></button>
          </form>
          <div className='icon-group'>
            {userType === 'BUYER' ? (
              <>
                <Link to='/cart'>
                  <IconWrapper>
                    <img
                      src={
                        location.pathname === '/cart'
                          ? cartGreen
                          : cart
                      }
                      alt=''
                    />
                    장바구니
                  </IconWrapper>
                </Link>
                {!token ? (
                  <Link to='/login'>
                    <IconWrapper>
                      <img src={mypage} alt='' /> 로그인
                    </IconWrapper>
                  </Link>
                ) : (
                  <Link to='/mypage'>
                    <IconWrapper>
                      <img src={mypage} alt='' /> 마이페이지
                    </IconWrapper>
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to='/mypage'>
                  <IconWrapper>
                    <img src={mypage} alt='' /> 마이페이지
                  </IconWrapper>
                </Link>
                <Button onClick={handleSellerCenter}>
                  <img src={sellerCenter} alt='' />
                  판매자 센터
                </Button>
              </>
            )}
          </div>
        </InnerWrapper>
      ) : (
        <InnerWrapper>
          <Link to='/'>
            <img
              src={logo}
              alt='호두마켓 로고'
              className='logo-seller'
            />
          </Link>
          <h1 className='tit-seller-center'>판매자 센터</h1>
        </InnerWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
