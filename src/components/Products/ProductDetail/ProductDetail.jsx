import { useState, useEffect } from 'react';
import Button from '../../common/Button/Button';
import DefaultWrapper from '../../common/Wrapper/DefaultWrapper';
import { QuantityButton } from '../../common/Button/QuantityButton/QuantityButton';
import { useNavigate } from 'react-router-dom';
import postCartItems from '../../../api/cart/postCartItems';
import getCartItems from '../../../api/cart/getCartItems';
import Modal from '../../Modal/Modal';
import { useRecoilState } from 'recoil';
import { modalIsOpen } from '../../../atoms';
import { Box, Container, Divider, Typography } from '@mui/material';

const ProductDetail = ({ productData, handleQuantity, quantity }) => {
  const price = productData.price.toLocaleString();
  const priceSum = (productData.price * quantity).toLocaleString();
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);
  const [isIn, setIsIn] = useState([]);
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  // const totalPrice = (productData.price * quantity).toLocaleString();
  const shippingFee = productData.shipping_fee;

  useEffect(() => {
    getCartItems()
      .then((data) => {
        setCartData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isIn]);

  const isInCart = cartData.filter(
    (item) => item.product_id === productData.product_id
  ).length;

  const handleModalOpen = () => {
    postCartItems({
      product_id: productData.product_id,
      quantity: quantity,
      check: isInCart,
    })
      .then((data) => {
        setIsIn(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const navigateToCart = (e) => {
    e.preventDefault();
    navigate('/cart');
    setIsOpen(false);
  };

  return (
    <DefaultWrapper>
      <h2 className='ir'>
        {productData.product_name + ' 상품 디테일 페이지'}
      </h2>
      <Container
        sx={{
          display: 'flex',
          height: '600px',
          mt: '80px',
          mb: '140px',
          gap: '50px',
        }}
      >
        <img src={productData.image} alt='' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box>
            <Typography
              variant='h4'
              component='p'
              color={'text.secondary'}
              mb='16px'
            >
              {productData.store_name}
            </Typography>
            <Typography variant='h2' mb='20px' component='p'>
              {productData.product_name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                verticalAlign: 'bottom',
              }}
            >
              <Typography variant='h1' component='p'>
                {price}
              </Typography>
              <Typography
                variant='h4'
                component='p'
                sx={{
                  ml: '2px',
                }}
              >
                원
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant='h5'
              component='p'
              color={'text.secondary'}
              mb='20px'
            >
              {shippingFee > 0
                ? '택배배송 / ' + shippingFee.toLocaleString() + ' 원'
                : '무료배송'}
            </Typography>
            <Divider />
            <Box m='30px 0'>
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
            <Divider />
            <Box
              sx={{
                height: '45px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                m: '30px 0',
              }}
            >
              <Typography variant='h4' fontWeight='500' component='p'>
                총 상품 금액
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'end' }}>
                <Typography
                  variant='h4'
                  display='flex'
                  color='text.secondary'
                  component='p'
                >
                  총 수량{' '}
                  <Typography
                    variant='h4'
                    color='primary'
                    component='span'
                  >
                    {quantity}
                  </Typography>
                  개
                </Typography>
                <Divider
                  orientation='vertical'
                  variant='middle'
                  flexItem
                  sx={{
                    m: '0 10px',
                    height: '23px',
                    alignSelf: 'flex-end',
                  }}
                />
                <Typography
                  variant='h1'
                  component='p'
                  color='primary'
                  sx={{
                    display: 'flex',
                    alignItems: 'end',
                  }}
                >
                  {priceSum}
                  <Typography variant='h4' component='span'>
                    원
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box
              className='btn'
              sx={{
                display: 'flex',
                width: '100%',
                gap: '14px',
              }}
            >
              <Button
                size='lg'
                width='100%'
                disabled={productData.stock > 0 ? false : true}
              >
                {productData.stock > 0 ? '바로 구매' : '품절'}
              </Button>
              <Button
                size='lg'
                width='200px'
                bc='var(--grey76)'
                onClick={handleModalOpen}
              >
                장바구니
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      {isOpen && (
        <Modal
          rejectText={'아니오'}
          resultText={'예'}
          onClickReject={handleModalClose}
          onClickResult={navigateToCart}
        >
          {isInCart ? (
            <>
              이미 장바구니에 담긴 상품입니다. <br /> 장바구니로
              이동할까요?
            </>
          ) : (
            <>
              장바구니에 상품을 담았습니다. <br /> 장바구니로
              이동할까요?
            </>
          )}
        </Modal>
      )}
    </DefaultWrapper>
  );
};

export default ProductDetail;
