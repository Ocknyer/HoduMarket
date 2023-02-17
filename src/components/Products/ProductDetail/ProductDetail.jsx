// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useRecoilState } from 'recoil';
// import { getProductDetail } from '../../../api/axios-api';
// import { quantityValue } from '../../../atoms';
import Button from '../../common/Button/Button';
import DefaultWrapper from '../../common/Wrapper/DefaultWrapper';
import {
  ButtonSection,
  InfoSection,
  ProductDetailWrapper,
  ProductInfo,
} from './styled';

const ProductDetail = ({ productData, handleQuantity, quantity }) => {
  const price = productData.price.toLocaleString();
  const priceSum = (productData.price * quantity).toLocaleString();

  return (
    <DefaultWrapper>
      <h2 className='ir'>
        {productData.product_name}상품 디테일 페이지
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
            <div className='quantity-btn'>
              <button
                className='minus-btn'
                onClick={handleQuantity}
                name='decrement'
              ></button>
              <span className='quantity'>{1}</span>
              <button
                className='plus-btn'
                onClick={handleQuantity}
                name='increment'
              ></button>
            </div>
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
              <Button size='lg' width='100%'>
                바로 구매
              </Button>
              <Button size='lg' width='200px' bc='var(--grey76)'>
                장바구니
              </Button>
            </div>
          </ButtonSection>
        </InfoSection>
      </ProductDetailWrapper>
    </DefaultWrapper>
  );
};

export default ProductDetail;
