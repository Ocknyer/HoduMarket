import styled from "styled-components";
import plusBtn from "../../../../assets/img/icon-plus-line.svg";
import minusBtn from "../../../../assets/img/icon-minus-line.svg";

export const QuantityButton = styled.div`
  .quantity-btn {
    display: flex;
    width: 150px;
    height: 51px;
    position: relative;
    border: 1px solid var(--greyC4);
    border-radius: 5px;

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
