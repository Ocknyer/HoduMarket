import Button from '../common/Button/Button';
import { ModalWrapper } from './styled';

const MoveToCart = ({
  isOpen,
  isInCart,
  handleModalClose,
  navigateToCart,
}) => {
  return (
    <>
      {isOpen ? (
        <ModalWrapper>
          {isInCart ? (
            <p>
              이미 장바구니에 담긴 상품입니다. <br /> 장바구니로
              이동할까요?
            </p>
          ) : (
            <p>
              장바구니에 상품을 담았습니다. <br /> 장바구니로
              이동할까요?
            </p>
          )}

          <div className='btn-box'>
            <Button onClick={handleModalClose}>아니오</Button>
            <Button onClick={navigateToCart}>예</Button>
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default MoveToCart;
