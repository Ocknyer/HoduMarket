import Button from '../../common/Button/Button';
import {
  HeaderBox,
  InputBox,
  PaymentBox,
  PaymentMethodBox,
  PaymentSection,
  SecondaryHeaderBox,
  UserInfoWrapper,
} from './styled';

const UserInfo = () => {
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
        <div className='payment-method'>
          <HeaderBox>결제수단</HeaderBox>
          <PaymentMethodBox>
            <label>
              <input type='checkbox' />
              <p>신용/체크카드</p>
            </label>
            <label>
              <input type='checkbox' />
              <p>무통장 입금</p>
            </label>
            <label>
              <input type='checkbox' />
              <p>휴대폰 결제</p>
            </label>
            <label>
              <input type='checkbox' />
              <p>네이버페이</p>
            </label>
            <label>
              <input type='checkbox' />
              <p>카카오페이</p>
            </label>
          </PaymentMethodBox>
        </div>
        <div className='final-payment'>
          <HeaderBox>최종결제 정보</HeaderBox>
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
            <div className='agree-order'>
              <label className='agree'>
                <input type='checkbox' />
                주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
              </label>
              <Button width={'220px'} size={'md'}>
                결제하기
              </Button>
            </div>
          </PaymentBox>
        </div>
      </PaymentSection>
    </UserInfoWrapper>
  );
};

export default UserInfo;
