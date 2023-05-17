import { useState } from "react";
import { useEffect } from "react";
import { getProductList } from "../../api/axios-api";
import ProductCard from "./ProductCard";
import { onSearch, searchProducts } from "../../atoms";
import { useRecoilValue } from "recoil";
import { Box, Typography } from "@mui/material";

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

  const productListBox = {
    display: "flex",
    justifyContent: "space-between",
    pt: "80px",
    flexWrap: "wrap",
    m: "auto",
    maxWidth: 1280,
  };

  const onSearching = useRecoilValue(onSearch);

  return (
    <>
      {!searchData.length && productData && !onSearching && (
        <Box sx={productListBox}>
          <h2 className="ir">상품리스트</h2>
          {productData.map((data) => (
            <ProductCard data={data} key={data.product_id} />
          ))}
        </Box>
      )}
      {onSearching && !searchData.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: "200px",
          }}
        >
          <Typography variant="h3" fontWeight="400">
            검색된 상품이 없습니다.
          </Typography>
        </Box>
      ) : (
        <Box sx={productListBox}>
          <h2 className="ir">상품리스트</h2>
          {searchData.map((data) => (
            <ProductCard data={data} key={data.product_id} />
          ))}
        </Box>
      )}
    </>
  );
};

export default ProductList;
