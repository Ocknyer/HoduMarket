import { Box, Typography } from "@mui/material";
import DefaultWrapper from "../components/common/Wrapper/DefaultWrapper";
import SideNotice from "../components/ManageProduct/SideNotice";
import ProductInfo from "../components/ManageProduct/ProductInfo";
import EditorSection from "../components/ManageProduct/EditorSection";
import { useState } from "react";
import postSellerProduct from "../api/product/postSellerProduct";

const AddProduct = () => {
  const [inputValue, setInputValue] = useState({
    product_name: "",
    image: "",
    price: 0,
    shipping_method: "",
    shipping_fee: 0,
    stock: 0,
    products_info: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const registProduct = () => {
    postSellerProduct(inputValue)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DefaultWrapper>
      <Typography variant="h1" mt="44px">
        상품 등록
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
          <ProductInfo handleData={handleData} inputValue={inputValue} />
          <EditorSection registProduct={registProduct} />
        </Box>
      </Box>
    </DefaultWrapper>
  );
};

export default AddProduct;
