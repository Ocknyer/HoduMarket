import styled, { css } from "styled-components";

const setSize = (size) => {
  switch (size) {
    case "lg":
      return css`
        padding: 19px 0;
        font-size: 24px;
        line-height: 30px;
      `;
    case "md":
      return css`
        padding: 19px 0;
        font-size: 18px;
        line-height: 22px;
      `;
    case "sm":
      return css`
        padding: 17px 0;
        line-height: 20px;
      `;
    default:
      return css`
        padding: 10px 0;
      `;
  }
};

export const Btn = styled.button`
  width: ${({ width }) => width || "80px"};
  padding: ${({ padding }) => padding};
  line-height: 20px;
  font-size: 16px;
  font-weight: ${({ fw }) => fw || "500"};
  background: ${({ bc }) => bc || "#21BF48"};
  color: ${({ color }) => color || "white"};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #c4c4c4;
    cursor: not-allowed;
  }

  ${({ size }) => setSize(size)}
`;

export default Btn;
