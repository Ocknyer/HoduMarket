import styled from "styled-components";

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

  .btn-wrapper {
    width: 100%;

    > button {
      width: 50%;
      padding: 20px;
      font-size: 18px;
      border: 1px solid var(--greyC4);
      border-radius: 10px;
    }
  }

  .link-wrapper {
    display: flex;
    gap: 16px;

    > a {
      color: var(--main-text-color);
    }
  }
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px 34px;
  border: 1px solid var(--greyC4);
  border-radius: 10px;
  margin-bottom: 30px;

  > input {
    height: 60px;
    border: none;
    border-bottom: 1px solid var(--greyC4);
    margin-bottom: 6px;

    &::placeholder {
      font-size: 16px;
      /* color: var(--grey76); */
    }

    &:nth-child(2) {
      margin-bottom: 36px;
    }
  }
`;
