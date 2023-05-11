import styled from 'styled-components';

export const OrderlistWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 130px;
  border-bottom: 1px solid var(--greyC4);
  margin-top: 16px;
  text-align: center;
  align-items: center;

  .discount {
    width: 30%;
  }

  .shipping-fee {
    width: 15%;
    font-size: 18px;
    color: var(--grey76);
  }

  .price {
    width: 15%;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ItemInfo = styled.div`
  width: 40%;
  display: flex;

  > img {
    width: 104px;
    height: 104px;
    margin-left: 8px;
  }

  .text-info {
    display: flex;
    flex-direction: column;
    margin-left: 36px;
    text-align: left;

    .store-name {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 6px;
      color: var(--grey76);
    }

    .product-name {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
    }

    .quantity {
      font-size: 14px;
      line-height: 18px;
      color: var(--grey76);
    }
  }
`;
