import { useState } from 'react';
import { useEffect } from 'react';
import { getProductList } from '../../../api/axios-api';
import ProductCard from '../ProductCard/ProductCard';
import { ProductListWrapper } from './styled';

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductList()
      .then((data) => {
        setProductData(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductListWrapper>
      <h2 className='ir'>상품리스트</h2>
      {productData.map((data) => (
        <ProductCard data={data} key={data.product_id} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
