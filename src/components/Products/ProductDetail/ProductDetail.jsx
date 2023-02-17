import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getProductDetail } from '../../../api/axios-api';
import { quantityValue } from '../../../atoms';
import Button from '../../common/Button/Button';
import DefaultWrapper from '../../common/Wrapper/DefaultWrapper';
import {
  ButtonSection,
  InfoSection,
  ProductDetailWrapper,
  ProductInfo,
} from './styled';

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [quantity, setQuantity] = useRecoilState(quantityValue);

  useEffect(() => {
    getProductDetail(id)
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleQuantity = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'increment') {
      setQuantity((prev) => prev + 1);
    }
    if (e.target.name === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <DefaultWrapper>
      {productData && (
        <ProductDetailWrapper>
          <img src={productData.image} alt='' />
          <InfoSection>
            <ProductInfo>
              <p className='store-name'>{productData.store_name}</p>
              <p className='product-name'>
                {productData.product_name}
              </p>
              <p className='product-price'>
                {productData.price.toLocaleString()}
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
                  {productData.price.toLocaleString()}
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
      )}
    </DefaultWrapper>
  );
};

export default ProductDetail;
