import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import Button from '../../common/Button/Button';
import {
  HeaderBox,
  InputBox,
  PaymentBox,
  PaymentSection,
  SecondaryHeaderBox,
  UserInfoWrapper,
} from './styled';

const UserInfo = () => {
  const flexBox = { display: 'flex', flexDirection: 'column' };

  return (
    <UserInfoWrapper>
      <HeaderBox>배송정보</HeaderBox>
      <SecondaryHeaderBox>주문자 정보</SecondaryHeaderBox>
      <InputBox>
        <div className='text-box'>이름</div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='text-box'>휴대폰</div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='text-box'>이메일</div>
        <input type='text' />
      </InputBox>
      <SecondaryHeaderBox>배송지 정보</SecondaryHeaderBox>
      <InputBox>
        <div className='text-box'>수령인</div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='text-box'>휴대폰</div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='text-box'>배송 주소</div>
        <input type='text' />
      </InputBox>
      <InputBox>
        <div className='text-box'>배송 메시지</div>
        <input type='text' />
      </InputBox>
      <PaymentSection>
        <Box sx={{ ...flexBox, flex: '1' }}>
          <HeaderBox>결제수단</HeaderBox>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              p: '18px 8px',
              gap: '20px',
              borderBottom: '2px solid',
              borderColor: 'border.primary',
            }}
          >
            <FormControlLabel
              control={<Checkbox size='md' />}
              label='신용/체크카드'
            />
            <FormControlLabel
              control={<Checkbox size='md' />}
              label='무통장 입금'
            />
            <FormControlLabel
              control={<Checkbox size='md' />}
              label='휴대폰 결제'
            />
            <FormControlLabel
              control={<Checkbox size='md' />}
              label='네이버페이'
            />
            <FormControlLabel
              control={<Checkbox size='md' />}
              label='카카오페이'
            />
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
          <PaymentBox>
            <div className='price'>
              <p>- 상품금액</p>
              <span>{}원</span>
            </div>
            <div className='discount'>
              <p>- 할인금액</p>
              <span>{}원</span>
            </div>
            <div className='shipping-fee'>
              <p>- 배송비</p>
              <span>{}원</span>
            </div>
            <div className='payment-cost'>
              <p>- 결제금액</p>
              <span className='total-payment'>{}원</span>
            </div>
            <Box
              sx={{
                ...flexBox,
                alignItems: 'center',
                height: '190px',
                borderRadius: '10px',
                p: '30px',
                backgroundColor: 'grey.primary',
              }}
            >
              <FormControlLabel
                control={<Checkbox size='md' />}
                label='주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.'
                sx={{
                  mb: '30px',
                }}
              />
              <Button width={'220px'} size={'md'}>
                결제하기
              </Button>
            </Box>
          </PaymentBox>
        </Box>
      </PaymentSection>
    </UserInfoWrapper>
  );
};

export default UserInfo;
