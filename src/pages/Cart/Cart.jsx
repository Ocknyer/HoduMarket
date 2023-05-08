import DefaultWrapper from '../../components/common/Wrapper/DefaultWrapper';
import { CartBody, CartHeader, CartWrapper } from './styled';

const Cart = () => {
  return (
    <DefaultWrapper>
      <CartWrapper>
        <h1>장바구니</h1>
        <CartHeader>
          <input type='checkbox' />
          <p className='product-info'>상품정보</p>
          <p className='quantity'>수량</p>
          <p className='product-price'>상품금액</p>
        </CartHeader>
        <CartBody>
          <p className='text-bold'>
            장바구니에 담긴 상품이 없습니다.
          </p>
          <p className='text-normal'>
            원하는 상품을 장바구니에 담아보세요!
          </p>
        </CartBody>
      </CartWrapper>
    </DefaultWrapper>
  );
};

export default Cart;
