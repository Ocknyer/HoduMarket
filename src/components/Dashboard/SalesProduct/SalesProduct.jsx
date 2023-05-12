import Button from '../../common/Button/Button';
import { SalesProductWrapper } from './styled';

const SalesProduct = ({ sellerProduct }) => {
  return sellerProduct.map((item) => {
    return (
      <SalesProductWrapper key={item.product_id}>
        <div className='product-info'>
          <img
            className='product-image'
            src={item.image}
            alt={item.product_name + '사진'}
          />
          <div className='product-text'>
            <p className='product-name'>{item.product_name}</p>
            <p className='stock'>재고 : {item.stock}개</p>
          </div>
        </div>
        <p className='price'>{item.price.toLocaleString()}원</p>
        <div className='btn-section'>
          <Button>수정</Button>
        </div>
        <div className='btn-section'>
          <Button>삭제</Button>
        </div>
      </SalesProductWrapper>
    );
  });
};

export default SalesProduct;
