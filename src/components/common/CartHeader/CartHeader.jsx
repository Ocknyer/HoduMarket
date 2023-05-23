import styled from 'styled-components';

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
