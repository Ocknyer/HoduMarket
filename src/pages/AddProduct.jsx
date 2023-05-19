import { Box, Button, Typography } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          mt: "42px",
          width: "100%",
          //   flexDirection: "column",
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
          <ProductInfo />
          <EditorSection />
          <Box
            sx={{
              mt: "50px",
              ml: "auto",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: "200px",
                mr: "14px",
              }}
            >
              취소
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: "200px",
              }}
            >
              저장하기
            </Button>
          </Box>
        </Box>
      </Box>
    </DefaultWrapper>
  );
};

export default AddProduct;
