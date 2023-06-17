import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import Button from '../common/Button/Button';
import { useState } from 'react';

const UserInfo = ({ payment, totalPayment, handleData, handleMakeOrder }) => {
  const [isAgree, setIsAgree] = useState(false);

  const handleAgree = () => {
    setIsAgree((prev) => !prev);
  };

  const flexBox = { display: 'flex', flexDirection: 'column' };
  const textBox = {
    display: 'flex',
    justifyContent: 'space-between',
    p: '0 34px',
  };
  const headerBox = {
    fontWeight: '500',
    p: '18px 0',
    borderBottom: '2px solid',
    borderColor: 'grey.200',
  };

  const secondaryHeaderBox = {
    fontWeight: '500',
    p: '8px 0',
    mt: '40px',
    borderBottom: '2px solid',
    borderColor: 'grey.200',
  };

  const paymentMethod = [
    { id: 1, method: '신용/체크카드', value: 'CARD' },
    { id: 2, method: '무통장입금', value: 'DEPOSIT' },
    { id: 3, method: '휴대폰 결제', value: 'PHONE_PAYMENT' },
    { id: 4, method: '네이버페이', value: 'NAVERPAY' },
    { id: 5, method: '카카오페이', value: 'KAKAOPAY' },
  ];

  const ordererData = [
    { id: 1, label: '이름', name: 'orderer' },
    { id: 2, label: '휴대폰', name: 'orderer' },
    { id: 3, label: '이메일', name: 'orderer_email' },
  ];

  const shippingData = [
    { id: 1, label: '수령인', name: 'receiver' },
    { id: 2, label: '휴대폰', name: 'receiver_phone_number' },
    { id: 3, label: '배송 주소', name: 'address' },
    { id: 4, label: '배송 메시지', name: 'address_message' },
  ];

  const inputBox = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    p: '8px 0',
    borderBottom: '1px solid',
    borderColor: 'grey.200',
  };

  return (
    <Box
      sx={{
        mt: '96px',
        width: '100%',
      }}
    >
      <Typography variant='h3' fontWeight='500' sx={headerBox}>
        배송정보
      </Typography>

      <Typography variant='h4' sx={secondaryHeaderBox}>
        주문자 정보
      </Typography>
      {ordererData.map((item) => (
        <Box key={item.id} sx={inputBox}>
          <Box flexBasis='10%'>{item.label}</Box>
          <TextField size='small' name={item.name} />
        </Box>
      ))}
      <Typography variant='h4' sx={secondaryHeaderBox}>
        배송지 정보
      </Typography>
      {shippingData.map((item) => (
        <Box key={item.id} sx={inputBox}>
          <Box flexBasis='10%'>{item.label}</Box>
          <TextField size='small' name={item.name} onChange={handleData} />
        </Box>
      ))}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          mt: '70px',
          gap: '40px',
        }}
      >
        <Box sx={{ ...flexBox, flex: '1' }}>
          <Typography variant='h3' sx={headerBox}>
            결제수단
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              p: '18px 8px',
              gap: '20px',
              borderBottom: '2px solid',
              borderColor: 'grey.200',
            }}
          >
            {paymentMethod.map((item) => (
              <FormControlLabel
                key={item.id}
                name='payment_method'
                value={item.value}
                onChange={handleData}
                control={<Checkbox size='md' />}
                label={item.method}
              />
            ))}
          </Box>
        </Box>
        <Box sx={flexBox}>
          <Typography
            variant='h3'
            sx={{
              fontWeight: '500',
              m: '18px 0',
            }}
          >
            최종결제 정보
          </Typography>
          <Box
            sx={{
              ...flexBox,
              gap: '15px',
              width: '480px',
              height: '400px',
              borderRadius: '10px',
              pt: '30px',
              border: '2px solid',
              borderColor: 'primary.main',
            }}
          >
            <Box sx={textBox}>
              <p>- 상품금액</p>
              <span>{payment.price.toLocaleString()}원</span>
            </Box>
            <Box sx={textBox}>
              <p>- 할인금액</p>
              <span>{0}원</span>
            </Box>
            <Box sx={{ ...textBox, mb: '5px' }}>
              <p>- 배송비</p>
              <span>{payment.shipping_fee.toLocaleString()}원</span>
            </Box>
            <Box
              sx={{
                ...textBox,
                borderTop: '1px solid',
                borderColor: 'grey.200',
                p: '19px 34px',
              }}
            >
              <Typography>- 결제금액</Typography>
              <Typography variant='h3' component='span' color='error.main'>
                {totalPayment.toLocaleString()}원
              </Typography>
            </Box>
            <Box
              sx={{
                ...flexBox,
                alignItems: 'center',
                height: '190px',
                borderRadius: '0 0 10px 10px',
                p: '30px',
                backgroundColor: 'grey.100',
              }}
            >
              <FormControlLabel
                control={<Checkbox size='md' />}
                onChange={handleAgree}
                label='주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.'
                sx={{
                  mb: '30px',
                }}
              />
              <Button
                width={'220px'}
                size={'md'}
                onClick={handleMakeOrder}
                disabled={isAgree ? false : true}
              >
                결제하기
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
