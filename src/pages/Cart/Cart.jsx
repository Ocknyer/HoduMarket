import DefaultWrapper from '../../components/common/Wrapper/DefaultWrapper';
import { CartHeader, CartWrapper } from './styled';
import { useEffect } from 'react';
import getCartItems from '../../api/cart/getCartItems';
import { useState } from 'react';
import CartList from '../../components/Cart/CartList/CartList';
import TotalSection from '../../components/Cart/TotalSection/TotalSection';

const Cart = () => {
  const [cartLists, setCartLists] = useState([]);

  useEffect(() => {
    getCartItems()
      .then((data) => {
        setCartLists(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <CartList cartLists={cartLists} />
        <TotalSection cartLists={cartLists} />
      </CartWrapper>
    </DefaultWrapper>
  );
};

export default Cart;
