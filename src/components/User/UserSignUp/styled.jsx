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

  > input {
    height: 60px;
    border: none;
    border-bottom: 1px solid var(--greyC4);
    margin-bottom: 6px;
  }
`;
