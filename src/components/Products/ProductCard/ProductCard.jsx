import ProductCardWrapper from './styled';

const ProductCard = ({ data }) => {
  return (
    <ProductCardWrapper>
      <img src={data.image} alt='' />
      <p className='store-name'>{data.store_name}</p>
      <p className='product-name'>{data.product_name}</p>
      <p className='price'>
        {data.price.toLocaleString()}
        <span>원</span>
      </p>
    </ProductCardWrapper>
  );
};

export default ProductCard;
