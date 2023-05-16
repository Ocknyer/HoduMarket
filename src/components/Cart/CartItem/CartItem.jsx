import React from 'react';
import { QuantityButton } from '../../common/Button/QuantityButton/QuantityButton';
import Button from '../../common/Button/Button';
import Delete from '../../../assets/img/icon-delete.svg';
import putQuantity from '../../../api/cart/putQuantity';
import { CheckBox } from '../../common/Input/CheckBox';
import { Box, Typography } from '@mui/material';

const CartItem = ({
  cartLists,
  setCartLists,
  item,
  onClickModal,
  selected,
}) => {
  const {
    // is_active,
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid ',
        borderColor: 'border.primary',
        p: '20px 30px',
        width: '1280px',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CheckBox
          type={'checkbox'}
          // checked={is_active}
          onChange={() => console.log('checked')}
        />
        <Box
          sx={{
            width: '160px',
            height: '160px',
            margin: '0 30px 0 40px',
          }}
        >
          <img
            src={image}
            alt=''
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '5px',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
          }}
        >
          <Typography
            variant='h6'
            color='text.secondary'
            component='p'
            mb='10px'
          >
            {store_name}
          </Typography>
          <Typography variant='h4' mb='10px'>
            {product_name}
          </Typography>
          <Typography
            className='product-price'
            fontWeight='700'
            mb='40px'
          >
            {price.toLocaleString()}원
          </Typography>
          <Typography
            variant='h5'
            color='text.secondary'
            component='p'
          >
            {shippingFee > 0
              ? '택배배송 / ' + shippingFee.toLocaleString() + ' 원'
              : '무료배송'}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '20%',
        }}
      >
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
      </Box>
      <Box
        sx={{
          width: '20%',
          textAlign: 'center',
          gap: '260x',
        }}
      >
        <Typography
          variant='h4'
          component='p'
          color='text.red'
          fontWeight='700'
          mb='26px'
        >
          {totalPrice}원
        </Typography>
        <Button width='130px'>주문하기</Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '18px',
          right: '18px',
        }}
      >
        <button
          className='btn-cart-delete'
          onClick={() => onClickModal('open', cart_item_id)}
        >
          <img src={Delete} alt='장바구니 삭제' />
        </button>
      </Box>
    </Box>
  );
};

export default CartItem;
