import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getSellerProduct from "../api/product/getSellerProduct";
import { useState } from "react";
import putProduct from "../api/product/putProduct";
import deleteSellerProduct from "../api/product/deleteSellerProduct";

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

  const handleEditProduct = (product_id) => {
    console.log(product_id);
    putProduct(product_id)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToEditProduct = (product_id) => {
    navigate("/sellercenter/editproduct", {
      state: {
        product_id,
      },
    });
  };

  const itemData = {
    product_name: "product_name",
    price: "price",
    shipping_method: "shipping_method",
    shipping_fee: "shipping_fee",
    stock: "stock",
    products_info: "products_info",
  };

  // 모달창 띄워야 함
  const handleDeleteProduct = (product_id) => {
    deleteSellerProduct(product_id).then((data) => {
      console.log(data);
    });
  };

  return (
    <>
      <Dashboard
        onClickUpdate={onClickUpdate}
        sellerProduct={sellerProduct}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleToEditProduct={handleToEditProduct}
      />
    </>
  );
};

export default SellerCenter;
