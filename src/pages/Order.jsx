import { useLocation, useNavigate } from 'react-router-dom';
import DefaultWrapper from '../components/common/Wrapper/DefaultWrapper';
import { InnerWrapper, InnerHeader } from '../components/common/Wrapper/InnerWrapper';
import OrderList from '../components/Order/OrderList';
import UserInfo from '../components/Order/UserInfo';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import postOrder from '../api/order/postOrder';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cartData = location.state.cartLists;
  const payment = location.state.payment;
  const totalPayment = location.state.payment.price + location.state.payment.shipping_fee;
  const order_kind = location.state.order_kind;
  const quantity = location.state.cartLists[0].quantity;
  const product_id = location.state.cartLists[0].product_id;

  console.log(quantity);

  const [inputValue, setInputValue] = useState({
    receiver: '',
    receiver_phone_number: '',
    address: '',
    address_message: '',
    payment_method: '',
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // api 서버 상 오류 있음. reciver -> receiver
  const handleMakeOrder = () => {
    if (order_kind === 'cart_one_order' || order_kind === 'direct_order') {
      postOrder({ ...inputValue, order_kind, quantity, product_id, total_price: totalPayment })
        .then(() => {
          navigate('/mypage');
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (order_kind === 'cart_order') {
      postOrder({ ...inputValue, order_kind, total_price: totalPayment })
        .then((data) => {
          console.log(data);
          navigate('/mypage');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <DefaultWrapper>
      <InnerWrapper>
        <Typography variant='h1'>주문하기</Typography>
        <InnerHeader>
          <span className='product-info'>상품정보</span>
          <span className='discount'>할인</span>
          <span className='shipping-fee'>배송비</span>
          <span className='price'>주문금액</span>
        </InnerHeader>
        <OrderList cartData={cartData} />
        <Box
          sx={{
            ml: 'auto',
            fontSize: '14px',
            mt: '30px',
          }}
        >
          <Typography variant='h4' component='p' fontWeight='500'>
            총 주문금액{' '}
            <Typography variant='h3' component='span' color='text.red'>
              {totalPayment.toLocaleString()}원
            </Typography>
          </Typography>
        </Box>
        <UserInfo
          payment={payment}
          totalPayment={totalPayment}
          handleData={handleData}
          handleMakeOrder={handleMakeOrder}
        />
      </InnerWrapper>
    </DefaultWrapper>
  );
};

export default Order;
