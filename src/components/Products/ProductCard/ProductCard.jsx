import { Link } from 'react-router-dom';
import ProductCardWrapper from './styled';

const ProductCard = ({ data }) => {
  return (
    <ProductCardWrapper>
      <Link to={`/product/${data.product_id}`}>
        <img className='product-img' src={data.image} alt='' />
        <p className='store-name'>{data.store_name}</p>
        <p className='product-name'>{data.product_name}</p>
        <p className='price'>
          {data.price.toLocaleString()}
          <span>원</span>
        </p>
      </Link>
    </ProductCardWrapper>
  );
};

export default ProductCard;
