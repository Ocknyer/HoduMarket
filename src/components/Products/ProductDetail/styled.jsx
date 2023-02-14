import styled from 'styled-components';
import plusBtn from '../../../assets/img/icon-plus-line.svg';
import minusBtn from '../../../assets/img/icon-minus-line.svg';

export const ProductDetailWrapper = styled.div`
  height: 600px;
  margin: 60px 0 140px;
  display: flex;

  > img {
    width: 600px;
    height: 600px;
    border: none;
    margin-right: 50px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 630px;

  .price-section {
    height: 45px;
    display: flex;

    margin-bottom: 22px;
    align-items: flex-end;

    .txt-total {
      font-size: 18px;
      line-height: 23px;
    }

    .total-quantity {
      line-height: 23px;
      margin-left: auto;
      position: relative;

      > span {
        color: var(--main-color);
      }

      &::after {
        display: inline-block;
        position: absolute;
        content: '';
        top: 2px;
        width: 1px;
        height: 18px;
        background-color: var(--greyC4);
        margin-left: 13px;
      }
    }

    .total-price {
      font-size: 36px;
      font-weight: 700;
      color: var(--main-color);
      margin-left: 28px;

      > span {
        font-size: 18px;
        font-weight: 500;
        margin-left: 2px;
      }
    }
  }

  .btn {
    display: flex;

    > button:last-child {
      margin-left: 14px;
    }
  }
`;

export const ProductInfo = styled.div`
  .store-name {
    font-size: 18px;
    color: var(--grey76);
    margin-bottom: 16px;
  }
  .product-name {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .product-price {
    font-size: 36px;
    font-weight: 700;

    > span {
      font-size: 18px;
    }
  }
`;

export const ButtonSection = styled.div`
  .delivery {
    font-size: 16px;
    color: var(--grey76);
    margin-bottom: 52px;
  }

  .quantity-btn {
    display: flex;
    width: 150px;
    height: 50px;
    position: relative;
    border: 1px solid var(--greyC4);
    border-radius: 5px;
    margin-bottom: 78px;

    &::before {
      position: absolute;
      top: -30px;
      content: '';
      width: 630px;
      height: 2px;
      background-color: var(--greyC4);
    }

    &::after {
      position: absolute;
      bottom: -30px;
      content: '';
      width: 630px;
      height: 2px;
      background-color: var(--greyC4);
    }

    .plus-btn {
      background: url(${plusBtn}) no-repeat center;
      width: 50px;
      height: 50px;
      border-left: 1px solid var(--greyC4);
    }

    .quantity {
      width: 50px;
      font-size: 18px;
      text-align: center;
      line-height: 50px;
    }

    .minus-btn {
      background: url(${minusBtn}) no-repeat center;
      width: 50px;
      height: 50px;
      border-right: 1px solid var(--greyC4);
    }
  }
`;
