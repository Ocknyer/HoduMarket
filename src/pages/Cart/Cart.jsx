import DefaultWrapper from '../../components/common/Wrapper/DefaultWrapper';
import { CartHeader, CartWrapper } from './styled';
import { useEffect } from 'react';
import getCartItems from '../../api/cart/getCartItems';
import { useState } from 'react';
import CartList from '../../components/Cart/CartList/CartList';
import TotalSection from '../../components/Cart/TotalSection/TotalSection';
import { useRecoilState } from 'recoil';
import { modalIsOpen } from '../../atoms';
import Modal from '../../components/Modal/Modal';
import deleteCartItem from '../../api/cart/deleteCartItem';

const Cart = () => {
  const [cartLists, setCartLists] = useState([]);
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);

  useEffect(() => {
    getCartItems()
      .then((data) => {
        setCartLists(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const payment = [...cartLists].reduce(
    (acc, cur) => {
      if (cur.is_active) {
        return (acc = {
          price: acc.price + cur.price * cur.quantity,
          shipping_fee: acc.shipping_fee + cur.shipping_fee,
        });
      }
      return acc;
    },
    { price: 0, shipping_fee: 0 }
  );

  const [item_id, setItem_id] = useState();

  const onClickModal = (type, cart_item_id) => {
    type === 'open' ? setIsOpen(true) : setIsOpen(false);
    setItem_id(cart_item_id);
  };

  const deleteItem = () => {
    deleteCartItem(item_id)
      .then((data) => {
        getCartItems()
          .then((data) => {
            setCartLists(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    setIsOpen(false);
  };

  console.log(item_id);
  console.log(cartLists);

  return (
    <DefaultWrapper>
      <CartWrapper>
        <h1>장바구니</h1>
        <CartHeader>
          <input type='checkbox' />
          <p className='product-info'>상품정보</p>
          <p className='quantity'>수량</p>
          <p className='product-price'>상품금액</p>
        </CartHeader>
        <CartList
          cartLists={cartLists}
          setCartLists={setCartLists}
          onClickModal={onClickModal}
        />
        {cartLists.length > 0 && <TotalSection payment={payment} />}
      </CartWrapper>
      {isOpen && (
        <Modal
          rejectText={'취소'}
          resultText={'확인'}
          onClickReject={() => onClickModal('close')}
          onClickResult={deleteItem}
        >
          상품을 삭제하시겠습니까?
        </Modal>
      )}
    </DefaultWrapper>
  );
};

export default Cart;
