import styled from 'styled-components';

const ProductCardWrapper = styled.div`
  width: 380px;
  height: 490px;

  .product-img {
    width: 380px;
    height: 380px;
    border-radius: 10px;
    border: 1px solid var(--greyC4);
    margin-bottom: 16px;
  }

  .store-name {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 10px;
    color: var(--grey76);
  }

  .product-name {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
  }

  .price {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;

    > span {
      font-size: 16px;
      font-weight: normal;
      margin-left: 2px;
      vertical-align: middle;
    }
  }
`;

export default ProductCardWrapper;
