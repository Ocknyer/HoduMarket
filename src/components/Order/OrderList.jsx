import { Box, Typography } from '@mui/material';

const OrderList = ({ cartData }) => {
  return cartData.map((item) => (
    <Box
      key={item.product_id}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '130px',
        borderBottom: '1px solid',
        borderColor: 'border.primary',
        mt: '16px',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Box width='40%' display='flex' alignItems='center'>
        <img
          src={item.image}
          alt=''
          style={{
            width: '104px',
            height: '104px',
            marginLeft: '8px',
            borderRadius: '5px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: '36px',
            textAlign: 'left',
          }}
        >
          <Typography variant='h6' component='p' color='text.grey' mb='6px'>
            {item.store_name}
          </Typography>
          <Typography variant='h4' component='p' mb='10px'>
            {item.product_name}
          </Typography>
          <Typography variant='h6' component='p' color='text.grey'>
            수량 : {item.quantity}개
          </Typography>
        </Box>
      </Box>
      <Typography width='30%' color='text.grey'>
        -
      </Typography>
      <Typography width='15%' variant='h4' component='p' color='text.grey'>
        {item.shipping_fee.toLocaleString()}원
      </Typography>
      <Typography width='15%' ariant='h4' component='p' fontWeight='700'>
        {(item.price * item.quantity).toLocaleString()}원
      </Typography>
    </Box>
  ));
};

export default OrderList;
