import { Box, Button } from "@mui/material";
import DefaultWrapper from "../components/common/Wrapper/DefaultWrapper";
import { Navigate, useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { userTypeValue } from "../atoms";

const MyPage = ({ authorization }) => {
  const navigate = useNavigate();
  const resetUserType = useResetRecoilState(userTypeValue);

  const handleLogout = () => {
    resetUserType();
    localStorage.clear();
    navigate("/");
  };

  return authorization ? (
    <>
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
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default MyPage;
