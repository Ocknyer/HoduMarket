import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import UploadBtn from "../../assets/img/icon-img.png";
import { useState } from "react";

const ProductInfo = () => {
  const [inputLength, setInputLength] = useState(0);

  const changeInputLength = (e) => {
    setInputLength(e.target.value.length);
  };

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
          component="label"
          htmlFor="product_img"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "454px",
            height: "454px",
            mt: "10px",
            mr: "40px",
            backgroundColor: "primary.grey",
          }}
        >
          <input
            type="file"
            accept="image/*"
            id="product_img"
            style={{ display: "none" }}
          />
          <img src={UploadBtn} alt="이미지 업로드 버튼" />
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
        <OutlinedInput
          onChange={changeInputLength}
          endAdornment={
            <InputAdornment position="start">{inputLength}/20</InputAdornment>
          }
          inputProps={{
            maxlength: "20",
          }}
        />

        <Typography variant="h5" color="text.grey">
          판매가
        </Typography>
        <OutlinedInput
          endAdornment={<InputAdornment position="start">원</InputAdornment>}
          sx={{ width: "220px" }}
        />
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
        <OutlinedInput
          endAdornment={<InputAdornment position="start">원</InputAdornment>}
          sx={{ width: "220px" }}
        />
        <Typography variant="h5" color="text.grey">
          재고
        </Typography>
        <OutlinedInput
          endAdornment={<InputAdornment position="start">개</InputAdornment>}
          sx={{ width: "220px" }}
        />
      </Box>
    </Box>
  );
};

export default ProductInfo;
