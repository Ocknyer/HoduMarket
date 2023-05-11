import CartItem from '../CartItem/CartItem';
import { CartBody } from './styled';

const CartList = ({
  cartLists,
  setCartLists,
  onClickModal,
  selected,
}) => {
  return (
    <>
      {cartLists.length > 0 ? (
        <>
          <CartBody cartLists={cartLists}>
            {cartLists.map((item) => (
              <CartItem
                selected={selected}
                cartLists={cartLists}
                setCartLists={setCartLists}
                onClickModal={onClickModal}
                key={item.product_id}
                item={item}
              />
            ))}
          </CartBody>
        </>
      ) : (
        <CartBody>
          <p className='text-bold'>
            장바구니에 담긴 상품이 없습니다.
          </p>
          <p className='text-normal'>
            원하는 상품을 장바구니에 담아보세요!
          </p>
        </CartBody>
      )}
    </>
  );
};

export default CartList;
