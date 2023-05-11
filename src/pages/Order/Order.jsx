import { useLocation } from 'react-router-dom';
import DefaultWrapper from '../../components/common/Wrapper/DefaultWrapper';
import {
  InnerWrapper,
  InnerHeader,
} from '../../components/common/Wrapper/InnerWrapper';
import OrderList from '../../components/Order/OrderList';
import { TotalPaymentSection } from './styled';

const Order = () => {
  const location = useLocation();

  const cartData = location.state.cartLists;
  const totalPayment =
    location.state.payment.price +
    location.state.payment.shipping_fee;

  return (
    <DefaultWrapper>
      <InnerWrapper>
        <h1>주문하기</h1>
        <InnerHeader>
          <span className='product-info'>상품정보</span>
          <span className='discount'>할인</span>
          <span className='shipping-fee'>배송비</span>
          <span className='price'>주문금액</span>
        </InnerHeader>
        <OrderList cartData={cartData} />
        <TotalPaymentSection>
          <p className='total-price'>
            총 주문금액 <span>{totalPayment.toLocaleString()}원</span>
          </p>
        </TotalPaymentSection>
      </InnerWrapper>
    </DefaultWrapper>
  );
};

export default Order;
