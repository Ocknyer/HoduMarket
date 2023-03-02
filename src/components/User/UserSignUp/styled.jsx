import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  max-width: 550px;
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
  justify-content: center;

  > img {
    margin-bottom: 70px;
  }

  .check-box {
    width: 480px;
    display: flex;
    margin: 34px auto;
    > input {
      width: 16px;
      height: 16px;
      margin: 3px 10px 0 0;
    }

    > label {
      width: 454px;
      line-height: 20px;
      color: var(--grey76);

      > span {
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
`;

export const SignupForm = styled.form`
  width: 100%;
  position: relative;
  padding: 40px 34px 35px;
  border: 1px solid var(--greyC4);
  border-radius: 10px;
  background-color: #fff;
  z-index: 99;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  > label {
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    color: var(--grey76);
  }

  > input {
    width: 100%;
    padding: 17px 16px;
    font-size: 16px;
    height: 54px;
    margin-bottom: 12px;
    border: 1px solid var(--greyC4);
    border-radius: 5px;
  }

  .id-inp {
    width: 346px;
  }

  .pwv-inp {
    margin-bottom: 50px;
  }

  .pn-inp {
    width: 152px;

    &:nth-child(3) {
      margin: 0 12px;
    }
  }

  .email-inp {
    width: 220px;
  }

  .at {
    width: 18px;
    line-height: 52px;
    margin: 0 11px;
  }

  #company-num {
    width: 346px;
  }

  > button {
    margin-left: auto;
    height: 54px;
  }
`;
