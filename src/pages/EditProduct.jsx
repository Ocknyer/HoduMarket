import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProductDetail } from "../api/axios-api";
import DefaultWrapper from "../components/common/Wrapper/DefaultWrapper";
import { Box, Typography } from "@mui/material";
import SideNotice from "../components/ManageProduct/SideNotice";
import ProductInfo from "../components/ManageProduct/ProductInfo";
import EditorSection from "../components/ManageProduct/EditorSection";
import { useState } from "react";

const EditProduct = () => {
  const location = useLocation();
  const [productData, setProductData] = useState({});

  const productId = location.state.product_id;

  const [valueTest, setValueTest] = useState({
    product_name: "",
    price: 0,
    shipping_fee: 0,
    shipping_method: "",
    stock: 0,
    products_info: "",
  });

  useEffect(() => {
    getProductDetail(productId)
      .then((data) => {
        setProductData(data);
        setValueTest({
          product_name: data.product_name,
          price: data.price,
          shipping_fee: data.shipping_fee,
          shipping_method: data.shipping_method,
          stock: data.stock,
          products_info: data.products_info,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  const handleDataTest = (e) => {
    const { name, value } = e.target;
    setValueTest({ ...valueTest, [name]: value });
  };

  console.log(productData);
  console.log("---");
  console.log(valueTest);

  return (
    <DefaultWrapper>
      <Typography variant="h1" mt="44px">
        상품 수정
      </Typography>
      <Box
        sx={{
          display: "flex",
          mt: "42px",
          width: "100%",
        }}
      >
        <SideNotice />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            ml: "80px",
          }}
        >
          <ProductInfo
            productData={productData}
            handleDataTest={handleDataTest}
            valueTest={valueTest}
          />
          <EditorSection />
        </Box>
      </Box>
    </DefaultWrapper>
  );
};

export default EditProduct;
