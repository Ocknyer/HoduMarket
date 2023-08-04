import DefaultWrapper from '../components/common/Wrapper/DefaultWrapper';
import { useEffect } from 'react';
import getCartItems from '../api/cart/getCartItems';
import { useState } from 'react';
import CartList from '../components/Cart/CartList';
import TotalSection from '../components/Cart/TotalSection';
import { useRecoilState } from 'recoil';
import { modalIsOpen } from '../atoms';
import Modal from '../components/Modal/Modal';
import deleteCartItem from '../api/cart/deleteCartItem';
import { CheckBox } from '../components/common/Input/CheckBox';
import { useNavigate } from 'react-router-dom';
import { InnerWrapper } from '../components/common/Wrapper/InnerWrapper';
import { Typography } from '@mui/material';
import { CartHeader } from '../components/common/CartHeader/CartHeader';
import { CartItem } from '../interface/types';

const Cart = () => {
  const [cartLists, setCartLists] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);
  const [deletedItem, setDeletedItem] = useState<number>();
  const [selected, setSelected] = useState(false);
  const [item_id, setItem_id] = useState<number>();
  // const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getCartItems()
      .then(data => {
        setCartLists(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [deletedItem]);

  const payment = cartLists.reduce(
    (acc: any, cur: any) => {
      if (cur.is_active) {
        return (acc = {
          price: acc.price + cur.price * cur.quantity,
          shipping_fee: acc.shipping_fee + cur.shipping_fee,
        });
      }
      return acc;
    },
    { price: 0, shipping_fee: 0, stock: 0 },
  );

  const onClickModal = (type: string, cart_item_id?: number) => {
    type === 'open' ? setIsOpen(true) : setIsOpen(false);
    setItem_id(cart_item_id);
  };

  const deleteItem = () => {
    if (item_id) {
      deleteCartItem(item_id)
        .then(() => {
          setDeletedItem(item_id);
        })
        .catch(error => {
          console.log(error);
        });
    }
    setIsOpen(false);
  };

  const handleChecked = () => {
    setSelected(prev => !prev);
  };

  const navigate = useNavigate();

  const MoveToOrder = () => {
    navigate('/order', {
      state: {
        cartLists: cartLists,
        payment: payment,
        order_kind: 'cart_order',
      },
    });
  };

  const MoveToOrderOne = (product_id: number | undefined) => {
    const cartItemIdx = cartLists.findIndex(el => el.product_id === product_id);

    const curItem: any = cartLists[cartItemIdx];

    const payment = {
      price: curItem.price * curItem.quantity,
      shipping_fee: curItem.shipping_fee,
    };

    navigate('/order', {
      state: {
        cartLists: [cartLists[cartItemIdx]],
        payment: payment,
        order_kind: 'cart_one_order',
      },
    });
  };

  return (
    <DefaultWrapper>
      <InnerWrapper>
        <Typography variant='h1'>장바구니</Typography>
        <CartHeader>
          <CheckBox
            type={'checkbox'}
            onChange={handleChecked}
            // checked={isActive}
          />
          <p className='product-info'>상품정보</p>
          <p className='quantity'>수량</p>
          <p className='product-price'>상품금액</p>
        </CartHeader>
        <CartList
          selected={selected}
          cartLists={cartLists}
          setCartLists={setCartLists}
          onClickModal={onClickModal}
          MoveToOrderOne={MoveToOrderOne}
        />
        {cartLists.length > 0 && <TotalSection payment={payment} MoveToOrder={MoveToOrder} />}
      </InnerWrapper>
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
