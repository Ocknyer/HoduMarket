import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getSellerProduct from "../api/product/getSellerProduct";
import { useState } from "react";

const SellerCenter = () => {
  const navigate = useNavigate();
  const [sellerProduct, setSellerProduct] = useState([]);

  const onClickUpdate = (text) => {
    if (text === "판매중인 상품") {
      navigate("/sellercenter/salesproduct");
    } else if (text === "주문/배송") {
      navigate("/sellercenter/ordership");
    } else if (text === "문의/리뷰") {
      navigate("/sellercenter/ask");
    } else if (text === "통계") {
      navigate("/sellercenter/stats");
    } else if (text === "스토어 설정") {
      navigate("/sellercenter/setting");
    }
  };

  useEffect(() => {
    getSellerProduct()
      .then((data) => {
        console.log(data);
        setSellerProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Dashboard onClickUpdate={onClickUpdate} sellerProduct={sellerProduct} />
    </>
  );
};

export default SellerCenter;
