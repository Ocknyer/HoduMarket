import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo-hodu.png";
// import Buttonn from "../common/Button/Button";
import UserTab from "./UserTab";
import {
  Box,
  TextField,
  Button,
  Paper,
  Checkbox,
  Typography,
  Container,
} from "@mui/material";
// import checkOnIcon from "../../assets/img/icon-check-on.svg";
// import checkOffIcon from "../../assets/img/icon-check-off.svg";

const UserSignUp = ({
  tempUserType,
  onClick,
  onSubmit,
  onChange,
  onDoubleCheck,
  usernameMsg,
  passwordMsg,
  errors,
  isValid,
  passwordCheck,
}) => {
  // console.log(errors, isValid);

  const inputFlexBox = {
    display: "flex",
    width: "100%",
    gap: "10px",
  };

  return (
    <Container
      sx={{
        width: "550px",
        display: "flex",
        flexWrap: "wrap",
        m: "100px auto",
        justifyContent: "center",
      }}
    >
      <Link to="/">
        <Box
          component="img"
          src={logo}
          alt="호두마켓 로고"
          sx={{ mb: "70px" }}
        />
      </Link>
      <UserTab tempUserType={tempUserType}>
        <button type="button" id="BUYER" onClick={onClick}>
          구매회원 가입
        </button>
        <button type="button" id="SELLER" onClick={onClick}>
          판매회원 가입
        </button>
      </UserTab>
      <Paper
        component="form"
        onSubmit={onSubmit}
        elevation={0}
        sx={{
          width: "100%",
          position: "relative",
          p: "40px 34px 35px",
          borderRadius: "10px",
          borderColor: "#fff",
          zIndex: "99",
          border: "1px solid var(--greyC4);",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Box sx={inputFlexBox}>
            <TextField
              label="아이디"
              type="text"
              name="username"
              width="100%"
              onChange={onChange}
              helperText={usernameMsg}
              sx={{
                display: "flex",
                flex: 1,
              }}
            />
            <Button
              variant="contained"
              size="medium"
              type="button"
              onClick={onDoubleCheck}
              disableElevation
              sx={{
                width: "122px",
              }}
            >
              중복확인
            </Button>
          </Box>
          <TextField
            label="비밀번호"
            type="password"
            name="password"
            onChange={onChange}
          />
          <TextField
            label="비밀번호 확인"
            type="password"
            name="password2"
            onChange={onChange}
            onKeyUp={passwordCheck}
            helperText={passwordMsg ? passwordMsg : null}
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            label="이름"
            type="text"
            name="name"
            width="100%"
            onChange={onChange}
          />

          <TextField
            label="휴대폰 번호"
            type="number"
            width="100%"
            name="phone_number"
            onChange={onChange}
          />
          <TextField label="이메일" type="text" />
          {tempUserType === "SELLER" ? (
            <>
              <Box sx={{ ...inputFlexBox, mt: "10px" }}>
                <TextField
                  label="사업자 등록번호"
                  type="text"
                  sx={{
                    display: "flex",
                    flex: 1,
                  }}
                />
                <Button
                  variant="contained"
                  size="medium"
                  disableElevation
                  sx={{ width: "122px" }}
                >
                  인증
                </Button>
              </Box>
              <TextField label="스토어 이름" type="text" width="100%" />
            </>
          ) : null}
        </Box>
      </Paper>
      <Box
        sx={{
          width: "480px",
          display: "flex",
          alignItems: "flex-start",
          m: "34px 0",
        }}
      >
        <Checkbox
          size="small"
          aria-label="policy"
          sx={{
            width: "30px",
            height: "22px",
          }}
        />
        <Typography color="text.grey" variant="h5" component="p" id="policy">
          호두샵의{" "}
          <Typography component="span" sx={{ textDecoration: "underline" }}>
            이용약관
          </Typography>{" "}
          및
          <Typography component="span" sx={{ textDecoration: "underline" }}>
            {" "}
            개인정보처리방침
          </Typography>
          에 대한 내용을 확인하였고 동의합니다.
        </Typography>
      </Box>
      <Button
        variant="contained"
        type="submit"
        size="large"
        // bc="#c4c4c4"
        onClick={onSubmit}
        disableElevation
        sx={{
          width: "480px",
        }}
      >
        가입하기
      </Button>
    </Container>
  );
};

export default UserSignUp;
