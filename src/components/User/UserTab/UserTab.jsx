import styled from "styled-components";

const UserTab = styled.div`
  width: 550px;
  position: relative;
  top: 70px;

  &::after {
    content: "";
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 5px;
    height: 19px;
    left: 50%;
    top: 5px;
    transform: translateX(-50%);
    background-color: #fff;
    z-index: 400;
  }

  > button {
    width: 50%;
    padding: 20px 0 30px 0;
    border: 1px solid var(--greyC4);
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    color: black;
    font-size: 18px;
    font-weight: 700;
    transform: translate(0, -60px);
    background-color: #f2f2f2;
    position: relative;
    cursor: pointer;
    z-index: -1;

    ${({ userType }) =>
      userType === "BUYER"
        ? `
      &:nth-child(1) {
        z-index: 100;
        background-color: #fff;
      }
    `
        : `
    &:nth-child(2) {
      z-index: 100;
      background-color: #fff;
    } 
    `}
  }
`;

export default UserTab;
