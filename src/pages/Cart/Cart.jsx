import { useRecoilValue } from 'recoil';
import DefaultWrapper from '../../components/common/Wrapper/DefaultWrapper';
import {
  CartBody,
  CartHeader,
  CartItem,
  CartWrapper,
  TotalSection,
} from './styled';
import { cartItems } from '../../atoms';
import { QuantityButton } from '../../components/common/Button/QuantityButton/QuantityButton';
import Button from '../../components/common/Button/Button';
import minus from '../../assets/img/icon-Ellipse-minus.svg';
import plus from '../../assets/img/icon-Ellipse-plus.svg';

const Cart = () => {
  const cartProduct = useRecoilValue(cartItems);

  console.log(cartProduct);

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
        {cartProduct.length > 0 ? (
          <>
            <CartBody cartProduct={cartProduct}>
              {cartProduct.map((item) => (
                <CartItem>
                  <input type='checkbox' />
                  <div className='item-section'>
                    <img src={item.image} alt='' />
                    <div className='item-info'>
                      <p className='store-name'>{item.store_name}</p>
                      <p className='product-name'>
                        {item.product_name}
                      </p>
                      <p className='product-price'>
                        {item.price.toLocaleString()}원
                      </p>
                      <p className='delivery'>택배배송 / 무료배송</p>
                    </div>
                  </div>
                  <div className='quantity-section'>
                    <QuantityButton>
                      <div className='quantity-btn'>
                        <button
                          className='minus-btn'
                          // onClick={handleQuantity}
                          name='decrement'
                        ></button>
                        <span className='quantity'>{1}</span>
                        <button
                          className='plus-btn'
                          // onClick={handleQuantity}
                          name='increment'
                        ></button>
                      </div>
                    </QuantityButton>
                  </div>
                  <div className='order-section'>
                    <p className='total-price'>
                      {item.price.toLocaleString()}원
                    </p>
                    <Button width='130px'>주문하기</Button>
                  </div>
                </CartItem>
              ))}
            </CartBody>
            <TotalSection>
              <div className='each-section'>
                <p className='price-text'>총 상품금액</p>
                <p className='price-num'>
                  0 <span className='price-text'>원</span>
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
                  0 <span className='price-text'>원</span>
                </p>
              </div>
              <div className='payment-section'>
                <p className='payment-text'>결제 예정 금액</p>
                <p className='payment-num'>
                  30,000{' '}
                  <span className='payment-small-text'>원</span>
                </p>
              </div>
            </TotalSection>
            <Button size='lg' width='220px'>
              주문하기
            </Button>
          </>
        ) : (
          <CartBody>
            <p className='text-bold'>
              장바구니에 담긴 상품이 없습니다.
            </p>
            <p className='text-normal'>
              원하는 상품을 장바구니에 담아보세요!
            </p>
          </CartBody>
        )}
      </CartWrapper>
    </DefaultWrapper>
  );
};

export default Cart;
