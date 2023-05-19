import { Box, Typography } from "@mui/material";
import DefaultWrapper from "../components/common/Wrapper/DefaultWrapper";
import SideNotice from "../components/ManageProduct/SideNotice";
import ProductInfo from "../components/ManageProduct/ProductInfo";
import EditorSection from "../components/ManageProduct/EditorSection";

const AddProduct = () => {
  return (
    <DefaultWrapper>
      <Typography variant="h1" mt="44px">
        상품 등록
      </Typography>
      <Box sx={{ display: "flex", mt: "42px", width: "100%" }}>
        <SideNotice />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            ml: "80px",
          }}
        >
          <ProductInfo />
          <EditorSection />
        </Box>
      </Box>
    </DefaultWrapper>
  );
};

export default AddProduct;
