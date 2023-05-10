import styled from 'styled-components';

export const TotalSectionWrapper = styled.div`
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
