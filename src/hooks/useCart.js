import React from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { request } = useAuth();

  // Post data to cart
  const {
    mutateAsync: addToCart,
    isLoading,
    isError,
  } = useMutation(async (cartData) => {
    const response = await request.post("/cart", cartData);
    return response.data;
  });

  // Get data from cart
  const {
    data: getFromCart,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useQuery("/cart", async () => {
    return (await request.get("/cart")).data;
  });

  return {
    addToCart,
    isLoading,
    isError,
    getFromCart, // Return cart data here
  };
};

export default useCart;
