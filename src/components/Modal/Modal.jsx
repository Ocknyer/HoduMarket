import { Box, Typography } from "@mui/material";
import Button from "../common/Button/Button";

const Modal = ({
  children,
  rejectText,
  resultText,
  onClickReject,
  onClickResult,
}) => {
  return (
    <>
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          lineHeight: "24px",
          width: "360px",
          height: "200px",
          border: "1px solid var(--greyC4)",
          backgroundColor: "white",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h5" mb="20px">
          {children}
        </Typography>
        <Box display="flex" gap="10px">
          <Button onClick={onClickReject}>{rejectText}</Button>
          <Button onClick={onClickResult}>{resultText}</Button>
        </Box>
      </Box>
    </>
  );
};

export default Modal;
