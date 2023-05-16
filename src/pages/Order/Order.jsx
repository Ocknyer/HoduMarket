import { useLocation } from "react-router-dom";
import DefaultWrapper from "../../components/common/Wrapper/DefaultWrapper";
import {
  InnerWrapper,
  InnerHeader,
} from "../../components/common/Wrapper/InnerWrapper";
import OrderList from "../../components/Order/OrderList";
import UserInfo from "../../components/Order/UserInfo";
import { Box, Typography } from "@mui/material";

const Order = () => {
  const location = useLocation();

  const cartData = location.state.cartLists;
  const totalPayment =
    location.state.payment.price + location.state.payment.shipping_fee;

  return (
    <DefaultWrapper>
      <InnerWrapper>
        <Typography variant="h1">주문하기</Typography>
        <InnerHeader>
          <span className="product-info">상품정보</span>
          <span className="discount">할인</span>
          <span className="shipping-fee">배송비</span>
          <span className="price">주문금액</span>
        </InnerHeader>
        <OrderList cartData={cartData} />
        <Box
          sx={{
            ml: "auto",
            fontSize: "14px",
            mt: "30px",
          }}
        >
          <Typography variant="h4" component="p" fontWeight="500">
            총 주문금액{" "}
            <Typography variant="h3" component="span" color="text.red">
              {totalPayment.toLocaleString()}원
            </Typography>
          </Typography>
        </Box>
        <UserInfo />
      </InnerWrapper>
    </DefaultWrapper>
  );
};

export default Order;
