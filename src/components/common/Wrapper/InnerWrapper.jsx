import styled from 'styled-components';

export const InnerWrapper = styled.div`
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

export const InnerHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: var(--greyF2);
  border-radius: 5px;

  .product-info {
    width: 40%;
  }
  .discount {
    width: 30%;
  }
  .shipping-fee,
  .price {
    width: 15%;
  }
`;
