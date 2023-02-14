import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../../api/axios-api';
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
  const [productData, setProductData] = useState({});
  const price = productData.price;

  console.log(productData);

  useEffect(() => {
    getProductDetail(id)
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DefaultWrapper>
      <ProductDetailWrapper>
        <img src={productData.image} alt='' />
        <InfoSection>
          <ProductInfo>
            <p className='store-name'>{productData.store_name}</p>
            <p className='product-name'>{productData.product_name}</p>
            <p className='product-price'>
              {price.toLocaleString()}
              <span>원</span>
            </p>
          </ProductInfo>

          <ButtonSection>
            <p className='delivery'>택배배송 / 무료배송</p>
            <div className='quantity-btn'>
              <button className='minus-btn'></button>
              <span className='quantity'>{1}</span>
              <button className='plus-btn'></button>
            </div>
            <div className='price-section'>
              <p className='txt-total'>총 상품 금액</p>
              <p className='total-quantity'>
                총 수량<span>{1}개</span>
              </p>
              <p className='total-price'>
                {price.toLocaleString()}
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
