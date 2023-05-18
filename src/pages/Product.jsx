import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../api/axios-api";
import ProductDetail from "../components/Products/ProductDetail";

const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [quantity, setQuantity] = useState(1);

  const token = localStorage.getItem("token");
  // console.log(token);

  useEffect(() => {
    getProductDetail(id)
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(productData);

  const handleQuantity = (e) => {
    if (e.target.name === "increment" && quantity < productData.stock) {
      setQuantity((prev) => prev + 1);
    }
    if (e.target.name === "decrement" && quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      {productData && (
        <ProductDetail
          productData={productData}
          handleQuantity={handleQuantity}
          quantity={quantity}
        />
      )}
    </>
  );
};

export default Product;
