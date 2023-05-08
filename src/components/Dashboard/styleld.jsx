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
`;
