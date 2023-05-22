import { Box, Button, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const EditorSection = ({ registProduct, handleEditProduct }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <Box>
      <Typography variant="h5" color="text.grey">
        상품 상세 정보
      </Typography>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          height: "700px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid var(--greyC4)",
          backgroundColor: "primary.lightGrey",
          mt: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            color: "primary.grey",
          }}
        >
          에디터 영역
        </Typography>
      </Paper>
      <Box
        sx={{
          display: "flex",
          mt: "50px",
          justifyContent: "right",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
          sx={{
            width: "200px",
            mr: "14px",
          }}
        >
          취소
        </Button>
        <Button
          variant="contained"
          onClick={pathname.includes("addproduct") ? registProduct : handleEditProduct}
          disableElevation
          sx={{
            width: "200px",
          }}
        >
          저장하기
        </Button>
      </Box>
    </Box>
  );
};

export default EditorSection;
