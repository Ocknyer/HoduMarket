import { Box, Button, InputAdornment, OutlinedInput, Paper, Typography } from "@mui/material";
import UploadBtn from "../../assets/img/icon-img.png";
import { useRef, useState } from "react";

const ProductInfo = ({ inputValue, valueTest, handleDataTest, handleData, productData }) => {
  const [inputLength, setInputLength] = useState(0);
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const changeInputLength = (e) => {
    setInputLength(e.target.value.length);
  };

  // 이미지를 받는 서버가 없나..?
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const onClickInput = () => {
    imgRef.current.click();
  };

  return (
    <>
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
          {imgFile || productData?.image ? (
            <Paper
              onClick={onClickInput}
              component="img"
              src={imgFile ? imgFile : productData.image ? productData.image : null}
              alt="상품 이미지"
              elevation={0}
              sx={{
                width: "454px",
                height: "454px",
                m: "10px 40px 0 0",
              }}
            />
          ) : (
            <Paper
              component="label"
              htmlFor="product_img"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "454px",
                height: "454px",
                m: "10px 40px 0 0",
                background: `#c4c4c4 url(${UploadBtn}) no-repeat center`,
              }}
            ></Paper>
          )}
          <input
            type="file"
            accept="image/*"
            id="product_img"
            name="image"
            style={{ display: "none" }}
            onChange={saveImgFile}
            ref={imgRef}
          />
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
            value={valueTest?.product_name || inputValue?.product_name || ""}
            onChange={productData ? handleDataTest : handleData}
            onInput={changeInputLength}
            name="product_name"
            endAdornment={<InputAdornment position="start">{inputLength}/20</InputAdornment>}
            inputProps={{
              maxLength: "20",
            }}
          />

          <Typography variant="h5" color="text.grey">
            판매가
          </Typography>
          <OutlinedInput
            value={valueTest?.price || inputValue?.price || ""}
            onChange={productData ? handleDataTest : handleData}
            name="price"
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
            value={valueTest?.shipping_fee || inputValue?.shipping_fee || ""}
            onChange={productData ? handleDataTest : handleData}
            name="shipping_fee"
            endAdornment={<InputAdornment position="start">원</InputAdornment>}
            sx={{ width: "220px" }}
          />
          <Typography variant="h5" color="text.grey">
            재고
          </Typography>
          <OutlinedInput
            value={valueTest?.stock || inputValue?.stock || ""}
            onChange={productData ? handleDataTest : handleData}
            name="stock"
            endAdornment={<InputAdornment position="start">개</InputAdornment>}
            sx={{ width: "220px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductInfo;
