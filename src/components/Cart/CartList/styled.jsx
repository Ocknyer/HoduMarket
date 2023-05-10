import styled from 'styled-components';

export const CartBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  text-align: center;
  padding: ${(props) => (props.cartLists ? '35px 0' : '200px 0')};

  .text-bold {
    font-size: 18px;
    font-weight: 700;
  }

  .text-normal {
    font-size: 14px;
    color: var(--grey76);
  }
`;
