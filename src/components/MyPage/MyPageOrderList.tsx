import { Box, Typography } from '@mui/material';
import OrderDetail from './OrderDetail';

const MyPageOrderList = ({ orderData }) => {
  const flexTextBox = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Typography variant='h1' textAlign='center' mb='50px'>
        주문 목록
      </Typography>
      <Box
        component='nav'
        sx={{
          ...flexTextBox,
          height: '60px',
          backgroundColor: 'grey.primary',
          borderRadius: '5px',
        }}
      >
        <Typography component='p' variant='h4' width='10%'>
          주문번호
        </Typography>
        <Typography component='p' variant='h4' width='15%'>
          주문일시
        </Typography>
        <Typography component='p' variant='h4' width='40%'>
          주문상세
        </Typography>
        <Typography component='p' variant='h4' width='10%'>
          수령인
        </Typography>
        <Typography component='p' variant='h4' width='15%'>
          주소
        </Typography>
        <Typography component='p' variant='h4' width='10%'>
          결제금액
        </Typography>
      </Box>
      {orderData ? (
        <Box component='ul'>
          {orderData.map((orderItem) => {
            return (
              <OrderDetail
                key={orderItem.order_number}
                orderItem={orderItem}
                flexTextBox={flexTextBox}
              />
            );
          })}
        </Box>
      ) : null}
    </Box>
  );
};

export default MyPageOrderList;
