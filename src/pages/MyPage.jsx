import { Box, Button } from "@mui/material";
import DefaultWrapper from "../components/common/Wrapper/DefaultWrapper";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { userTypeValue } from "../atoms";

const MyPage = () => {
  const navigate = useNavigate();
  const resetUserType = useResetRecoilState(userTypeValue);

  const handleLogout = () => {
    resetUserType();
    localStorage.clear();
    navigate("/");
  };

  return (
    <DefaultWrapper>
      <Box
        sx={{
          mt: "30px",
        }}
      >
        <Button variant="contained" onClick={handleLogout}>
          로그아웃
        </Button>
      </Box>
    </DefaultWrapper>
  );
};

export default MyPage;
