import styled from 'styled-components';
import checkOnIcon from '../../../assets/img/icon-check-on.svg';
import checkOffIcon from '../../../assets/img/icon-check-off.svg';

export const SignUpWrapper = styled.div`
  max-width: 550px;
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
  justify-content: center;

  > a {
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

    &:focus {
      outline: 1px solid var(--main-color);
    }
  }

  .id-inp {
    width: 346px;

    &:focus {
      outline: 1px solid
        ${(props) =>
          props.usernameMsg === '이미 사용 중인 아이디입니다.'
            ? '#EB5757'
            : '#21BF48'};
    }
  }

  .pw-inp,
  .pwv-inp {
    background: url(${checkOffIcon}) no-repeat center right 16px;

    &:focus {
      outline: 1px solid
        ${(props) =>
          props.passwordMsg === '비밀번호가 일치합니다.'
            ? '#21BF48'
            : '#EB5757'};
    }
  }

  .pwv-inp {
    margin-bottom: ${(props) => (props.passwordMsg ? null : '50px')};
  }

  .pn-select {
    width: 152px;
    height: 54px;
    text-align: center;
    font-size: 16px;
    border: 1px solid var(--greyC4);
    border-radius: 5px;
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

  .username-error {
    color: ${(props) =>
      props.usernameMsg === '이미 사용 중인 아이디입니다.'
        ? '#EB5757'
        : '#21BF48'};
    margin-bottom: 10px;
  }

  .password-error {
    color: ${(props) =>
      props.passwordMsg === '비밀번호가 일치하지 않습니다.'
        ? '#EB5757'
        : '#21BF48'};
    margin-bottom: 10px;
  }
`;
