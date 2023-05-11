import { ItemInfo, OrderlistWrapper } from './styled';

const OrderList = ({ cartData }) => {
  return cartData.map((item) => (
    <OrderlistWrapper key={item.product_id}>
      <ItemInfo>
        <img src={item.image} alt='' />
        <div className='text-info'>
          <p className='store-name'>{item.store_name}</p>
          <p className='product-name'>{item.product_name}</p>
          <p className='quantity'>수량 : {item.quantity}개</p>
        </div>
      </ItemInfo>
      <p className='discount'>-</p>
      <p className='shipping-fee'>
        {item.shipping_fee.toLocaleString()}원
      </p>
      <p className='price'>
        {(item.price * item.quantity).toLocaleString()}원
      </p>
    </OrderlistWrapper>
  ));
};

export default OrderList;
