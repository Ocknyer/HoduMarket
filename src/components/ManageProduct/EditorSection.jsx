import { Box, Paper, Typography } from "@mui/material";

const EditorSection = () => {
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
    </Box>
  );
};

export default EditorSection;
