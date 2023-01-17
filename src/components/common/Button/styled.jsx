import styled from "styled-components";

export const Btn = styled.button`
  width: ${({ size }) => {
    switch (size) {
      case "xs":
        return "80px";
      case "sm":
        return "166px";
      case "md":
        return "480px";
      case "lg":
        return "220px";
      default:
        return "100%";
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case "xs":
        return "40px";
      case "sm":
        return "54px";
      case "md":
        return "60px";
      case "lg":
        return "68px";
      default:
        return "40px";
    }
  }};

  border: ${({ state }) => {
    switch (state) {
      case "disabeld":
        return "none";
      case "active":
        return "1px solid";
      default:
        return "none";
    }
  }};

  border-color: ${({ state }) =>
    state === "disabled" ? "none" : "var(--greyC4)"};

  border-radius: ${({ size }) => {
    switch (size) {
      case "xs":
        return "26px";
      case "sm":
        return "32px";
      case "md":
        return "30px";
      case "lg":
        return "44px";
      default:
        return "44px";
    }
  }};

  background-color: ${({ state }) => {
    switch (state) {
      case "active":
        return "#fff";
      case "disabled":
        return "var(--main-disabled-color)";
      default:
        return "var(--main-color)";
    }
  }};

  font-weight: ${({ size }) => (size === "xs" ? "400" : "500")};

  color: ${({ state }) => (state === "active" ? "var(--grey76)" : "#fff")};
`;

export default Btn;
