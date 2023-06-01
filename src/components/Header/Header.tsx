import logo from '../../assets/img/Logo-hodu.png';
import cart from '../../assets/img/icon-shopping-cart.svg';
import cartGreen from '../../assets/img/icon-shopping-cart-2.svg';
import mypage from '../../assets/img/icon-user.svg';
import sellerCenter from '../../assets/img/icon-shopping-bag.svg';
import Button from '../common/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import search from '../../api/search/search';
import React, { useState } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { onSearch, searchProducts } from '../../atoms';
import { Box, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UserType } from '../Layout/Layout';

type UserTypeProps = {
  userType: UserType;
};

const Header = ({ userType }: UserTypeProps) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();

  const [inputValue, setInputValue] = useState('');
  const setSearchData = useSetRecoilState(searchProducts);
  const resetSearchData = useResetRecoilState(searchProducts);
  const setSearchCount = useSetRecoilState(onSearch);

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSellerCenter = () => {
    navigate('/sellercenter/dashboard/salesproduct');
  };

  const searchProduct = () => {
    search(inputValue)
      .then((data) => {
        setSearchCount(true);
        setSearchData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      search(inputValue)
        .then((data) => {
          setSearchCount(true);
          setSearchData(data.results);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onClickHome = () => {
    resetSearchData();
    setInputValue('');
    setSearchCount(false);
  };

  const iconWrapper = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    alignItems: 'center',
    fontSize: '12px',
    color: 'text.secondary',
  };

  const innerWrapper = {
    width: '1280px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
  };

  return (
    <Box
      component='header'
      sx={{
        width: '100%',
        height: '90px',
        backgroundColor: 'background.default',
        boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      {!location.pathname.includes('/sellercenter') ? (
        <Box sx={innerWrapper}>
          <Link to='/' onClick={() => onClickHome()}>
            <Box component='img' src={logo} alt='호두마켓 로고' width={'124px'} />
          </Link>
          <Paper
            component='form'
            elevation={0}
            sx={{
              p: '2px 10px',
              display: 'flex',
              width: '400px',
              border: '3px solid',
              borderColor: 'primary.main',
              borderRadius: '50px',
              ml: '30px',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
              }}
              placeholder='상품을 검색해 보세요!'
              value={inputValue}
              onInput={handleData}
              onKeyDown={onSubmitSearch}
            />
            <IconButton type='button' sx={{ p: 1 }} onClick={searchProduct}>
              <SearchIcon color='primary' />
            </IconButton>
          </Paper>
          <Box
            sx={{
              display: 'flex',
              gap: '26px',
              ml: 'auto',
              alignItems: 'center',
            }}
          >
            {userType === 'BUYER' ? (
              <>
                <Link to='/cart'>
                  <Box sx={iconWrapper}>
                    <img src={location.pathname === '/cart' ? cartGreen : cart} alt='' />
                    장바구니
                  </Box>
                </Link>
                {!token ? (
                  <Link to='/login'>
                    <Box sx={iconWrapper}>
                      <img src={mypage} alt='' /> 로그인
                    </Box>
                  </Link>
                ) : (
                  <Link to='/mypage'>
                    <Box sx={iconWrapper}>
                      <img src={mypage} alt='' /> 마이페이지
                    </Box>
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to='/mypage'>
                  <Box sx={iconWrapper}>
                    <img src={mypage} alt='' /> 마이페이지
                  </Box>
                </Link>
                <Button
                  onClick={handleSellerCenter}
                  width='168px'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <img src={sellerCenter} alt='' />
                  판매자 센터
                </Button>
              </>
            )}
          </Box>
        </Box>
      ) : (
        <Box sx={innerWrapper}>
          <Link to='/'>
            <Box width='80px' component='img' src={logo} alt='호두마켓 로고' />
          </Link>
          <Typography variant='h3' fontWeight='500' ml='16px'>
            판매자 센터
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Header;
