import styled from 'styled-components';

export const SalesProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 103px;
  border-bottom: 1px solid var(--greyC4);

  .product-image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 30px;
  }

  .product-info {
    display: flex;
    align-items: center;
    width: 50%;

    .product-text {
      text-align: left;

      .product-name {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px;
      }

      .stock {
        font-size: 16px;
        line-height: 20px;
        color: var(--grey76);
      }
    }
  }

  .price {
    font-size: 18px;
    font-weight: 500;
    width: 30%;
  }

  .btn-section {
    width: 10%;
  }
`;
