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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(productData);

  return (
    <ProductListWrapper>
      <h2 className='ir'>상품리스트</h2>
      {productData.map((data) => (
        <ProductCard data={data} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
