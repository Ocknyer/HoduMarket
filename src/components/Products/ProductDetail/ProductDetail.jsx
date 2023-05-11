import { useState, useEffect } from 'react';
import Button from '../../common/Button/Button';
import DefaultWrapper from '../../common/Wrapper/DefaultWrapper';
import { QuantityButton } from '../../common/Button/QuantityButton/QuantityButton';
import MoveToCart from '../../Modal/MoveToCart';
import { useNavigate } from 'react-router-dom';
import postCartItems from '../../../api/cart/postCartItems';
import getCartItems from '../../../api/cart/getCartItems';
import {
  ButtonSection,
  InfoSection,
  ProductDetailWrapper,
  ProductInfo,
} from './styled';
import Modal from '../../Modal/Modal';
import { useRecoilState } from 'recoil';
import { modalIsOpen } from '../../../atoms';

const ProductDetail = ({ productData, handleQuantity, quantity }) => {
  const price = productData.price.toLocaleString();
  const priceSum = (productData.price * quantity).toLocaleString();
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);
  const [isIn, setIsIn] = useState([]);
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

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
      <ProductDetailWrapper>
        <img src={productData.image} alt='' />
        <InfoSection>
          <ProductInfo>
            <p className='store-name'>{productData.store_name}</p>
            <p className='product-name'>{productData.product_name}</p>
            <p className='product-price'>
              {price}
              <span>원</span>
            </p>
          </ProductInfo>

          <ButtonSection>
            <p className='delivery'>택배배송 / 무료배송</p>
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
            <div className='price-section'>
              <p className='txt-total'>총 상품 금액</p>
              <p className='total-quantity'>
                총 수량 <span>{quantity}</span>개
              </p>
              <p className='total-price'>
                {priceSum}
                <span>원</span>
              </p>
            </div>
            <div className='btn'>
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
            </div>
          </ButtonSection>
        </InfoSection>
      </ProductDetailWrapper>
      <MoveToCart
        isOpen={isOpen}
        isInCart={isInCart}
        handleModalClose={handleModalClose}
        navigateToCart={navigateToCart}
      />
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
