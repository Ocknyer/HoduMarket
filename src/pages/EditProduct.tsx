import { ChangeEvent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getProductDetail } from '../api/axios-api';
import DefaultWrapper from '../components/common/Wrapper/DefaultWrapper';
import { Box, Typography } from '@mui/material';
import SideNotice from '../components/ManageProduct/SideNotice';
import ProductInfo from '../components/ManageProduct/ProductInfo';
import EditorSection from '../components/ManageProduct/EditorSection';
import { useState } from 'react';
import putProduct from '../api/product/putProduct';

export interface InputValue {
  image: string;
  product_name: string;
  price: number;
  shipping_fee: number;
  shipping_method: string;
  stock: number;
  products_info: string;
}

const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productData, setProductData] = useState({});

  const productId = location.state.product_id;

  const [valueTest, setValueTest] = useState<InputValue>({
    image: '',
    product_name: '',
    price: 0,
    shipping_fee: 0,
    shipping_method: '',
    stock: 0,
    products_info: '',
  });

  const handleEditProduct = () => {
    putProduct(productId, valueTest)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductDetail(productId)
      .then((data) => {
        setProductData(data);
        setValueTest({
          image: data.image,
          product_name: data.product_name,
          price: data.price,
          shipping_fee: data.shipping_fee,
          shipping_method: data.shipping_method,
          stock: data.stock,
          products_info: data.product_info,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  const handleDataTest = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValueTest({ ...valueTest, [name]: value });
  };

  console.log(productData);
  console.log('---');
  console.log(valueTest);

  return (
    <DefaultWrapper>
      <Typography variant='h1' mt='44px'>
        상품 수정
      </Typography>
      <Box
        sx={{
          display: 'flex',
          mt: '42px',
          width: '100%',
        }}
      >
        <SideNotice />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            ml: '80px',
          }}
        >
          <ProductInfo
            productData={productData}
            handleDataTest={handleDataTest}
            valueTest={valueTest}
          />
          <EditorSection handleEditProduct={handleEditProduct} />
        </Box>
      </Box>
    </DefaultWrapper>
  );
};

export default EditProduct;
