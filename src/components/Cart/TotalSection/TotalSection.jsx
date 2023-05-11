import minus from '../../../assets/img/icon-Ellipse-minus.svg';
import plus from '../../../assets/img/icon-Ellipse-plus.svg';
import Button from '../../common/Button/Button';
import { TotalSectionWrapper } from './styled';

const TotalSection = ({ payment, MoveToOrder }) => {
  const { price, shipping_fee } = payment;

  const totalPrice = price.toLocaleString();
  const totalShipping = shipping_fee.toLocaleString();
  const totalPaymentPrice = (price + shipping_fee).toLocaleString();

  return (
    <>
      <TotalSectionWrapper>
        <div className='each-section'>
          <p className='price-text'>총 상품금액</p>
          <p className='price-num'>
            {totalPrice}
            <span className='price-text'> 원</span>
          </p>
        </div>
        <img src={minus} alt='마이너스 아이콘' />
        <div className='each-section'>
          <p className='price-text'>상품할인</p>
          <p className='price-num'>
            0 <span className='price-text'>원</span>
          </p>
        </div>
        <img src={plus} alt='플러스 아이콘' />
        <div className='each-section'>
          <p className='price-text'>배송비</p>
          <p className='price-num'>
            {totalShipping}
            <span className='price-text'> 원</span>
          </p>
        </div>
        <div className='payment-section'>
          <p className='payment-text'>결제 예정 금액</p>
          <p className='payment-num'>
            {totalPaymentPrice}
            <span className='payment-small-text'> 원</span>
          </p>
        </div>
      </TotalSectionWrapper>
      <Button size='lg' width='220px' onClick={MoveToOrder}>
        주문하기
      </Button>
    </>
  );
};

export default TotalSection;
