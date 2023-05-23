import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getProductDetail } from '../../api/axios-api';

const OrderDetail = ({ flexTextBox, orderItem }) => {
  const [orderDetail, setOrderDetail] = useState();

  const { order_number, created_at, address, receiver, total_price, order_items, order_quantity } =
    orderItem;

  useEffect(() => {
    getProductDetail(order_items[0])
      .then((data) => {
        setOrderDetail(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const leftItem = order_items.length;

  const totalQuantity = order_quantity.reduce((acc, cur) => (acc += cur), 0);

  return (
    <>
      {orderDetail ? (
        <Box
          key={order_number}
          component='li'
          sx={{
            ...flexTextBox,
            justifyContent: 'space-between',
            height: '80px',
            borderBottom: '1px solid var(--greyC4)',
          }}
        >
          <Typography variant='h5' component='p' width='10%'>
            {order_number}
          </Typography>
          <Typography variant='h6' component='p' width='15%' color='text.grey'>
            {`${created_at.slice(0, 10)} ${created_at.slice(11, 19)}`}
          </Typography>
          <Box
            sx={{
              width: '40%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Paper
              component='img'
              src={orderDetail.image}
              sx={{
                width: '50px',
                height: '50px',
              }}
            />

            <Typography
              variant='h6'
              component='p'
              width='40%'
              sx={{
                wordBreak: 'keep-all',
              }}
            >
              {orderDetail.product_name} {leftItem > 1 ? `외 ${leftItem - 1}건` : null}
            </Typography>
            <Typography variant='h6' component='p' color='text.grey' width='20%'>
              총 수량 : {totalQuantity}개
            </Typography>
          </Box>
          <Typography variant='h6' component='p' width='10%'>
            {receiver}
          </Typography>
          <Typography
            variant='h6'
            component='p'
            width='15%'
            sx={{
              wordBreak: 'keep-all',
            }}
          >
            {address}
          </Typography>
          <Typography variant='h5' component='p' width='10%'>
            {total_price.toLocaleString()} 원
          </Typography>
        </Box>
      ) : (
        <Box
          key={order_number}
          component='li'
          sx={{
            ...flexTextBox,
            justifyContent: 'space-between',
            height: '80px',
            borderBottom: '1px solid var(--greyC4)',
          }}
        >
          <Typography margin='0 auto'>데이터를 불러올 수 없습니다</Typography>
        </Box>
      )}
    </>
  );
};

export default OrderDetail;
