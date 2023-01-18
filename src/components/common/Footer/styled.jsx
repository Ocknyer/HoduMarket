import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 1280px;
  padding: 55px 0;
  margin: 0 auto;
`;

export const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--greyC4);

  .link-wrapper {
    display: flex;
    gap: 28px;

    > a {
      font-size: 14px;
      color: black;
    }
  }

  .icon-wrapper {
    display: flex;
    gap: 14px;
  }
`;
