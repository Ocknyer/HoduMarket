import { useState } from 'react';
import { useEffect } from 'react';
import { getProductList } from '../../../api/axios-api';
import ProductCard from '../ProductCard/ProductCard';
import { ProductListWrapper } from './styled';
import { searchProducts } from '../../../atoms';
import { useRecoilValue } from 'recoil';

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const searchData = useRecoilValue(searchProducts);

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
    <>
      {searchData.length < 1 ? (
        <ProductListWrapper>
          <h2 className='ir'>상품리스트</h2>
          {productData.map((data) => (
            <ProductCard data={data} key={data.product_id} />
          ))}
        </ProductListWrapper>
      ) : (
        <ProductListWrapper>
          {searchData.map((data) => (
            <ProductCard data={data} key={data.product_id} />
          ))}
        </ProductListWrapper>
      )}
    </>
  );
};

export default ProductList;
