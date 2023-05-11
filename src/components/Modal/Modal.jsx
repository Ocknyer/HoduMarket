import Button from '../common/Button/Button';
import { ModalWrapper } from './styled';

const Modal = ({
  children,
  rejectText,
  resultText,
  onClickReject,
  onClickResult,
}) => {
  return (
    <>
      <ModalWrapper>
        <p>{children}</p>
        <div className='btn-box'>
          <Button onClick={onClickReject}>{rejectText}</Button>
          <Button onClick={onClickResult}>{resultText}</Button>
        </div>
      </ModalWrapper>
    </>
  );
};

export default Modal;
