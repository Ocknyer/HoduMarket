import React from 'react';
import { QuantityButton } from '../../common/Button/QuantityButton/QuantityButton';
import Button from '../../common/Button/Button';
import { CartItemWrapper } from './styled';
import { useSetRecoilState } from 'recoil';
import { totalPaymentPrice } from '../../../atoms';

const CartItem = ({ item }) => {
  const { image, store_name, product_name, quantity, price } = item;

  const setTotalPaymentPrice = useSetRecoilState(totalPaymentPrice);
  setTotalPaymentPrice((prev) => prev + price * quantity);

  const totalPrice = (price * quantity).toLocaleString();

  const shippingFee = item.shipping_fee;

  console.log(shippingFee);

  return (
    <CartItemWrapper>
      <input type='checkbox' />
      <div className='item-section'>
        <img src={image} alt='' />
        <div className='item-info'>
          <p className='store-name'>{store_name}</p>
          <p className='product-name'>{product_name}</p>
          <p className='product-price'>{price.toLocaleString()}원</p>
          <p className='delivery'>
            {shippingFee > 0
              ? shippingFee.toLocaleString() + ' 원'
              : '무료배송'}
          </p>
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
            <span className='quantity'>{quantity}</span>
            <button
              className='plus-btn'
              // onClick={handleQuantity}
              name='increment'
            ></button>
          </div>
        </QuantityButton>
      </div>
      <div className='order-section'>
        <p className='total-price'>{totalPrice}원</p>
        <Button width='130px'>주문하기</Button>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
