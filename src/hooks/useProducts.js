import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";

export default function useProducts(productId) {
  const { request } = useAuth();

  const {
    data: productDetails,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useQuery(
    "getProduct",
    async () => {
      const response = await request.get(`/products/${productId}`);
      return response.data;
    },
    {
      enabled: !!productId,
    }
  );

  //api to display products in feature page
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(`['getProducts']`, async () => {
    const response = await request.get("/products");
    return response.data;
  });

  return {
    productDetails,
    products,
    isLoading,
    isError,
  };
}
