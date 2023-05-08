import styled from 'styled-components';

export const CartWrapper = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 17px;
  text-align: center;
  padding: 200px 0;

  .text-bold {
    font-size: 18px;
    font-weight: 700;
  }

  .text-normal {
    font-size: 14px;
    color: var(--grey76);
  }
`;
