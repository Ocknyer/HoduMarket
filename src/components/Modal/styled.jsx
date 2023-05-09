import styled from 'styled-components';

export const ModalWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 20px;
  width: 360px;
  height: 200px;
  border: 1px solid var(--greyC4);
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > p {
    margin-bottom: 30px;
  }

  .btn-box {
    display: flex;
    gap: 10px;
  }
`;
