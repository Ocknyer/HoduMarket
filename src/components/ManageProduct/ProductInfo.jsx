import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const ProductInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "484px",
        mb: "40px",
      }}
    >
      <Box>
        <Typography variant="h5" color="text.grey">
          상품 이미지
        </Typography>
        <Paper
          sx={{
            width: "454px",
            height: "454px",
            mt: "10px",
            mr: "40px",
            backgroundColor: "primary.grey",
          }}
        >
          업로드임
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" color="text.grey">
          상품명
        </Typography>
        <TextField />
        <Typography variant="h5" color="text.grey">
          판매가
        </Typography>
        <TextField sx={{ width: "220px" }} />
        <Typography variant="h5" color="text.grey">
          배송방법
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Button variant="contained" disableElevation>
            택배, 소포, 등기
          </Button>
          <Button variant="outlined" disableElevation>
            직접배송(화물배달)
          </Button>
        </Box>
        <Typography variant="h5" color="text.grey">
          기본 배송비
        </Typography>
        <TextField sx={{ width: "220px" }} />
        <Typography variant="h5" color="text.grey">
          재고
        </Typography>
        <TextField sx={{ width: "220px" }} />
      </Box>
    </Box>
  );
};

export default ProductInfo;
