import styled from "styled-components";

const UserTab = styled.div`
  width: 550px;
  position: relative;
  margin-top: 76px;

  &::after {
    content: "";
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 5px;
    height: 19px;
    bottom: -20px;
    left: 50%;
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
    background-color: #fff;
    position: absolute;

    &:nth-child(1) {
      z-index: 100;
    }

    &:nth-child(2) {
      z-index: -1;
      left: 50%;
      background-color: #f2f2f2;
    }
  }
`;

export default UserTab;
