import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getSellerProduct from "../api/product/getSellerProduct";
import { useState } from "react";
import deleteSellerProduct from "../api/product/deleteSellerProduct";
import Modal from "../components/Modal/Modal";
import { useRecoilState } from "recoil";
import { modalIsOpen } from "../atoms";

const SellerCenter = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpen);
  const [sellerProduct, setSellerProduct] = useState([]);
  const [productId, setProductId] = useState(0);

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
  const handleDeleteProduct = () => {
    deleteSellerProduct(productId).then((data) => {
      console.log(data);
    });
  };

  const handleModalOpen = (product_id) => {
    setProductId(product_id);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Dashboard
        onClickUpdate={onClickUpdate}
        sellerProduct={sellerProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleToEditProduct={handleToEditProduct}
        handleModalOpen={handleModalOpen}
      />
      {isOpen ? (
        <Modal
          rejectText="취소"
          resultText="확인"
          onClickReject={handleModalOpen}
          onClickResult={handleDeleteProduct}
        >
          상품을 삭제하시겠습니까?
        </Modal>
      ) : null}
    </>
  );
};

export default SellerCenter;
