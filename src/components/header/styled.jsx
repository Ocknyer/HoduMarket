import styled from "styled-components";
import searchIcon from "../../assets/img/icon-search.svg";

export const HeaderWrapper = styled.header`
  max-width: 1280px;
  height: 90px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .logo {
    width: 124px;
  }

  > form {
    position: relative;
    width: 400px;
    margin-left: 30px;
  }

  .inp-search {
    border: 2px solid var(--main-color);
    padding: 13px 22px;
    width: 100%;
    border-radius: 50px;

    &::placeholder {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .btn-search {
    background: url(${searchIcon}) no-repeat center;
    width: 28px;
    height: 28px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 22px;
  }

  .icon-group {
    display: flex;
    gap: 26px;
    margin-left: auto;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: var(--grey76);

  > img {
    width: 32px;
    margin-bottom: 4px;
  }
`;