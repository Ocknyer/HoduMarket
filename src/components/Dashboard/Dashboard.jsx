import {
  DashboardHeader,
  DashboardSidebar,
  DashboardBody,
  DashboardMain,
} from "./styled";
import DefaultWrapper from "../common/Wrapper/DefaultWrapper";
import Plus from "../../assets/img/icon-plus.svg";
import { useLocation } from "react-router-dom";
import SalesProduct from "./SalesProduct/SalesProduct";
import OrderShip from "./OrderShip/OrderShip";
import Stats from "./Stats/Stats";
import Setting from "./Setting/Setting";
import Ask from "./Ask/Ask";

const Dashboard = ({
  sellerProduct,
  onClickSalesProduct,
  onClickOrderShip,
  onClickAsk,
  onClickStats,
  onClickSetting,
}) => {
  const location = useLocation();

  return (
    <DefaultWrapper>
      <DashboardHeader>
        <h2>
          대시보드 <span>백엔드글로벌</span>
        </h2>
        <button className="btn-add-product">
          <img src={Plus} alt="상품 추가 아이콘" className="icon-plus" />
          상품 업로드
        </button>
      </DashboardHeader>
      <DashboardBody>
        <nav>
          <DashboardSidebar>
            <li
              className={
                location.pathname.includes("salesproduct") ? "active" : null
              }
              onClick={onClickSalesProduct}
            >
              판매중인 상품
            </li>
            <li
              className={
                location.pathname.includes("ordership") ? "active" : null
              }
              onClick={onClickOrderShip}
            >
              주문/배송
            </li>
            <li
              className={location.pathname.includes("ask") ? "active" : null}
              onClick={onClickAsk}
            >
              문의/리뷰
            </li>
            <li
              className={location.pathname.includes("stats") ? "active" : null}
              onClick={onClickStats}
            >
              통계
            </li>
            <li
              className={
                location.pathname.includes("setting") ? "active" : null
              }
              onClick={onClickSetting}
            >
              스토어 설정
            </li>
          </DashboardSidebar>
        </nav>
        <DashboardMain>
          <div className="data-header">
            <p className="product-info">상품정보</p>
            <p className="product-price">판매가격</p>
            <p className="edit-product">수정</p>
            <p className="delete-product">삭제</p>
          </div>
          {location.pathname === "/sellercenter/salesproduct" && (
            <SalesProduct sellerProduct={sellerProduct} />
          )}
          {location.pathname === "/sellercenter/ordership" && <OrderShip />}
          {location.pathname === "/sellercenter/stats" && <Stats />}
          {location.pathname === "/sellercenter/ask" && <Ask />}
          {location.pathname === "/sellercenter/setting" && <Setting />}
        </DashboardMain>
      </DashboardBody>
    </DefaultWrapper>
  );
};

export default Dashboard;
