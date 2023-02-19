import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;

  > img {
    width: 248px;
    margin-bottom: 70px;
  }
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px 34px;
  border: 1px solid var(--greyC4);
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #fff;
  z-index: 99;
`;

export const InputBox = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  gap: 12px;
  margin-bottom: 12px;

  > label {
    display: block;
    font-size: 16px;
    color: var(--grey76);
    margin-bottom: 10px;
  }

  > input {
    float: left;
    height: 54px;
    border: 1px solid var(--greyC4);
    border-radius: 5px;
  }

  .id-inp {
    display: flex;
    width: 100%;
  }

  .valid-btn {
    display: flex;
  }
`;
