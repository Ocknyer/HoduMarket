import DefaultWrapper from "../common/Wrapper/DefaultWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import SalesProduct from "./DashboardItems/SalesProduct";
import OrderShip from "./DashboardItems/OrderShip";
import Stats from "./DashboardItems/Stats";
import Setting from "./DashboardItems/Setting";
import Ask from "./DashboardItems/Ask";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ControlPoint } from "@mui/icons-material";

const Dashboard = ({
  sellerProduct,
  onClickUpdate,
  handleEditProduct,
  handleDeleteProduct,
  handleToEditProduct,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname;

  const handleToAddProduct = () => {
    navigate("/sellercenter/addproduct");
  };

  return (
    <DefaultWrapper>
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          m: "38px 0",
        }}
      >
        <Typography variant="h1">
          대시보드{" "}
          <Typography
            variant="h2"
            fontWeight="500"
            component="span"
            color="primary.main"
          >
            백엔드글로벌
          </Typography>
        </Typography>
        <Button
          variant="contained"
          disableElevation
          startIcon={<ControlPoint />}
          onClick={handleToAddProduct}
          sx={{
            width: "168px",
            height: "54px",
            fontSize: "18px",
          }}
        >
          상품 업로드
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
        }}
      >
        <nav>
          <List
            component="ul"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              p: "0",
              gap: "10px",
            }}
          >
            {[
              {
                id: 1,
                text: "판매중인 상품",
                pathname: "/sellercenter/dashboard/salesproduct",
              },
              {
                id: 2,
                text: "주문/배송",
                pathname: "/sellercenter/dashboard/ordership",
              },
              {
                id: 3,
                text: "문의/리뷰",
                pathname: "/sellercenter/dashboard/ask",
              },
              {
                id: 4,
                text: "통계",
                pathname: "/sellercenter/dashboard/stats",
              },
              {
                id: 5,
                text: "스토어 설정",
                pathname: "/sellercenter/dashboard/setting",
              },
            ].map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  p: "0",
                }}
              >
                <ListItemButton
                  id={item.id}
                  selected={pathname === item.pathname ? true : false}
                  onClick={() => onClickUpdate(item.text)}
                  sx={{
                    borderRadius: "5px",
                    "&.Mui-selected": {
                      backgroundColor: "#21BF48",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "#21BF48",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "#21BF48",
                    },
                    ":hover": {
                      backgroundColor: "#effff3",
                    },
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <Box
          component="section"
          sx={{
            width: "100%",
            border: "1px solid",
            borderColor: "border.primary",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              p: "18px 0",
              textAlign: "center",
              fontSize: "18px",
              borderBottom: "1px solid",
              borderColor: "border.primary",
            }}
          >
            <Typography width="50%">상품정보</Typography>
            <Typography width="30%">판매가격</Typography>
            <Typography width="10%">수정</Typography>
            <Typography width="10%">삭제</Typography>
          </Box>
          {location.pathname === "/sellercenter/dashboard/salesproduct" && (
            <SalesProduct
              sellerProduct={sellerProduct}
              handleEditProduct={handleEditProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleToEditProduct={handleToEditProduct}
            />
          )}
          {location.pathname === "/sellercenter/dashboard/ordership" && (
            <OrderShip />
          )}
          {location.pathname === "/sellercenter/dashboard/stats" && <Stats />}
          {location.pathname === "/sellercenter/dashboard/ask" && <Ask />}
          {location.pathname === "/sellercenter/dashboard/setting" && (
            <Setting />
          )}
        </Box>
      </Box>
    </DefaultWrapper>
  );
};

export default Dashboard;
