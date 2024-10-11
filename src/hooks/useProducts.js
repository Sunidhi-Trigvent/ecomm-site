import axios from "axios";
import { useQuery } from "react-query";

export default function useProducts(productId) {
  const {
    data: productDetails,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useQuery(
    "getProduct",
    async () => {
      const response = await axios.get(
        `https://api.pujakaitem.com/api/products?id=${productId}`
      );
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
    const response = await axios.get("https://api.pujakaitem.com/api/products");
    return response.data;
  });

  return {
    productDetails,
    products,
    isLoading,
    isError,
  };
}
