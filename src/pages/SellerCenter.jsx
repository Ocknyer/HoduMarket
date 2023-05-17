import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getSellerProduct from "../api/product/getSellerProduct";
import { useState } from "react";

const SellerCenter = () => {
  const navigate = useNavigate();
  const [sellerProduct, setSellerProduct] = useState([]);

  const onClickSalesProduct = () => {
    navigate("/sellercenter/salesproduct");
  };

  const onClickOrderShip = () => {
    navigate("/sellercenter/ordership");
  };

  const onClickAsk = () => {
    navigate("/sellercenter/ask");
  };

  const onClickStats = () => {
    navigate("/sellercenter/stats");
  };

  const onClickSetting = () => {
    navigate("/sellercenter/setting");
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
      <Dashboard
        sellerProduct={sellerProduct}
        onClickSalesProduct={onClickSalesProduct}
        onClickOrderShip={onClickOrderShip}
        onClickAsk={onClickAsk}
        onClickStats={onClickStats}
        onClickSetting={onClickSetting}
      />
    </>
  );
};

export default SellerCenter;
