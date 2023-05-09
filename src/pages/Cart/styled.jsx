import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 54px;

  > h1 {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 52px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  font-size: 18px;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: var(--greyF2);
  border-radius: 5px;

  .product-info {
    width: 50%;
  }

  .quantity,
  .product-price {
    width: 20%;
  }
`;

export const CartBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  text-align: center;
  padding: ${(props) => (props.cartProduct ? '35px 0' : '200px 0')};

  .text-bold {
    font-size: 18px;
    font-weight: 700;
  }

  .text-normal {
    font-size: 14px;
    color: var(--grey76);
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  border: 1px solid var(--greyC4);
  border-radius: 5px;
  padding: 20px 18px;

  .item-section {
    width: 50%;
    display: flex;

    > img {
      width: 160px;
      height: 160px;
      margin: 0 30px 0 40px;
    }

    .item-info {
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-right: auto;

      .store-name {
        font-size: 14px;
        line-height: 18px;
        color: var(--grey76);
        margin-bottom: 10px;
      }
      .product-name {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px;
      }
      .product-price {
        font-size: 16px;
        line-height: 20px;
        font-weight: 700;
        margin-bottom: 40px;
      }

      .delivery {
        font-size: 14px;
        color: var(--grey76);
        margin-bottom: 52px;
      }
    }
  }

  .quantity-section {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .order-section {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .total-price {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 26px;
      color: #eb5757;
    }
  }
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  background-color: var(--greyF2);
  border-radius: 10px;
  padding: 46px 0;
  margin-bottom: 40px;

  .each-section,
  .payment-section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .each-section {
    width: 20%;
    .price-text {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 17px;
    }

    .price-num {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .payment-text {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .payment-section {
    width: 25%;

    .payment-num {
      font-size: 36px;
      font-weight: 700;
      color: #eb5757;

      .payment-small-text {
        font-size: 18px;
      }
    }
  }
`;
