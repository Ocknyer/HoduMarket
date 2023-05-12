import styled from 'styled-components';

export const UserInfoWrapper = styled.section`
  margin-top: 96px;
  width: 100%;
`;

export const HeaderBox = styled.h2`
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  padding: 18px 0;
  border-bottom: 2px solid var(--greyC4);
`;

export const SecondaryHeaderBox = styled.h3`
  font-size: 18px;
  line-height: 23px;
  font-weight: 500;
  padding: 8px 0;
  margin-top: 40px;
  border-bottom: 2px solid var(--greyC4);
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 8px 0;
  border-bottom: 1px solid var(--greyC4);

  .text-box {
    flex-basis: 10%;
  }

  > input {
    height: 40px;
    border: 1px solid var(--greyC4);
  }
`;

export const PaymentSection = styled.section`
  width: 100%;
  display: flex;
  margin-top: 70px;
  gap: 40px;

  .payment-method {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .final-payment {
    display: flex;
    flex-direction: column;

    > h2 {
      border: none;
    }
  }
`;

export const PaymentMethodBox = styled.div`
  width: 100%;
  display: flex;
  padding: 18px 8px;
  gap: 20px;
  border-bottom: 2px solid var(--greyC4);

  > label {
    display: flex;
    gap: 10px;
  }
`;

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 480px;
  height: 400px;
  border: 2px solid var(--main-color);
  border-radius: 10px;
  padding-top: 30px;

  .price,
  .discount,
  .shipping-fee,
  .payment-cost {
    display: flex;
    justify-content: space-between;
    padding: 0 34px;
  }

  .shipping-fee {
    margin-bottom: 5px;
  }

  .payment-cost {
    border-top: 1px solid var(--greyC4);
    padding: 23px 34px;

    > span {
      font-size: 18px;
      line-height: 23px;
    }

    .total-payment {
      font-size: 24px;
      font-weight: 700;
      color: #eb5757;
    }
  }

  .agree-order {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 190px;
    border-radius: 10px;
    background-color: var(--greyF2);
    padding: 30px;

    .agree {
      max-width: 100%;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 30px;

      > input {
        margin-right: 10px;
      }
    }
  }
`;
