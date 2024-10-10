import React, { useMemo, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const { productDetails } = useProducts(params?.id);
  const [productDetail, setProductDetail] = useState([]);

  useMemo(() => {
    setProductDetail(productDetails);
  }, [productDetails]);

  console.log(productDetail);

  return <div>{productDetail?.name}</div>;
};

export default Product;
