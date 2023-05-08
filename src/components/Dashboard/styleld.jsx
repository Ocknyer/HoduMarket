import styled from 'styled-components';

export const DashboardHeader = styled.section`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 38px 0;

  h2 {
    font-size: 36px;
    font-weight: 700;

    > span {
      color: var(--main-color);
      font-weight: 500;
    }
  }

  .btn-add-product {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 168px;
    font-size: 18px;
    line-height: 54px;
    color: white;
    background-color: var(--main-color);
    border-radius: 5px;

    .icon-plus {
      width: 30px;
      margin-right: 9px;
    }
  }
`;

export const DashboardBody = styled.div`
  display: flex;
  gap: 30px;
`;

export const DashboardSidebar = styled.ul`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 290px;
  gap: 10px;

  > li {
    height: 50px;
    border-radius: 5px;
    line-height: 50px;
    padding: 0 20px;
    font-weight: 500;

    &:hover {
      background-color: #effff3;
    }
  }

  .active {
    background-color: var(--main-color);
  }
`;

export const DashboardMain = styled.section`
  width: 100%;
  border: 1px solid var(--greyC4);
  border-radius: 5px;

  .data-header {
    display: flex;
    width: 100%;
    padding: 18px 0;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid var(--greyC4);

    .product-info {
      width: 50%;
    }

    .product-price {
      width: 30%;
    }

    .edit-product,
    .delete-product {
      width: 10%;
    }
  }
`;
