import { Link } from "react-router-dom";
import insta from "../../assets/img/icon-insta.svg";
import facebook from "../../assets/img/icon-fb.svg";
import youtube from "../../assets/img/icon-yt.svg";
import { Box } from "@mui/material";
import styled from "styled-components";

const LinkWrapper = styled.div`
  display: flex;
  gap: 28px;

  > a {
    font-size: 14px;
    color: black;
  }

  .bold {
    font-weight: 700;
  }
`;

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "1280px",
        p: "55px 0",
        bottom: "0",
        m: "0 auto",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: "22px",
          borderBottom: "1px solid",
          borderColor: "border.primary",
        }}
      >
        <LinkWrapper>
          <Link to="/">호두샵 소개</Link> |<Link to="/">이용약관</Link> |
          <Link to="/" className="bold">
            개인정보처리방침
          </Link>{" "}
          |<Link to="/">전자금융거래약관</Link> |<Link to="/">청소년보호정책</Link> |
          <Link to="/">제휴문의</Link>
        </LinkWrapper>
        <Box display="flex" gap="14px">
          <Link to="/">
            <img src={insta} alt="인스타그램 이동" />
          </Link>
          <Link to="/">
            <img src={facebook} alt="페이스북 이동" />
          </Link>
          <Link to="/">
            <img src={youtube} alt="유튜브 이동" />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: "14px",
          lineHeight: "24px",
          pt: "30px",
          color: "grey.secondary",
        }}
      >
        <h3>(주)HODU SHOP</h3>
        <p>제주특별자치도 제주시 동광로 137 제주코딩베이스캠프</p>
        <p>사업자 번호 : 000-0000-0000 | 통신판매업</p>
        <p>대표 : 김호두</p>
      </Box>
    </Box>
  );
};

export default Footer;
