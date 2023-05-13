import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../api/axios-api';
import ProductDetail from '../../components/Products/ProductDetail/ProductDetail';

const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [quantity, setQuantity] = useState(1);

  console.log(id);

  const token = localStorage.getItem('token');
  console.log(token);

  useEffect(() => {
    getProductDetail(id)
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleQuantity = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'increment') {
      setQuantity((prev) => prev + 1);
    }
    if (e.target.name === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
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
