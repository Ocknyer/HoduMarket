import React from 'react';
import { QuantityButton } from '../../common/Button/QuantityButton/QuantityButton';
import Button from '../../common/Button/Button';
import Delete from '../../../assets/img/icon-delete.svg';
import putQuantity from '../../../api/cart/putQuantity';
import { CartItemWrapper } from './styled';
import { CheckBox } from '../../common/Input/CheckBox';

const CartItem = ({
  cartLists,
  setCartLists,
  item,
  onClickModal,
  selected,
}) => {
  const {
    is_active,
    image,
    store_name,
    product_name,
    quantity,
    price,
    cart_item_id,
  } = item;

  const totalPrice = (price * quantity).toLocaleString();
  const shippingFee = item.shipping_fee;

  const handleQuantity = (e) => {
    putQuantity(item)
      .then((data) => {
        const cartItemIdx = cartLists.findIndex(
          (el) => el.product_id === data.product_id
        );

        setCartLists((prev) => {
          // eslint-disable-next-line array-callback-return
          return [...prev].map((item, idx) => {
            if (e.target.name === 'increment') {
              return idx === cartItemIdx
                ? {
                    ...cartLists[cartItemIdx],
                    quantity: cartLists[cartItemIdx].quantity + 1,
                  }
                : item;
            } else if (e.target.name === 'decrement') {
              return idx === cartItemIdx
                ? {
                    ...cartLists[cartItemIdx],
                    quantity: cartLists[cartItemIdx].quantity - 1,
                  }
                : item;
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CartItemWrapper>
      <CheckBox
        type={'checkbox'}
        // checked={is_active}
        onChange={() => console.log('checked')}
      />
      <div className='item-section'>
        <img src={image} alt='' />
        <div className='item-info'>
          <p className='store-name'>{store_name}</p>
          <p className='product-name'>{product_name}</p>
          <p className='product-price'>{price.toLocaleString()}원</p>
          <p className='delivery'>
            {shippingFee > 0
              ? '택배배송 / ' + shippingFee.toLocaleString() + ' 원'
              : '무료배송'}
          </p>
        </div>
      </div>
      <div className='quantity-section'>
        <QuantityButton>
          <div className='quantity-btn'>
            <button
              className='minus-btn'
              onClick={handleQuantity}
              name='decrement'
            ></button>
            <span className='quantity'>{quantity}</span>
            <button
              className='plus-btn'
              onClick={handleQuantity}
              name='increment'
            ></button>
          </div>
        </QuantityButton>
      </div>
      <div className='order-section'>
        <p className='total-price'>{totalPrice}원</p>
        <Button width='130px'>주문하기</Button>
      </div>
      <button
        className='btn-cart-delete'
        onClick={() => onClickModal('open', cart_item_id)}
      >
        <img src={Delete} alt='장바구니 삭제' />
      </button>
    </CartItemWrapper>
  );
};

export default CartItem;
