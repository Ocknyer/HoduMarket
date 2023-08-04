import { Box, Button } from '@mui/material';
import DefaultWrapper from '../components/common/Wrapper/DefaultWrapper';
import { Navigate, useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { userTypeValue } from '../atoms';
import { useEffect, useState } from 'react';
import getOrderList from '../api/order/getOrderList';
import MyPageOrderList from '../components/MyPage/MyPageOrderList';
import { OrderData } from '../interface/types';

const MyPage = ({ authorization }) => {
  const navigate = useNavigate();
  const resetUserType = useResetRecoilState(userTypeValue);
  const [orderData, setOrderData] = useState<OrderData[]>([]);

  const handleLogout = () => {
    resetUserType();
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    getOrderList()
      .then(data => {
        setOrderData(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return authorization ? (
    <>
      <DefaultWrapper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: '50px 0px',
            p: '0px 0px',
          }}
        >
          <MyPageOrderList orderData={orderData} />
          <Button
            variant='contained'
            onClick={handleLogout}
            sx={{
              width: '120px',
              mt: '30px',
            }}
          >
            로그아웃
          </Button>
        </Box>
      </DefaultWrapper>
    </>
  ) : (
    <Navigate to='/' />
  );
};

export default MyPage;
