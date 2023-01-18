import { Link } from "react-router-dom";
import { FooterWrapper, InnerHeader } from "./styled";

import insta from "../../../assets/img/icon-insta.svg";
import facebook from "../../../assets/img/icon-fb.svg";
import youtube from "../../../assets/img/icon-yt.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerHeader>
        <div className="link-wrapper">
          <Link to="/">호두샵 소개</Link> |
          <Link to="/">이용약관</Link> |
          <Link to="/">개인정보처리방침</Link> |
          <Link to="/">전자금융거래약관</Link> |
          <Link to="/">청소년보호정책</Link> |
          <Link to="/">제휴문의</Link>
        </div>
        <div className="icon-wrapper">
          <Link to="/">
            <img src={insta} alt="인스타그램 이동" />
          </Link>
          <Link to="/">
            <img src={facebook} alt="페이스북 이동" />
          </Link>
          <Link to="/">
            <img src={youtube} alt="유튜브 이동" />
          </Link>
        </div>
      </InnerHeader>
    </FooterWrapper>
  );
};

export default Footer;
