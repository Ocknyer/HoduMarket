import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getSellerProduct from "../api/product/getSellerProduct";
import { useState } from "react";
import deleteSellerProduct from "../api/product/deleteSellerProduct";

const SellerCenter = () => {
  const navigate = useNavigate();
  const [sellerProduct, setSellerProduct] = useState([]);

  const onClickUpdate = (text) => {
    if (text === "판매중인 상품") {
      navigate("/sellercenter/dashboard/salesproduct");
    } else if (text === "주문/배송") {
      navigate("/sellercenter/dashboard/ordership");
    } else if (text === "문의/리뷰") {
      navigate("/sellercenter/dashboard/ask");
    } else if (text === "통계") {
      navigate("/sellercenter/dashboard/stats");
    } else if (text === "스토어 설정") {
      navigate("/sellercenter/dashboard/setting");
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

  const handleToEditProduct = (product_id) => {
    navigate("/sellercenter/editproduct", {
      state: {
        product_id,
      },
    });
  };

  // 모달창 띄워야 함
  const handleDeleteProduct = (product_id) => {
    deleteSellerProduct(product_id).then((data) => {
      console.log(data);
    });
  };

  const [inputValue, setInputValue] = useState({
    product_name: "",
    image: "",
    price: 0,
    shipping_method: "",
    shipping_fee: 0,
    stock: 0,
    products_info: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <>
      <Dashboard
        onClickUpdate={onClickUpdate}
        sellerProduct={sellerProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleToEditProduct={handleToEditProduct}
      />
    </>
  );
};

export default SellerCenter;
