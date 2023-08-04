import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../api/axios-api';
import ProductDetail from '../components/Products/ProductDetail';
import { ProductData } from '../interface/types';

const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState<ProductData>();
  const [quantity, setQuantity] = useState(1);
  const stock: number | undefined = productData?.stock;

  useEffect(() => {
    getProductDetail(id)
      .then(data => {
        setProductData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleQuantity = (e: any) => {
    if (stock) {
      if (e.target.name === 'increment' && quantity < stock) {
        setQuantity(prev => prev + 1);
      }
      if (e.target.name === 'decrement' && quantity > 0) {
        setQuantity(prev => prev - 1);
      }
    }
  };

  return (
    <>
      {productData && (
        <ProductDetail
          productData={productData}
          handleQuantity={handleQuantity}
          quantity={quantity}
        />
      )}
    </>
  );
};

export default Product;
