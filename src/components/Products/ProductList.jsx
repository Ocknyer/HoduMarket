import { useState } from "react";
import { useEffect } from "react";
import { getProductList } from "../../api/axios-api";
import ProductCard from "./ProductCard";
import { searchProducts } from "../../atoms";
import { useRecoilValue } from "recoil";
import { Box } from "@mui/material";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const searchData = useRecoilValue(searchProducts);

  useEffect(() => {
    getProductList()
      .then((data) => {
        setProductData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {searchData.length < 1 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "80px",
            flexWrap: "wrap",
            m: "auto",
            maxWidth: 1280,
          }}
        >
          <h2 className="ir">상품리스트</h2>
          {productData.map((data) => (
            <ProductCard data={data} key={data.product_id} />
          ))}
        </Box>
      ) : (
        <Box>
          {searchData.map((data) => (
            <ProductCard data={data} key={data.product_id} />
          ))}
        </Box>
      )}
    </>
  );
};

export default ProductList;
