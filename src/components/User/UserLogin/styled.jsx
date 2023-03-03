import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;

  > img {
    width: 248px;
    margin-bottom: 70px;
  }

  .link-wrapper {
    display: flex;
    gap: 16px;

    > a {
      color: var(--main-text-color);
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px 34px;
  border: 1px solid var(--greyC4);
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #fff;
  z-index: 99;

  > input {
    height: 60px;
    border: none;
    border-bottom: 1px solid var(--greyC4);
    margin-bottom: 6px;
    padding: 17px 16px;

    &::placeholder {
      font-size: 16px;
      color: var(--grey76);
    }

    &:nth-child(2) {
      margin-bottom: ${(props) => (props.errorMsg ? '0' : '36px')};
    }
  }

  .error-msg {
    font-size: 16px;
    line-height: 20px;
    margin: 26px 0;
    color: #eb5757;
  }
`;
