import { Box, Paper, Typography } from "@mui/material";
import Button from "../../common/Button/Button";

const SalesProduct = ({
  sellerProduct,
  handleDeleteProduct,
  handleToEditProduct,
  handleModalOpen,
}) => {
  return sellerProduct.map((item) => {
    return (
      <Box
        key={item.product_id}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "103px",
          borderBottom: "1px solid",
          borderColor: "border.primary",
        }}
      >
        <Box display="flex" alignItems="center" width="50%">
          <Paper
            component="img"
            src={item.image}
            alt={item.product_name + "사진"}
            sx={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              m: "0 30px",
            }}
          />
          <Box textAlign="left">
            <Typography variant="h4" component="p" className="product-name">
              {item.product_name}
            </Typography>
            <Typography variant="h5" component="p" className="stock" color="text.grey">
              재고 : {item.stock}개
            </Typography>
          </Box>
        </Box>
        <Typography variant="h4" component="p" fontWeight="500" width="30%">
          {item.price.toLocaleString()}원
        </Typography>
        <Box width="10%">
          <Button onClick={() => handleToEditProduct(item.product_id)}>
            {/* <Button onClick={() => handleEditProduct(item.product_id)}> */}
            수정
          </Button>
        </Box>
        <Box width="10%">
          <Button onClick={() => handleModalOpen(item.product_id)}>삭제</Button>
          {/* <Button onClick={() => handleDeleteProduct(item.product_id)}>삭제</Button> */}
        </Box>
      </Box>
    );
  });
};

export default SalesProduct;
