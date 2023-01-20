import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 1280px;
  padding: 55px 0;
  position: fixed;
  transform: translate(-50%, 0);
  left: 50%;
  bottom: 0;

  .inner-data {
    font-size: 14px;
    color: var(--grey76);
    padding-top: 30px;
    line-height: 24px;

    > h3 {
      font-weight: 700;
    }
  }
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

    .bold {
      font-weight: 700;
    }
  }

  .icon-wrapper {
    display: flex;
    gap: 14px;
  }
`;
