import { Box, Typography } from '@mui/material';
import minus from '../../../assets/img/icon-Ellipse-minus.svg';
import plus from '../../../assets/img/icon-Ellipse-plus.svg';
import Button from '../../common/Button/Button';

const TotalSection = ({ payment, MoveToOrder }) => {
  const { price, shipping_fee } = payment;

  const totalPrice = price.toLocaleString();
  const totalShipping = shipping_fee.toLocaleString();
  const totalPaymentPrice = (price + shipping_fee).toLocaleString();

  const eachSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '20%',
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '150px',
          backgroundColor: 'grey.primary',
          borderRadius: '10px',
          p: '46px 0',
          mb: '40px',
        }}
      >
        <Box sx={eachSectionStyle}>
          <Typography variant='h5' component='p' mb='11px'>
            총 상품금액
          </Typography>
          <Typography variant='h3' component='p'>
            {totalPrice}
            <Typography component='span' variant='h5'>
              {' '}
              원
            </Typography>
          </Typography>
        </Box>
        <img src={minus} alt='마이너스 아이콘' />
        <Box sx={eachSectionStyle}>
          <Typography variant='h5' component='p' mb='11px'>
            상품 할인
          </Typography>
          <Typography variant='h3' component='p'>
            0{' '}
            <Typography component='span' variant='h5'>
              원
            </Typography>
          </Typography>
        </Box>
        <img src={plus} alt='플러스 아이콘' />
        <Box sx={eachSectionStyle}>
          <Typography variant='h5' component='p' mb='11px'>
            배송비
          </Typography>
          <Typography variant='h3' component='p'>
            {totalShipping}
            <Typography component='span' variant='h5'>
              {' '}
              원
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ ...eachSectionStyle, width: '25%' }}>
          <Typography variant='h5' component='p' mb='5px'>
            결제 예정 금액
          </Typography>
          <Typography variant='h1' component='p' color='text.red'>
            {totalPaymentPrice}
            <Typography component='span' variant='h4'>
              {' '}
              원
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Button size='lg' width='220px' onClick={MoveToOrder}>
        주문하기
      </Button>
    </>
  );
};

export default TotalSection;
