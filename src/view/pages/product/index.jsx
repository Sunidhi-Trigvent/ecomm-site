import React, { useMemo, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { useParams } from "react-router-dom";
import Container_main from "./designing.jsx/container";

const Product = () => {
  const params = useParams();
  const { productDetails } = useProducts(params?.id);
  const [productDetail, setProductDetail] = useState([]);

  useMemo(() => {
    setProductDetail(productDetails);
  }, [productDetails]);

  console.log(productDetail);

  return (
    <>
      <p>Home/{productDetail?.name}</p>
      <Container_main productDetail={productDetail} />
    </>
  );
};

export default Product;
