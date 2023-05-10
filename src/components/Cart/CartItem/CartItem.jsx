import React from 'react';
import { QuantityButton } from '../../common/Button/QuantityButton/QuantityButton';
import Button from '../../common/Button/Button';
import { CartItemWrapper } from './styled';

const CartItem = ({ item }) => {
  return (
    <CartItemWrapper>
      <input type='checkbox' />
      <div className='item-section'>
        <img src={item.image} alt='' />
        <div className='item-info'>
          <p className='store-name'>{item.storeName}</p>
          <p className='product-name'>{item.productName}</p>
          <p className='product-price'>
            {/* {item.price.toLocaleString()}원 */}
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
            <span className='quantity'>{item.quantity}</span>
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
          {/* {item.totalPrice.toLocaleString()}원 */}
        </p>
        <Button width='130px'>주문하기</Button>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;
